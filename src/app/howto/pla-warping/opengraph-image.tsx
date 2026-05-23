import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { meta } from "../../../../content/articles/howto-pla-warping.meta";

export const alt = meta.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return generateOgImage({
    title: meta.title,
    badge: meta.badge,
    badgeColor: meta.badgeColor,
    category: meta.category,
  });
}
