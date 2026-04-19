import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "3Dプリンター初心者ガイド完全版【2026年】購入から初めての印刷まで",
  description:
    "3Dプリンターを初めて使う方向けに、機種選び・セットアップ・スライサーの使い方・最初の印刷まで丁寧に解説します。",
};

export default function HowtoBeginners() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
        <a href="/" className="hover:text-orange-500">ホーム</a>
        <span>/</span>
        <a href="/howto" className="hover:text-orange-500">使い方</a>
        <span>/</span>
        <span className="text-gray-600">初心者ガイド</span>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-3">
        3Dプリンター初心者ガイド完全版【2026年】<br className="hidden md:block" />
        購入から初めての印刷まで
      </h1>
      <p className="text-xs text-gray-400 mb-8">更新日: 2026年4月</p>

      <div className="prose mb-10">
        <p>
          「3Dプリンターを買ってみたいけど難しそう…」と思っていませんか？
          実は<strong>最新の機種は設定がほぼ自動化</strong>されており、初心者でも1時間以内に最初の印刷ができます。
          このガイドでは購入から印刷完了まで、つまずかずに進める手順を解説します。
        </p>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-10">
        <h2 className="font-bold text-gray-900 mb-3 text-base">全体の流れ（5ステップ）</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-none">
          {[
            "機種を選んで購入する",
            "本体を組み立て・セットアップする",
            "スライサーソフトをインストールする",
            "3Dデータ（STLファイル）を用意する",
            "スライスして印刷する",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="prose mb-10">
        <h2>ステップ1：機種を選んで購入する</h2>
        <p>
          初心者には<strong>自動キャリブレーション搭載機種</strong>を強くおすすめします。
          手動でベッドを水平にする作業（レベリング）は初心者が最も躓くポイントですが、
          自動化されていればこの問題がなくなります。
        </p>
        <p>予算別のおすすめはこちら：</p>
        <ul>
          <li><strong>〜3万円</strong>：Creality Ender-3 V3 SE（入門機定番）</li>
          <li><strong>4〜6万円</strong>：Bambu Lab A1 Mini（初心者に最もおすすめ）</li>
          <li><strong>6〜8万円</strong>：Bambu Lab A1（大きなものも作りたい方向け）</li>
        </ul>
      </div>

      <ProductCard
        name="Bambu Lab A1 Mini（初心者最強）"
        price="約45,000円"
        keyword="Bambu Lab A1 Mini 3Dプリンター"
      />

      <div className="prose mb-10">
        <h2>ステップ2：本体を組み立て・セットアップする</h2>
        <p>
          Bambu Lab A1 Miniのような機種は<strong>ほぼ組み立て済み</strong>で届きます。
          箱から出してケーブルを数本つなぐだけでOKです。
          Creality Ender-3シリーズは部品を組み立てる必要がありますが、
          説明書通りに進めれば1〜2時間で完成します。
        </p>
        <p>セットアップ時に確認するポイント：</p>
        <ul>
          <li>ベッドのレベリング（自動の場合はタッチパネルから実行）</li>
          <li>フィラメントのロード（本体の指示に従って挿入）</li>
          <li>Wi-Fi接続（Bambu Labはスマホアプリと連携可能）</li>
        </ul>
      </div>

      <div className="prose mb-10">
        <h2>ステップ3：スライサーソフトをインストールする</h2>
        <p>
          スライサーとは<strong>3Dデータを印刷用のデータに変換するソフト</strong>です。
          機種によって推奨ソフトが異なります。
        </p>
        <ul>
          <li><strong>Bambu Lab</strong>：Bambu Studio（無料・直感的で初心者向け）</li>
          <li><strong>Creality</strong>：Creality Print または Cura（無料）</li>
          <li><strong>どの機種でも使える</strong>：Ultimaker Cura（無料・最も普及）</li>
        </ul>
        <p>
          まずは<strong>Bambu Studio または Cura</strong>をダウンロードしてください。
          いずれも無料です。
        </p>
      </div>

      <div className="prose mb-10">
        <h2>ステップ4：3Dデータ（STLファイル）を用意する</h2>
        <p>
          最初は自分でデータを作る必要はありません。
          <strong>無料でダウンロードできるサイト</strong>を使いましょう。
        </p>
        <ul>
          <li><strong>Thingiverse</strong>（thingiverse.com）：世界最大の無料STLデータベース</li>
          <li><strong>Printables</strong>（printables.com）：Prusaが運営、品質が高め</li>
          <li><strong>Makerworld</strong>（makerworld.com）：Bambu Labが運営、A1 Mini向けデータが多い</li>
        </ul>
        <p>まずは小さくてシンプルな「テストキューブ」や「スマホスタンド」などから始めるのがおすすめです。</p>
      </div>

      <div className="prose mb-10">
        <h2>ステップ5：スライスして印刷する</h2>
        <p>STLファイルをスライサーに読み込んで印刷する手順です。</p>
        <ol>
          <li>スライサーにSTLファイルをドラッグ＆ドロップ</li>
          <li>フィラメントの種類（PLA）と印刷品質を選択</li>
          <li>「スライス」ボタンをクリック</li>
          <li>SDカード・USB・Wi-Fiでプリンターに転送</li>
          <li>プリンターで印刷開始</li>
        </ol>
        <p>
          最初の印刷はPLAフィラメントで<strong>品質「標準（0.2mm）」</strong>を選ぶのがおすすめです。
          速すぎず遅すぎず、失敗しにくい設定です。
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
        <h2 className="font-bold text-gray-900 mb-3 text-base">初心者がよくやる失敗と対策</h2>
        <div className="space-y-3 text-sm">
          {[
            { fail: "印刷物がベッドに貼り付かない", fix: "ベッドを再レベリング / ノズル温度を5℃上げる / ベッド面を清掃する" },
            { fail: "フィラメントが詰まる（目詰まり）", fix: "ノズル温度を上げてゆっくり引き抜く / ノズルを交換する" },
            { fail: "印刷物が反る（ワーピング）", fix: "ヒートベッドを使う / ブリム（縁取り）を追加する" },
            { fail: "糸引き（ストリング）が出る", fix: "リトラクション設定を増やす / 印刷速度を下げる" },
          ].map((item, i) => (
            <div key={i} className="border-l-2 border-orange-300 pl-3">
              <p className="font-bold text-gray-800">❌ {item.fail}</p>
              <p className="text-gray-600 mt-0.5">✅ {item.fix}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose mb-10">
        <h2>まとめ：まず1台買って動かしてみよう</h2>
        <p>
          3Dプリンターは<strong>使いながら覚えるのが最短ルート</strong>です。
          最初から完璧を目指す必要はありません。失敗しながら少しずつ設定を覚えていきましょう。
        </p>
        <p>
          機種選びに迷っている方は「<a href="/printers/recommend" className="text-orange-500 hover:underline">家庭用3Dプリンターおすすめ7選</a>」、
          フィラメント選びは「<a href="/filaments/recommend" className="text-orange-500 hover:underline">PLAフィラメントおすすめ8選</a>」もご覧ください。
        </p>
      </div>

      <p className="text-xs text-gray-400 border-t border-gray-100 pt-6">
        当サイトはAmazonアソシエイト・プログラムに参加しています。記事内のリンクから商品を購入すると、売上の一部が当サイトに還元される場合があります。
      </p>
    </div>
  );
}
