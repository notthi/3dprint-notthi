#!/bin/bash
# ============================================================================
# 記事編集ワンクリックアプリのインストーラ
#
# ~/Applications に2つのアプリを生成する:
#   ・「3Dプリントラボ 記事編集.app」 … 最新取得→devサーバー起動→エディタをブラウザで開く
#   ・「3Dプリントラボ 編集終了.app」 … devサーバーを停止
#
# 使い方: bash scripts/install-editor-app.sh
# 再実行すれば上書き更新される。
# ============================================================================
set -euo pipefail

PROJECT="/Users/notthi/Library/CloudStorage/Dropbox/Programing/3dprint-notthi"
APPS_DIR="$HOME/Applications"
mkdir -p "$APPS_DIR"

make_app() {
  local NAME="$1" SCRIPT="$2"
  local APP="$APPS_DIR/$NAME.app"
  rm -rf "$APP"
  mkdir -p "$APP/Contents/MacOS"
  cat > "$APP/Contents/Info.plist" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleName</key><string>$NAME</string>
  <key>CFBundleExecutable</key><string>run</string>
  <key>CFBundleIdentifier</key><string>com.notthi.3dprint.$(echo "$NAME" | /usr/bin/tr -d ' ')</string>
  <key>CFBundlePackageType</key><string>APPL</string>
  <key>LSUIElement</key><true/>
</dict>
</plist>
PLIST
  printf '%s' "$SCRIPT" > "$APP/Contents/MacOS/run"
  chmod +x "$APP/Contents/MacOS/run"
  echo "✅ $APP"
}

# ── 起動アプリ ──────────────────────────────────────────────
START_SCRIPT='#!/bin/bash
# Finderから起動されるとPATHが最小構成なので明示的に通す
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
PROJECT="'"$PROJECT"'"
LOG="$HOME/Library/Logs/3dprint-editor.log"
notify() { osascript -e "display notification \"$1\" with title \"3Dプリントラボ 記事編集\"" >/dev/null 2>&1 || true; }

cd "$PROJECT" || { notify "プロジェクトが見つかりません"; exit 1; }

# 既に起動済みならブラウザを開くだけ
if curl -s -o /dev/null --max-time 2 http://localhost:3000; then
  open "http://localhost:3000/keystatic"
  exit 0
fi

# mainブランチなら最新を取得（他ブランチ作業中は触らない）
if [ "$(git rev-parse --abbrev-ref HEAD)" = "main" ]; then
  notify "最新の記事を取得中…"
  git pull --ff-only origin main >>"$LOG" 2>&1 || notify "git pullに失敗（そのまま起動します）"
fi

# 依存パッケージ（lockfileが変わったときだけnpm install）
HASH_FILE="$HOME/Library/Logs/.3dprint-pkglock.hash"
NEW_HASH=$(/sbin/md5 -q package-lock.json)
if [ "$(cat "$HASH_FILE" 2>/dev/null || true)" != "$NEW_HASH" ]; then
  notify "依存パッケージを更新中…（初回は数分かかります）"
  npm install >>"$LOG" 2>&1 && echo "$NEW_HASH" > "$HASH_FILE"
fi

notify "エディタを起動中…"
nohup npm run dev >>"$LOG" 2>&1 &

# ── メモリ番犬 ──────────────────────────────────────────
# next dev系のnode合計RSSが3GBを超えたら即killして通知する。
# （過去にファイル監視の暴走でメモリを食い尽くした事故への保険）
nohup bash -c '"'"'
LIMIT_MB=3072
while true; do
  sleep 10
  PIDS=$(pgrep -f "next dev|\.next/dev")
  [ -z "$PIDS" ] && exit 0   # サーバー停止済みなら番犬も終了
  TOTAL=$(ps -o rss= -p $(echo $PIDS | tr " " ",") 2>/dev/null | awk "{s+=\$1} END {print int(s/1024)}")
  if [ "${TOTAL:-0}" -gt "$LIMIT_MB" ]; then
    pkill -f "next dev"; pkill -f "\.next/dev"
    osascript -e "display notification \"メモリ使用が${TOTAL}MBに達したため自動停止しました\" with title \"3Dプリントラボ 記事編集\"" >/dev/null 2>&1
    exit 1
  fi
done
'"'"' >>"$LOG" 2>&1 &

# 起動待ち（最大90秒）
for i in $(seq 1 90); do
  curl -s -o /dev/null --max-time 2 http://localhost:3000 && break
  sleep 1
done

if curl -s -o /dev/null --max-time 2 http://localhost:3000; then
  open "http://localhost:3000/keystatic"
  notify "準備完了！ブラウザで編集できます"
else
  notify "起動に失敗しました。ログ: ~/Library/Logs/3dprint-editor.log"
fi
'

# ── 停止アプリ ──────────────────────────────────────────────
STOP_SCRIPT='#!/bin/bash
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
notify() { osascript -e "display notification \"$1\" with title \"3Dプリントラボ 記事編集\"" >/dev/null 2>&1 || true; }
pkill -f "next dev" 2>/dev/null
pkill -f "\.next/dev" 2>/dev/null
sleep 1
if lsof -i :3000 -sTCP:LISTEN >/dev/null 2>&1; then
  notify "停止に失敗しました（プロセスが残っています）"
else
  notify "エディタを停止しました"
fi
'

make_app "3Dプリントラボ 記事編集" "$START_SCRIPT"
make_app "3Dプリントラボ 編集終了" "$STOP_SCRIPT"

echo ""
echo "インストール完了。Finderの「移動 > アプリケーション」（ユーザー側 ~/Applications）から"
echo "「3Dプリントラボ 記事編集」をダブルクリックで起動できます。"
echo "Dockに常駐させたい場合はアプリをDockへドラッグしてください。"
