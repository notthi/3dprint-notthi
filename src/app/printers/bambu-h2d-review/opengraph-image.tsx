import { generateOgImage } from "@/lib/og-image";
import { meta } from "../../../../content/articles/printers-bambu-h2d-review.meta";

export const runtime = "nodejs";
export const alt = meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return generateOgImage(meta);
}
