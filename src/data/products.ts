// このファイルはスクリプトで自動生成されます（npm run build 時）
// 商品の追加・編集はGoogleスプレッドシートから行ってください

export type Product = {
  id?: string;
  name: string;
  asin?: string;
  price?: string;
  description?: string;
  keyword?: string;
  image?: string;
  links?: { amazon?: string; rakuten?: string; yahoo?: string; mercari?: string; };
};

export const products: Record<string, Product> = {
  "bambu-a1-mini": {
    "id": "bambu-a1-mini",
    "name": "Bambu Lab A1 Mini",
    "asin": "B0CRYJBKQQ",
    "price": "約45,000円",
    "description": "初心者に最もおすすめ。自動キャリブレーション・静音設計。",
    "keyword": "Bambu Lab A1 Mini 3Dプリンター"
  },
  "bambu-a1": {
    "id": "bambu-a1",
    "name": "Bambu Lab A1",
    "asin": "B0D17V4SKM",
    "price": "約65,000円",
    "description": "広いビルドサイズ（256mm角）。多色印刷対応。",
    "keyword": "Bambu Lab A1 3Dプリンター"
  },
  "bambu-p1s": {
    "id": "bambu-p1s",
    "name": "Bambu Lab P1S",
    "asin": "B0CHDM8VVZ",
    "price": "約120,000円",
    "description": "密閉チャンバー搭載。ABS・ナイロンも安定印刷。",
    "keyword": "Bambu Lab P1S 3Dプリンター"
  },
  "ender3-v3-se": {
    "id": "ender3-v3-se",
    "name": "Creality Ender-3 V3 SE",
    "asin": "B0CBWHJSQ9",
    "price": "約25,000円",
    "description": "コスパ最強の入門機。自動レベリング搭載。",
    "keyword": "Creality Ender-3 V3 SE 3Dプリンター"
  },
  "ankermake-m5c": {
    "id": "ankermake-m5c",
    "name": "AnkerMake M5C",
    "asin": "",
    "price": "約50,000円",
    "description": "スマホアプリで簡単操作。Ankerの安心サポート。",
    "keyword": "AnkerMake M5C 3Dプリンター"
  },
  "creality-k1c": {
    "id": "creality-k1c",
    "name": "Creality K1C",
    "asin": "",
    "price": "約70,000円",
    "description": "最大600mm/s高速印刷。カーボンファイバー対応。",
    "keyword": "Creality K1C 3Dプリンター"
  },
  "bambu-pla-basic": {
    "id": "bambu-pla-basic",
    "name": "Bambu Lab PLA Basic",
    "asin": "B0CGR29R63",
    "price": "約2,800円（1kg）",
    "description": "Bambu Lab純正。AMS自動認識対応。品質安定。",
    "keyword": "Bambu Lab PLA Basic フィラメント"
  },
  "esun-pla-plus": {
    "id": "esun-pla-plus",
    "name": "eSUN PLA+",
    "asin": "B07RQKH35B",
    "price": "約2,200円（1kg）",
    "description": "コスパ最強の定番フィラメント。通常PLAより丈夫。",
    "keyword": "eSUN PLA+ フィラメント 1.75mm"
  },
  "overture-pla": {
    "id": "overture-pla",
    "name": "OVERTURE PLA",
    "asin": "",
    "price": "約1,900円（1kg）",
    "description": "コスト重視の方に。詰まりにくく初心者向け。",
    "keyword": "OVERTURE PLA フィラメント 1.75mm"
  },
  "polymaker-polylite-pla": {
    "id": "polymaker-polylite-pla",
    "name": "Polymaker PolyLite PLA",
    "asin": "",
    "price": "約2,500円（1kg）",
    "description": "高品質・安定した印刷品質。",
    "keyword": "Polymaker PolyLite PLA フィラメント"
  },
  "sunlu-pla-plus": {
    "id": "sunlu-pla-plus",
    "name": "SUNLU PLA+",
    "asin": "",
    "price": "約1,800円（1kg）",
    "description": "コスパ良好。色のバリエーションが豊富。",
    "keyword": "SUNLU PLA+ フィラメント 1kg"
  },
  "creality-hyper-pla": {
    "id": "creality-hyper-pla",
    "name": "Creality Hyper PLA",
    "asin": "",
    "price": "約2,600円（1kg）",
    "description": "高速プリンター向け。最大600mm/s対応。",
    "keyword": "Creality Hyper PLA フィラメント"
  }
};
