const https = require('https');
const fs = require('fs');

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQI3UOwJ3bdYV0nXz9d3spK6AEDqK9x9w4WUJZq0fLF4HvzMxZPUGCA6ceO4aS-sn_cckCrYo4HsAkT/pub?gid=0&single=true&output=csv';

function fetchURL(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // HTTPリダイレクト
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
          return fetchURL(res.headers.location).then(resolve).catch(reject);
        }
        // HTMLリダイレクト（GoogleはHTML内にhrefを含めることがある）
        if (data.includes('<HTML>') || data.includes('<html>')) {
          const match = data.match(/HREF="([^"]+)"/i) || data.match(/href="([^"]+)"/i);
          if (match) {
            const redirectUrl = match[1].replace(/&amp;/g, '&');
            return fetchURL(redirectUrl).then(resolve).catch(reject);
          }
        }
        resolve(data);
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

function parseCSVLine(line) {
  const result = [];
  let cur = '';
  let inQuote = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') { inQuote = !inQuote; }
    else if (ch === ',' && !inQuote) { result.push(cur); cur = ''; }
    else { cur += ch; }
  }
  result.push(cur);
  return result;
}

// スプレッドシートにない商品の置き場所（手で追加した商品）。
// スプレッドシートに同じidがあれば、スプレッドシートの値で上書きする。
const BASE_FILE = 'src/data/products.base.json';

async function fetchSheetProducts() {
  const csv = await fetchURL(CSV_URL);
  const lines = csv.trim().split('\n');
  const headers = parseCSVLine(lines[0]).map(h => h.trim().replace(/^"|"$/g, ''));

  const products = {};
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const values = parseCSVLine(lines[i]);
    const product = {};
    headers.forEach((h, j) => {
      const v = (values[j] || '').trim().replace(/^"|"$/g, '');
      if (v) product[h] = v;
    });
    if (product.id) products[product.id] = product;
  }
  return products;
}

async function main() {
  const base = JSON.parse(fs.readFileSync(BASE_FILE, 'utf-8'));

  console.log('📥 Googleスプレッドシートから商品データを取得中...');
  let sheet = {};
  try {
    sheet = await fetchSheetProducts();
  } catch (err) {
    console.warn('⚠️ スプレッドシートを取得できませんでした。' + BASE_FILE + ' だけで作ります: ' + err.message);
  }

  if (Object.keys(sheet).length === 0) {
    console.warn('⚠️ スプレッドシートから商品が1件も取れませんでした。' + BASE_FILE + ' だけで作ります');
  }

  const products = { ...base };
  for (const [id, p] of Object.entries(sheet)) {
    products[id] = { ...(base[id] || {}), ...p };
  }

  const output = `// このファイルはスクリプトで自動生成されます（npm run build 時）
// 商品の追加・編集はGoogleスプレッドシート、スプレッドシートにない商品は src/data/products.base.json で行ってください

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

export const products: Record<string, Product> = ${JSON.stringify(products, null, 2)};
`;

  fs.writeFileSync('src/data/products.ts', output, 'utf-8');
  console.log('✅ products.ts を更新しました（' + Object.keys(products).length + '商品：スプレッドシート ' + Object.keys(sheet).length + '・base ' + Object.keys(base).length + '）');
}

main().catch(err => {
  console.error('❌ エラー:', err.message);
  process.exit(1);
});
