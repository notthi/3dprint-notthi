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
        if ((res.statusCode === 301 || res.statusCode === 302) && res.headers.location) {
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

async function main() {
  console.log('📥 Googleスプレッドシートから商品データを取得中...');
  const csv = await fetchURL(CSV_URL);
  const lines = csv.trim().split('\n');
  const headers = parseCSVLine(lines[0]).map(h => h.trim().replace(/^"|"$/g, ''));

  const products = {};
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const values = parseCSVLine(lines[i]);
    const product = {};
    headers.forEach((h, j) => {
      product[h] = (values[j] || '').trim().replace(/^"|"$/g, '');
    });
    if (product.id) products[product.id] = product;
  }

  const output = `// このファイルはスクリプトで自動生成されます（npm run build 時）
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

export const products: Record<string, Product> = ${JSON.stringify(products, null, 2)};
`;

  fs.writeFileSync('src/data/products.ts', output, 'utf-8');
  console.log('✅ products.ts を更新しました（' + Object.keys(products).length + '商品）');
}

main().catch(err => {
  console.error('❌ エラー:', err.message);
  process.exit(1);
});
