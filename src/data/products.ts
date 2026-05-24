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
    "keyword": "Bambu Lab A1 Mini 3Dプリンター",
    "image": "https://m.media-amazon.com/images/I/71X5s5izhsL._AC_SL1500_.jpg"
  },
  "bambu-a1": {
    "id": "bambu-a1",
    "name": "Bambu Lab A1",
    "asin": "B0D17V4SKM",
    "price": "約65,000円",
    "description": "広いビルドサイズ（256mm角）。多色印刷対応。",
    "keyword": "Bambu Lab A1 3Dプリンター",
    "image": "https://m.media-amazon.com/images/I/71x5MOLyifL._AC_SL1500_.jpg"
  },
  "bambu-p1s": {
    "id": "bambu-p1s",
    "name": "Bambu Lab P1S",
    "asin": "B0CHDM8VVZ",
    "price": "約120,000円",
    "description": "密閉チャンバー搭載。ABS・ナイロンも安定印刷。",
    "keyword": "Bambu Lab P1S 3Dプリンター",
    "image": "https://m.media-amazon.com/images/I/61+hImHcRkL._AC_SL1500_.jpg"
  },
  "ender3-v3-se": {
    "id": "ender3-v3-se",
    "name": "Creality Ender-3 V3 SE",
    "asin": "B0CBWHJSQ9",
    "price": "約25,000円",
    "description": "コスパ最強の入門機。自動レベリング搭載。",
    "keyword": "Creality Ender-3 V3 SE 3Dプリンター",
    "image": "https://m.media-amazon.com/images/I/71co4Ej+MBL._AC_SL1500_.jpg"
  },
  "ankermake-m5c": {
    "id": "ankermake-m5c",
    "name": "AnkerMake M5C",
    "asin": "B0B79Z183D",
    "price": "約50,000円",
    "description": "スマホアプリで簡単操作。Ankerの安心サポート。",
    "keyword": "AnkerMake M5C 3Dプリンター",
    "image": "https://m.media-amazon.com/images/I/51ePz-DN3qL._AC_SL1500_.jpg"
  },
  "creality-k1c": {
    "id": "creality-k1c",
    "name": "Creality K1C",
    "asin": "B0GF24DDLH",
    "price": "約70,000円",
    "description": "最大600mm/s高速印刷。カーボンファイバー対応。",
    "keyword": "Creality K1C 3Dプリンター",
    "image": "https://m.media-amazon.com/images/I/613EAN5iCTL._AC_SL1500_.jpg"
  },
  "bambu-pla-basic": {
    "id": "bambu-pla-basic",
    "name": "Bambu Lab PLA Basic",
    "asin": "B0CGR29R63",
    "price": "約2,800円（1kg）",
    "description": "Bambu Lab純正。AMS自動認識対応。品質安定。",
    "keyword": "Bambu Lab PLA Basic フィラメント",
    "image": "https://m.media-amazon.com/images/I/61s0sgWex3L._AC_SL1500_.jpg"
  },
  "esun-pla-plus": {
    "id": "esun-pla-plus",
    "name": "eSUN PLA+",
    "asin": "B07RQKH35B",
    "price": "約2,200円（1kg）",
    "description": "コスパ最強の定番フィラメント。通常PLAより丈夫。",
    "keyword": "eSUN PLA+ フィラメント 1.75mm",
    "image": "https://m.media-amazon.com/images/I/61kT6QXpbFL._AC_SL1500_.jpg"
  },
  "overture-pla": {
    "id": "overture-pla",
    "name": "OVERTURE PLA",
    "asin": "B08QRW1GG5",
    "price": "約1,900円（1kg）",
    "description": "コスト重視の方に。詰まりにくく初心者向け。",
    "keyword": "OVERTURE PLA フィラメント 1.75mm",
    "image": "https://m.media-amazon.com/images/I/71VgjzatuoL._AC_SL1500_.jpg"
  },
  "polymaker-polylite-pla": {
    "id": "polymaker-polylite-pla",
    "name": "Polymaker PolyLite PLA",
    "asin": "B099K1TCFM",
    "price": "約2,500円（1kg）",
    "description": "高品質・安定した印刷品質。",
    "keyword": "Polymaker PolyLite PLA フィラメント",
    "image": "https://m.media-amazon.com/images/I/811aYmZXB-L._SL1500_.jpg"
  },
  "sunlu-pla-plus": {
    "id": "sunlu-pla-plus",
    "name": "SUNLU PLA+",
    "asin": "B07RRNPLHL",
    "price": "約1,800円（1kg）",
    "description": "コスパ良好。色のバリエーションが豊富。",
    "keyword": "SUNLU PLA+ フィラメント 1kg",
    "image": "https://m.media-amazon.com/images/I/61EgDD2cE7L._AC_SL1500_.jpg"
  },
  "creality-hyper-pla": {
    "id": "creality-hyper-pla",
    "name": "Creality Hyper PLA",
    "asin": "B085CD9SHW",
    "price": "約2,600円（1kg）",
    "description": "高速プリンター向け。最大600mm/s対応。",
    "keyword": "Creality Hyper PLA フィラメント",
    "image": "https://m.media-amazon.com/images/I/71GG7l6wlZL._AC_SL1500_.jpg"
  },
  "bambu-abs": {
    "id": "bambu-abs",
    "name": "Bambu Lab ABS フィラメント",
    "asin": "B0CGS1428S",
    "price": "約3,200円（1kg）",
    "description": "Bambu Lab純正ABS。P1S・X1Cとの組み合わせで最も安定。Bambu Studioにプリセット入りで設定不要。",
    "keyword": "Bambu Lab ABS フィラメント 1.75mm",
    "image": "https://m.media-amazon.com/images/I/61s0sgWex3L._AC_SL1500_.jpg"
  },
  "esun-abs-plus": {
    "id": "esun-abs-plus",
    "name": "eSUN ABS+",
    "asin": "B07RQKGPKV",
    "price": "約2,400円（1kg）",
    "description": "通常ABSより反りにくく改良された定番品。品質安定性が高くコスパ優秀。",
    "keyword": "eSUN ABS+ フィラメント 1.75mm",
    "image": "https://m.media-amazon.com/images/I/61kT6QXpbFL._AC_SL1500_.jpg"
  },
  "polymaker-polylite-abs": {
    "id": "polymaker-polylite-abs",
    "name": "Polymaker PolyLite ABS",
    "asin": "B099K2BBFM",
    "price": "約2,800円（1kg）",
    "description": "寸法精度が高く機械部品・精密パーツ向き。高品質路線のABS。",
    "keyword": "Polymaker PolyLite ABS フィラメント",
    "image": "https://m.media-amazon.com/images/I/811aYmZXB-L._SL1500_.jpg"
  },
  "sunlu-abs": {
    "id": "sunlu-abs",
    "name": "SUNLU ABS",
    "asin": "B07RRNPHLQ",
    "price": "約2,000円（1kg）",
    "description": "試作品・大量印刷向きのコスパ重視モデル。",
    "keyword": "SUNLU ABS フィラメント 1.75mm 1kg",
    "image": "https://m.media-amazon.com/images/I/61EgDD2cE7L._AC_SL1500_.jpg"
  },
  "creality-hyper-abs": {
    "id": "creality-hyper-abs",
    "name": "Creality Hyper ABS",
    "asin": "B0CW3BQXHJ",
    "price": "約2,600円（1kg）",
    "description": "高速印刷対応設計。Creality K1Cとの相性が良い。",
    "keyword": "Creality Hyper ABS フィラメント 高速",
    "image": "https://m.media-amazon.com/images/I/71GG7l6wlZL._AC_SL1500_.jpg"
  },
  "bambu-filament-dryer": {
    "id": "bambu-filament-dryer",
    "name": "Bambu Lab フィラメント乾燥機",
    "asin": "B0D6GVG6Y8",
    "price": "約8,000円",
    "description": "Bambu Lab純正。AMS/AMS Liteと並列接続して印刷中に乾燥しながら給送できる。",
    "keyword": "Bambu Lab フィラメント乾燥機",
    "image": "https://m.media-amazon.com/images/I/51pQnN0XEZL._AC_SL1500_.jpg"
  },
  "sunlu-filadryer-s2": {
    "id": "sunlu-filadryer-s2",
    "name": "SUNLU FilaDryer S2",
    "asin": "B0B6H4HMBT",
    "price": "約4,500円",
    "description": "コスパ最強の定番乾燥機。温度・時間設定が細かくできる。湿度表示付き。",
    "keyword": "SUNLU FilaDryer S2 フィラメント乾燥機",
    "image": "https://m.media-amazon.com/images/I/61Tk5KXAZ6L._AC_SL1500_.jpg"
  },
  "esun-ebox-lite": {
    "id": "esun-ebox-lite",
    "name": "eSUN eBOX Lite",
    "asin": "B08FRXTNZ0",
    "price": "約3,500円",
    "description": "給送しながら乾燥できるスタンダードモデル。コンパクトで置き場所を選ばない。",
    "keyword": "eSUN eBOX Lite フィラメント乾燥機",
    "image": "https://m.media-amazon.com/images/I/61S5smxlpEL._AC_SL1500_.jpg"
  },
  "printdry-pro": {
    "id": "printdry-pro",
    "name": "PrintDry Pro",
    "asin": "B09NQFJQ6Z",
    "price": "約12,000円",
    "description": "大容量2スプール対応。温度精度が高くPETG・ナイロン・TPUの乾燥に最適。",
    "keyword": "PrintDry Pro フィラメント乾燥機",
    "image": "https://m.media-amazon.com/images/I/61lCiCETxbL._AC_SL1500_.jpg"
  },
  "bambu-p1s-combo": {
    "id": "bambu-p1s-combo",
    "name": "Bambu Lab P1S Combo（AMS付き）",
    "asin": "B0CHDM8VVZ",
    "price": "約180,000円",
    "description": "P1S本体＋AMS（4色自動切替）セット。マルチカラー・マルチマテリアル印刷対応。",
    "keyword": "Bambu Lab P1S Combo AMS 3Dプリンター",
    "image": "https://m.media-amazon.com/images/I/61+hImHcRkL._AC_SL1500_.jpg"
  },
  "bambu-pla-silk": {
    "id": "bambu-pla-silk",
    "name": "Bambu Lab PLA Silk",
    "asin": "B0CGRJJ5YF",
    "price": "約3,200円（1kg）",
    "description": "金属光沢のような仕上がり。インテリア雑貨・アクセサリー・プレゼント用造形に最適。",
    "keyword": "Bambu Lab PLA Silk フィラメント シルク",
    "image": "https://m.media-amazon.com/images/I/61s0sgWex3L._AC_SL1500_.jpg"
  },
  "polymaker-polymax-pla": {
    "id": "polymaker-polymax-pla",
    "name": "Polymaker PolyMax PLA",
    "asin": "B01MSNL5BE",
    "price": "約3,500円（1kg）",
    "description": "通常PLAの約9倍の衝撃強度。機能パーツ・ドローン・工具など強度最優先の用途に。",
    "keyword": "Polymaker PolyMax PLA フィラメント 高強度",
    "image": "https://m.media-amazon.com/images/I/811aYmZXB-L._SL1500_.jpg"
  },
  "esun-petg": {
    "id": "esun-petg",
    "name": "eSUN PETG",
    "asin": "B07RRNP2KW",
    "price": "約2,800円（1kg）",
    "description": "PETGの定番ブランド。品質安定・糸引き少なめ。初めてのPETGに最もおすすめ。",
    "keyword": "eSUN PETG フィラメント 1.75mm",
    "image": "https://m.media-amazon.com/images/I/61kT6QXpbFL._AC_SL1500_.jpg"
  },
  "bambu-petg-hf": {
    "id": "bambu-petg-hf",
    "name": "Bambu Lab PETG HF",
    "asin": "B0CGRJJ4YJ",
    "price": "約3,200円（1kg）",
    "description": "Bambu Lab純正PETG。Bambu Studioにプリセット入りで設定不要。Bambu機種ユーザーに最適。",
    "keyword": "Bambu Lab PETG HF フィラメント",
    "image": "https://m.media-amazon.com/images/I/61s0sgWex3L._AC_SL1500_.jpg"
  },
  "polymaker-polylite-petg": {
    "id": "polymaker-polylite-petg",
    "name": "Polymaker PolyLite PETG",
    "asin": "B099K2BBFP",
    "price": "約3,000円（1kg）",
    "description": "寸法精度が高く機械パーツ向き。Polymakerの品質基準を満たした高精度PETG。",
    "keyword": "Polymaker PolyLite PETG フィラメント",
    "image": "https://m.media-amazon.com/images/I/811aYmZXB-L._SL1500_.jpg"
  },
  "sunlu-petg": {
    "id": "sunlu-petg",
    "name": "SUNLU PETG",
    "asin": "B07RRMPKLS",
    "price": "約2,200円（1kg）",
    "description": "コスパ重視。試作品・日用品・プロトタイプ向き。大量印刷に最適。",
    "keyword": "SUNLU PETG フィラメント 1.75mm",
    "image": "https://m.media-amazon.com/images/I/61EgDD2cE7L._AC_SL1500_.jpg"
  },
  "creality-hyper-petg": {
    "id": "creality-hyper-petg",
    "name": "Creality Hyper PETG",
    "asin": "B0CW3CQXHK",
    "price": "約2,600円（1kg）",
    "description": "高速印刷（300mm/s以上）対応PETG。Creality K1・Bambu Lab高速機種向け。",
    "keyword": "Creality Hyper PETG フィラメント 高速",
    "image": "https://m.media-amazon.com/images/I/71GG7l6wlZL._AC_SL1500_.jpg"
  },
  "bambu-tpu-95a": {
    "id": "bambu-tpu-95a",
    "name": "Bambu Lab TPU 95A",
    "asin": "B0CGRK4RFM",
    "price": "約3,500円（1kg）",
    "description": "Bambu Lab純正TPU。Shore A 95A。プリセット入りで設定不要。詰まりにくく品質安定。",
    "keyword": "Bambu Lab TPU 95A フィラメント 柔軟",
    "image": "https://m.media-amazon.com/images/I/61s0sgWex3L._AC_SL1500_.jpg"
  },
  "esun-etpu-95a": {
    "id": "esun-etpu-95a",
    "name": "eSUN eTPU-95A",
    "asin": "B07RRNP3QC",
    "price": "約2,800円（1kg）",
    "description": "定番ブランドのTPU。Shore A 95A。どのFDM機種とも相性が良く、初めてのTPUに最もおすすめ。",
    "keyword": "eSUN eTPU-95A フィラメント TPU 柔軟",
    "image": "https://m.media-amazon.com/images/I/61kT6QXpbFL._AC_SL1500_.jpg"
  },
  "polymaker-polyflex-tpu90": {
    "id": "polymaker-polyflex-tpu90",
    "name": "Polymaker PolyFlex TPU90",
    "asin": "B01MSWBSYM",
    "price": "約3,200円（1kg）",
    "description": "Shore A 90Aのやや柔らかめTPU。スマホケース・グリップ・防振素材向き。",
    "keyword": "Polymaker PolyFlex TPU90 フィラメント 柔軟",
    "image": "https://m.media-amazon.com/images/I/811aYmZXB-L._SL1500_.jpg"
  },
  "sunlu-tpu": {
    "id": "sunlu-tpu",
    "name": "SUNLU TPU",
    "asin": "B07RRNPLSR",
    "price": "約2,200円（1kg）",
    "description": "コスパ重視TPU。試作品・プロトタイプ向き。",
    "keyword": "SUNLU TPU フィラメント 柔軟 1.75mm",
    "image": "https://m.media-amazon.com/images/I/61EgDD2cE7L._AC_SL1500_.jpg"
  },
  "overture-tpu": {
    "id": "overture-tpu",
    "name": "OVERTURE TPU",
    "asin": "B08QRWH1HG",
    "price": "約2,500円（1kg）",
    "description": "入手しやすい入門向けTPU。初めてTPUを試す場合に手軽。",
    "keyword": "OVERTURE TPU フィラメント 柔軟",
    "image": "https://m.media-amazon.com/images/I/71VgjzatuoL._AC_SL1500_.jpg"
  }
};
