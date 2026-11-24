import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/ProjectGallery";
import { projectBySlug, projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projectBySlug(slug);
  return p ? pageMetadata(p.name, p.summary, `/work/${slug}`) : {};
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) notFound();
  const idx = projects.findIndex(q => q.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  return <article className="case-page">
    <header className="case-hero">
      <div className="case-topline"><Link href="/work">← ALL PROJECTS</Link><span>SOFTWARE PROJECT / {String(idx + 1).padStart(2, "0")}</span></div>
      <span className="eyebrow">{p.kind}</span><div className="case-title-row"><h1>{p.name}<span className="case-period">.</span></h1><span className="status-chip">{p.status}</span></div>
      <p className="case-standfirst">{p.summary}</p>
      <div className="case-metadata"><div><small>ROLE</small><span>{p.role}</span></div><div><small>STACK</small><span>{p.stack.join(" / ")}</span></div><div><small>STATUS</small><span>{p.status}</span></div></div>
    </header>
    {p.image ? <div className="case-screenshot-hero" aria-label={`${p.name} authentic product screenshot`}>
      <Image src={p.image} alt={p.gallery?.[0]?.alt ?? `${p.name} interface screenshot`} fill priority sizes="100vw" />
      <div className="case-screenshot-label"><span>01 / REAL PRODUCT CAPTURE</span><span>USER-SUPPLIED SCREENSHOT · NOV 2026</span></div>
    </div> : <div className="case-artwork" aria-label="Abstract editorial graphic, not a product screenshot">
      <span className="case-art-orbit" aria-hidden="true"/><span className="case-art-name" aria-hidden="true">{p.name}</span><small>EDITORIAL GRAPHIC / SCREENSHOTS PENDING</small><span className="case-art-corner">↗</span>
    </div>}
    {p.gallery && p.gallery.length > 0 && <ProjectGallery projectName={p.name} images={p.gallery} />}
    <div className="case-story"><aside className="case-aside"><span className="eyebrow">ABOUT THIS PROJECT</span><p>The project scope, real evidence, and any work or limitations remaining.</p><Link href="/work">← Back to projects</Link></aside><div className="case-sections">
      <section data-reveal><small className="case-chapter">01 / THE PROBLEM</small><h2>What needed<br/><em>to make sense.</em></h2><p>{p.challenge}</p></section>
      <section data-reveal><small className="case-chapter">02 / HOW IT WAS DEVELOPED</small><h2>How I<br/><em>approached it.</em></h2><ol>{p.approach.map((t, i) => <li key={t}><span>{String(i + 1).padStart(2, "0")}</span>{t}</li>)}</ol></section>
      <section data-reveal><small className="case-chapter">03 / PROJECT FEATURES & EVIDENCE</small><h2>What can be<br/><em>said today.</em></h2><ul>{p.delivered.map(t => <li key={t}>{t}</li>)}</ul></section>
      <section data-reveal><small className="case-chapter">04 / CURRENT STATUS & LIMITATIONS</small><h2>{p.status === "Completed" ? <>Scope &amp;<br/><em>limitations.</em></> : <>Still to<br/><em>work through.</em></>}</h2><ul>{p.limitations.map(t => <li key={t}>{t}</li>)}</ul>{p.credit && <p className="case-credit">Attribution: {p.credit}</p>}</section>
      {p.proof.length > 0 && <section data-reveal><small className="case-chapter">05 / SOURCES</small><h2>Go deeper.</h2><div className="case-links">{p.proof.map(x => <a key={x.href} href={x.href} target="_blank" rel="noopener noreferrer">{x.label} ↗</a>)}</div></section>}
    </div></div>
    <Link href={`/work/${next.slug}`} className="next-case"><small>NEXT PROJECT / {String((idx + 1) % projects.length + 1).padStart(2, "0")}</small><span>{next.name}</span><span aria-hidden="true">↗</span></Link>
  </article>;
}
