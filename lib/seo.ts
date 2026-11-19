import type { Metadata } from "next";
import { profile } from "@/content/profile";
export const baseUrl = new URL(profile.siteUrl);
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: {canonical: path},
    openGraph: {title: `${title} | BLEZOLAD`, description, url: path, images: [{url: "/og-cover.png", width: 1200, height: 630, alt: "BLEZOLAD — Full Stack Web Developer"}]},
    twitter: {card: "summary_large_image", title: `${title} | BLEZOLAD`, description, images: ["/og-cover.png"]},
  };
}
