import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { meta } from "../../../../content/articles/howto-bambu-studio.meta";

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
