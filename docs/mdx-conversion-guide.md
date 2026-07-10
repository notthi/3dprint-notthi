# 記事本文のブロック形式変換ガイド（Phase 4）

旧形式（インラインstyle JSX）の記事本文を、素のMarkdown＋ブロックコンポーネントに変換する。
**目的：ビジュアルエディタ（Keystatic）で編集可能にする。テキスト内容は一字一句維持する。**

## 完成見本

- 変換済み: `content/articles/printers/price-guide.mdx`（これが正解の形）
- ブロック実装: `src/components/blocks/index.tsx`
- エディタ登録: `keystatic.config.tsx` の articleComponents

## 変換ルール

| 旧パターン | 新形式 |
|---|---|
| `export const S = {...};` | **削除** |
| `{/* コメント */}` | 削除 |
| `<section id="x" style={S.section}>` `</section>` | アンラップ（タグ除去） |
| `<h2 style={S.h2}>見出し</h2>` | `## 見出し` |
| `<h3>`、`<p style={S.h3}>小見出し</p>` | `### 小見出し` |
| `<p style={S.p}>文</p>` | 素の段落 |
| `<strong style={{...}}>強調</strong>` | `**強調**` |
| `<a href="/x" style={{...}}>t</a>` | `[t](/x)` |
| 冒頭の `<div style={S.card}>`（リード文） | `<Lead>` 〜 `</Lead>`（中は素の段落） |
| `S.tip` のボックス | `<Tip title="...">` 〜 `</Tip>`（title無ければ省略） |
| `S.warn` のボックス | `<Warn title="...">` 〜 `</Warn>` |
| メリデメ2カラム grid（緑✓/赤✗） | `<ProsCons pros={[...]} cons={[...]} />`（見出しがメリット/デメリット以外なら prosTitle/consTitle 指定） |
| label/値 の行リスト `.map()` | `<SpecList items={[{ label: "...", value: "..." }]} />` |
| `<table>`（thead/tbody、`.map()`含む） | GFMテーブル `\| a \| b \|` に展開 |
| 番号付き手順（丸数字バッジ＋タイトル＋説明） | `<Steps items={[{ title: "...", body: "..." }]} />` |
| Q&Aカードの `.map()` | `<FAQ items={[{ q: "...", a: "..." }]} />` |
| 価格行リスト（モデル名＋価格） | `<PriceList items={[{ label: "...", price: "..." }]} />` |
| ✓/✗のみのリスト | `<CheckList items={[...]} variant="check" />` |
| CTAボタン付きカード | `<CTA href="/x" label="ボタン文言">説明文</CTA>` |
| `<RankingItem ... />` `<ProductCard ... />` | **そのまま維持**（import文は削除） |
| `import ... from ...` | 全て削除（ブロックはグローバル登録済み） |

## 厳守事項

1. **frontmatter（`---`〜`---`）は変更しない**
2. **日本語テキストは一字一句変えない**（並び順も維持）
3. 上記パターンに当てはまらない特殊JSXは**無理に変換せずそのまま残す**（動作はする）
4. `## 見出し` の直後に `<section>` の id と違うアンカーが必要になるが、**旧idは捨ててよい**（toc はレンダリング時に見出しテキストから自動生成される）
5. 各ファイル変換後に必ず実行:
   `node scripts/check-text-parity.js <ファイルパス>` → 0.93以上であること
   0.93未満なら差分を確認し、テキスト欠落を修正する

## 変換後の検証（バッチ完了時）

```
npm run build   # エラーゼロであること
```
