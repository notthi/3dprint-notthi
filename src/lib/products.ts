// スプレッドシート「3dprint.com_商品管理」と連動する商品マスタ
// 更新時はスプレッドシートと合わせて修正する

export type Product = {
  id: string;
  name: string;
  asin: string;
  price: string;
  description: string;
  keyword: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "bambu-a1-mini",
    name: "Bambu Lab A1 Mini",
    asin: "B0CRYJBKQQ",
    price: "約45,000円",
    description: "初心者に最もおすすめ。自動キャリブレーション・静音設計。",
    keyword: "Bambu Lab A1 Mini 3Dプリンター",
    image: "https://m.media-amazon.com/images/I/71X5s5izhsL._AC_SL1500_.jpg",
  },
  {
    id: "bambu-a1",
    name: "Bambu Lab A1",
    asin: "B0D17V4SKM",
    price: "約65,000円",
    description: "広いビルドサイズ（256mm角）。多色印刷対応。",
    keyword: "Bambu Lab A1 3Dプリンター",
    image: "https://m.media-amazon.com/images/I/71x5MOLyifL._AC_SL1500_.jpg",
  },
  {
    id: "bambu-p1s",
    name: "Bambu Lab P1S",
    asin: "B0CHDM8VVZ",
    price: "約120,000円",
    description: "密閉チャンバー搭載。ABS・ナイロンも安定印刷。",
    keyword: "Bambu Lab P1S 3Dプリンター",
    image: "https://m.media-amazon.com/images/I/61+hImHcRkL._AC_SL1500_.jpg",
  },
  {
    id: "ender3-v3-se",
    name: "Creality Ender-3 V3 SE",
    asin: "B0CBWHJSQ9",
    price: "約25,000円",
    description: "コスパ最強の入門機。自動レベリング搭載。",
    keyword: "Creality Ender-3 V3 SE 3Dプリンター",
    image: "https://m.media-amazon.com/images/I/71co4Ej+MBL._AC_SL1500_.jpg",
  },
  {
    id: "ankermake-m5c",
    name: "AnkerMake M5C",
    asin: "B0B79Z183D",
    price: "約50,000円",
    description: "スマホアプリで簡単操作。Ankerの安心サポート。",
    keyword: "AnkerMake M5C 3Dプリンター",
    image: "https://m.media-amazon.com/images/I/51ePz-DN3qL._AC_SL1500_.jpg",
  },
  {
    id: "creality-k1c",
    name: "Creality K1C",
    asin: "B0GF24DDLH",
    price: "約70,000円",
    description: "最大600mm/s高速印刷。カーボンファイバー対応。",
    keyword: "Creality K1C 3Dプリンター",
    image: "https://m.media-amazon.com/images/I/613EAN5iCTL._AC_SL1500_.jpg",
  },
  {
    id: "bambu-pla-basic",
    name: "Bambu Lab PLA Basic",
    asin: "B0CGR29R63",
    price: "約2,800円（1kg）",
    description: "Bambu Lab純正。AMS自動認識対応。品質安定。",
    keyword: "Bambu Lab PLA Basic フィラメント",
    image: "https://m.media-amazon.com/images/I/61s0sgWex3L._AC_SL1500_.jpg",
  },
  {
    id: "esun-pla-plus",
    name: "eSUN PLA+",
    asin: "B07RQKH35B",
    price: "約2,200円（1kg）",
    description: "コスパ最強の定番フィラメント。通常PLAより丈夫。",
    keyword: "eSUN PLA+ フィラメント 1.75mm",
    image: "https://m.media-amazon.com/images/I/61kT6QXpbFL._AC_SL1500_.jpg",
  },
  {
    id: "overture-pla",
    name: "OVERTURE PLA",
    asin: "B08QRW1GG5",
    price: "約1,900円（1kg）",
    description: "コスト重視の方に。詰まりにくく初心者向け。",
    keyword: "OVERTURE PLA フィラメント 1.75mm",
    image: "https://m.media-amazon.com/images/I/71VgjzatuoL._AC_SL1500_.jpg",
  },
  {
    id: "polymaker-polylite-pla",
    name: "Polymaker PolyLite PLA",
    asin: "B099K1TCFM",
    price: "約2,500円（1kg）",
    description: "高品質・安定した印刷品質。",
    keyword: "Polymaker PolyLite PLA フィラメント",
    image: "https://m.media-amazon.com/images/I/811aYmZXB-L._SL1500_.jpg",
  },
  {
    id: "sunlu-pla-plus",
    name: "SUNLU PLA+",
    asin: "B07RRNPLHL",
    price: "約1,800円（1kg）",
    description: "コスパ良好。色のバリエーションが豊富。",
    keyword: "SUNLU PLA+ フィラメント 1kg",
    image: "https://m.media-amazon.com/images/I/61EgDD2cE7L._AC_SL1500_.jpg",
  },
  {
    id: "creality-hyper-pla",
    name: "Creality Hyper PLA",
    asin: "B085CD9SHW",
    price: "約2,600円（1kg）",
    description: "高速プリンター向け。最大600mm/s対応。",
    keyword: "Creality Hyper PLA フィラメント",
    image: "https://m.media-amazon.com/images/I/71GG7l6wlZL._AC_SL1500_.jpg",
  },
  {
    id: "bambu-filament-dryer",
    name: "Bambu Lab フィラメント乾燥機",
    asin: "B0D6GVG6Y8",
    price: "約8,000円",
    description: "Bambu Lab純正。AMS/AMS Liteと並列接続して印刷中に乾燥しながら給送できる。",
    keyword: "Bambu Lab フィラメント乾燥機",
    image: "https://m.media-amazon.com/images/I/51pQnN0XEZL._AC_SL1500_.jpg",
  },
  {
    id: "sunlu-filadryer-s2",
    name: "SUNLU FilaDryer S2",
    asin: "B0B6H4HMBT",
    price: "約4,500円",
    description: "コスパ最強の定番乾燥機。温度・時間設定が細かくできる。湿度表示付き。",
    keyword: "SUNLU FilaDryer S2 フィラメント乾燥機",
    image: "https://m.media-amazon.com/images/I/61Tk5KXAZ6L._AC_SL1500_.jpg",
  },
  {
    id: "esun-ebox-lite",
    name: "eSUN eBOX Lite",
    asin: "B08FRXTNZ0",
    price: "約3,500円",
    description: "給送しながら乾燥できるスタンダードモデル。コンパクトで置き場所を選ばない。",
    keyword: "eSUN eBOX Lite フィラメント乾燥機",
    image: "https://m.media-amazon.com/images/I/61S5smxlpEL._AC_SL1500_.jpg",
  },
  {
    id: "printdry-pro",
    name: "PrintDry Pro",
    asin: "B09NQFJQ6Z",
    price: "約12,000円",
    description: "大容量2スプール対応。温度精度が高くPETG・ナイロン・TPUの乾燥に最適。",
    keyword: "PrintDry Pro フィラメント乾燥機",
    image: "https://m.media-amazon.com/images/I/61lCiCETxbL._AC_SL1500_.jpg",
  },
];

// IDで商品を取得するヘルパー
export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
