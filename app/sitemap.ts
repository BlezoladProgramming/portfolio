import type {MetadataRoute} from "next";
import {projects} from "@/content/projects";
import {profile} from "@/content/profile";
export default function sitemap():MetadataRoute.Sitemap {
  const paths = ["/","/about","/resume","/work","/services","/contact","/privacy", ...projects.map(p=>`/work/${p.slug}`)];
  return paths.map(path=>({url: `${profile.siteUrl}${path}`,changeFrequency:"monthly" as const,priority:path==="/"?1:.6}));
}
