import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "3Dプリンター初心者ガイド完全版【2026年】購入から初めての印刷まで",
  description:
    "3Dプリンターを初めて使う方向けに、機種選び・セットアップ・スライサーの使い方・最初の印刷まで丁寧に解説します。",
};

const toc = [
  { id: "overview", label: "全体の流れ（5ステップ）" },
  { id: "step1", label: "ステップ1：機種を選んで購入する" },
  { id: "step2", label: "ステップ2：組み立て・セットアップ" },
  { id: "step3", label: "ステップ3：スライサーをインストール" },
  { id: "step4", label: "ステップ4：3Dデータを用意する" },
  { id: "step5", label: "ステップ5：スライスして印刷する" },
  { id: "mistakes", label: "初心者がよくやる失敗と対策" },
  { id: "summary", label: "まとめ" },
];

const related = [
  { href: "/printers/recommend", title: "家庭用3Dプリンターおすすめ7選", badge: "ランキング" },
  { href: "/filaments/recommend", title: "PLAフィラメントおすすめ8選", badge: "PLA", badgeColor: "#06b6d4" },
  { href: "/howto/trouble", title: "3Dプリンタートラブル解決ガイド", badge: "トラブル", badgeColor: "#ef4444" },
];

const S = {
  card: { backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" } as React.CSSProperties,
  h2: { fontSize: "1.2rem", fontWeight: "700", color: "#f1f5f9", borderLeft: "4px solid #06b6d4", paddingLeft: "0.75rem", marginBottom: "1.25rem" } as React.CSSProperties,
  p: { color: "#cbd5e1", lineHeight: "1.85", marginBottom: "0.875rem" } as React.CSSProperties,
  cyan: { color: "#06b6d4", fontWeight: "700" } as React.CSSProperties,
  muted: { color: "#94a3b8", fontSize: "0.875rem", lineHeight: "1.7" } as React.CSSProperties,
  section: { marginBottom: "2.5rem" } as React.CSSProperties,
  li: { color: "#cbd5e1", fontSize: "0.875rem", lineHeight: "1.8" } as React.CSSProperties,
  disclaimer: { color: "#475569", fontSize: "0.75rem", borderTop: "1px solid #1e293b", paddingTop: "1.25rem", lineHeight: "1.6" } as React.CSSProperties,
};

export default function HowtoBeginners() {
  return (
    <ArticleLayout
      breadcrumb={[
        { label: "ホーム", href: "/" },
        { label: "使い方", href: "/howto" },
        { label: "初心者ガイド" },
      ]}
      title="3Dプリンター初心者ガイド完全版【2026年】購入から初めての印刷まで"
      updatedAt="2026年4月"
      tags={["初心者", "入門", "セットアップ", "スライサー"]}
      toc={toc}
      related={related}
    >
      {/* Intro */}
      <div style={S.card}>
        <p style={S.p}>
          「3Dプリンターを買ってみたいけど難しそう…」と思っていませんか？
          実は<strong style={{ color: "#f1f5f9" }}>最新の機種は設定がほぼ自動化</strong>されており、
          初心者でも1時間以内に最初の印刷ができます。
        </p>
        <p style={{ ...S.p, marginBottom: 0 }}>
          このガイドでは購入から印刷完了まで、つまずかずに進める手順を解説します。
        </p>
      </div>

      {/* Overview */}
      <section id="overview" style={S.section}>
        <h2 style={S.h2}>全体の流れ（5ステップ）</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {[
            "機種を選んで購入する",
            "本体を組み立て・セットアップする",
            "スライサーソフトをインストールする",
            "3Dデータ（STLファイル）を用意する",
            "スライスして印刷する",
          ].map((step, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "0.625rem",
                padding: "0.875rem 1.25rem",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "#06b6d4",
                  color: "#0f172a",
                  fontSize: "0.8rem",
                  fontWeight: "800",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {i + 1}
              </span>
              <span style={{ color: "#f1f5f9", fontWeight: "600", fontSize: "0.9rem" }}>{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Step 1 */}
      <section id="step1" style={S.section}>
        <h2 style={S.h2}>ステップ1：機種を選んで購入する</h2>
        <div style={S.card}>
          <p style={S.p}>
            初心者には<strong style={{ color: "#f1f5f9" }}>自動キャリブレーション搭載機種</strong>を強くおすすめします。
            手動でベッドを水平にする作業（レベリング）は初心者が最も躓くポイントですが、
            自動化されていればこの問題がなくなります。
          </p>
          <p style={{ ...S.p, marginBottom: "0.75rem" }}>予算別のおすすめ：</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { budget: "〜3万円", rec: "Creality Ender-3 V3 SE（入門機定番）" },
              { budget: "4〜6万円", rec: "Bambu Lab A1 Mini（初心者に最もおすすめ）" },
              { budget: "6〜8万円", rec: "Bambu Lab A1（大きなものも作りたい方向け）" },
            ].map((item) => (
              <li key={item.budget} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span
                  style={{
                    flexShrink: 0,
                    backgroundColor: "rgba(6,182,212,0.12)",
                    color: "#06b6d4",
                    border: "1px solid rgba(6,182,212,0.25)",
                    borderRadius: "9999px",
                    padding: "0.1rem 0.625rem",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.budget}
                </span>
                <span style={S.muted}>{item.rec}</span>
              </li>
            ))}
          </ul>
        </div>
        <p style={{ ...S.muted, marginTop: "-0.5rem" }}>
          詳しくは「
          <a href="/printers/recommend" style={{ color: "#06b6d4", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            家庭用3Dプリンターおすすめ7選
          </a>
          」をご覧ください。
        </p>
      </section>

      {/* Step 2 */}
      <section id="step2" style={S.section}>
        <h2 style={S.h2}>ステップ2：本体を組み立て・セットアップする</h2>
        <div style={S.card}>
          <p style={S.p}>
            Bambu Lab A1 Miniのような機種は<strong style={{ color: "#f1f5f9" }}>ほぼ組み立て済み</strong>で届きます。
            箱から出してケーブルを数本つなぐだけでOKです。
          </p>
          <p style={{ ...S.p, marginBottom: "0.75rem" }}>セットアップ時に確認するポイント：</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {[
              "ベッドのレベリング（自動の場合はタッチパネルから実行）",
              "フィラメントのロード（本体の指示に従って挿入）",
              "Wi-Fi接続（Bambu Labはスマホアプリと連携可能）",
            ].map((item, i) => (
              <li key={i} style={{ ...S.muted, display: "flex", gap: "0.5rem" }}>
                <span style={{ color: "#06b6d4" }}>›</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Step 3 */}
      <section id="step3" style={S.section}>
        <h2 style={S.h2}>ステップ3：スライサーソフトをインストールする</h2>
        <div style={S.card}>
          <p style={S.p}>
            スライサーとは<strong style={{ color: "#f1f5f9" }}>3Dデータを印刷用データに変換するソフト</strong>です。
            機種によって推奨ソフトが異なります。
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { label: "Bambu Lab", val: "Bambu Studio（無料・直感的で初心者向け）" },
              { label: "Creality", val: "Creality Print または Cura（無料）" },
              { label: "どの機種でも", val: "Ultimaker Cura（無料・最も普及）" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "#06b6d4", fontWeight: "700", fontSize: "0.8rem", flexShrink: 0, paddingTop: "0.1rem" }}>{item.label}：</span>
                <span style={S.muted}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section id="step4" style={S.section}>
        <h2 style={S.h2}>ステップ4：3Dデータ（STLファイル）を用意する</h2>
        <div style={S.card}>
          <p style={S.p}>
            最初は自分でデータを作る必要はありません。
            <strong style={{ color: "#f1f5f9" }}>無料でダウンロードできるサイト</strong>を使いましょう。
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { label: "Thingiverse", val: "世界最大の無料STLデータベース（thingiverse.com）" },
              { label: "Printables", val: "Prusaが運営、品質が高め（printables.com）" },
              { label: "Makerworld", val: "Bambu Labが運営、A1 Mini向けデータが多い（makerworld.com）" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "#06b6d4", fontWeight: "700", fontSize: "0.8rem", flexShrink: 0, paddingTop: "0.1rem" }}>{item.label}：</span>
                <span style={S.muted}>{item.val}</span>
              </div>
            ))}
          </div>
          <p style={{ ...S.muted, marginTop: "0.875rem", marginBottom: 0 }}>
            まずは小さくてシンプルな「テストキューブ」や「スマホスタンド」などから始めるのがおすすめです。
          </p>
        </div>
      </section>

      {/* Step 5 */}
      <section id="step5" style={S.section}>
        <h2 style={S.h2}>ステップ5：スライスして印刷する</h2>
        <div style={S.card}>
          <p style={{ ...S.p, marginBottom: "0.875rem" }}>STLファイルをスライサーに読み込んで印刷する手順：</p>
          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "スライサーにSTLファイルをドラッグ＆ドロップ",
              "フィラメントの種類（PLA）と印刷品質を選択",
              "「スライス」ボタンをクリック",
              "SDカード・USB・Wi-Fiでプリンターに転送",
              "プリンターで印刷開始",
            ].map((step, i) => (
              <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span
                  style={{
                    flexShrink: 0,
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    backgroundColor: "#334155",
                    color: "#94a3b8",
                    fontSize: "0.7rem",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {i + 1}
                </span>
                <span style={S.muted}>{step}</span>
              </li>
            ))}
          </ol>
          <p style={{ ...S.muted, marginTop: "1rem", marginBottom: 0 }}>
            最初の印刷はPLAフィラメントで<strong style={{ color: "#f1f5f9" }}>品質「標準（0.2mm）」</strong>を選ぶのがおすすめです。
          </p>
        </div>
      </section>

      {/* Common mistakes */}
      <section id="mistakes" style={S.section}>
        <h2 style={S.h2}>初心者がよくやる失敗と対策</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { fail: "印刷物がベッドに貼り付かない", fix: "ベッドを再レベリング / ノズル温度を5℃上げる / ベッド面を清掃する" },
            { fail: "フィラメントが詰まる（目詰まり）", fix: "ノズル温度を上げてゆっくり引き抜く / ノズルを交換する" },
            { fail: "印刷物が反る（ワーピング）", fix: "ヒートベッドを使う / ブリム（縁取り）を追加する" },
            { fail: "糸引き（ストリング）が出る", fix: "リトラクション設定を増やす / 印刷速度を下げる" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "0.75rem",
                padding: "1rem 1.25rem",
                borderLeft: "3px solid #ef4444",
              }}
            >
              <p style={{ color: "#f1f5f9", fontWeight: "700", fontSize: "0.875rem", marginBottom: "0.375rem" }}>
                ❌ {item.fail}
              </p>
              <p style={{ ...S.muted, margin: 0 }}>✅ {item.fix}</p>
            </div>
          ))}
        </div>
        <p style={{ ...S.muted, marginTop: "1rem" }}>
          詳しい対処法は「
          <a href="/howto/trouble" style={{ color: "#06b6d4", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            3Dプリンタートラブル解決ガイド
          </a>
          」をご覧ください。
        </p>
      </section>

      {/* Summary */}
      <section id="summary" style={S.section}>
        <h2 style={S.h2}>まとめ：まず1台買って動かしてみよう</h2>
        <div style={S.card}>
          <p style={S.p}>
            3Dプリンターは<strong style={{ color: "#f1f5f9" }}>使いながら覚えるのが最短ルート</strong>です。
            最初から完璧を目指す必要はありません。失敗しながら少しずつ設定を覚えていきましょう。
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            機種選びに迷っている方は「
            <a href="/printers/recommend" style={{ color: "#06b6d4", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              家庭用3Dプリンターおすすめ7選
            </a>
            」、フィラメント選びは「
            <a href="/filaments/recommend" style={{ color: "#06b6d4", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              PLAフィラメントおすすめ8選
            </a>
            」もご覧ください。
          </p>
        </div>
      </section>

      <p style={S.disclaimer}>
        当サイトはAmazonアソシエイト・楽天アフィリエイト・ValueCommerce・メルカリアンバサダーに参加しています。記事内のリンクから商品を購入すると、売上の一部が当サイトに還元される場合があります。価格は記事執筆時点のものです。
      </p>
    </ArticleLayout>
  );
}
