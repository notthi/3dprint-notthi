// 商品マスタは src/data/products.ts（正本は src/data/products.json）に一本化した。
// 既存のimport先を変えないための入口。
export { getProduct, products, type Product } from "@/data/products";
