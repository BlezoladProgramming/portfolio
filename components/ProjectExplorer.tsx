"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/content/projects";
const cases = projects.filter(p => p.featured || p.slug === "blezolad-portfolio");
const glyphs: Record<string, string> = { cinevex: "C/", "mini-b2b-marketplace": "M²", oims: "O+", "blezolad-portfolio": "B." };

export default function ProjectExplorer() {
  const [index, setIndex] = useState(0);
  const item = cases[index];
  return <div className="explorer" data-reveal>
    <div className="explorer-list" role="group" aria-label="Select a software project">
      {cases.map((p, i) => <button className={`explorer-select ${index === i ? "chosen" : ""}`} key={p.slug} aria-pressed={index === i} type="button" onClick={() => setIndex(i)}>
        <span className="explorer-number">{String(i + 1).padStart(2, "0")}</span><span className="explorer-name">{p.name}<small>{p.label}</small></span><span className="explorer-select-arrow" aria-hidden="true">{index === i ? "→" : "↗"}</span>
      </button>)}
      <Link href="/work" className="explorer-archive-link">VIEW ALL PROJECTS <span aria-hidden="true">↗</span></Link>
    </div>
    <div className="explorer-display" aria-live="polite" aria-atomic="true" key={item.slug}>
      <div className="display-head"><span>PROJECT / {String(index + 1).padStart(2, "0")}</span><span>FULL STACK DEVELOPMENT</span></div>
      {item.image ? <div className="display-preview">
        <Image src={item.image} alt={item.gallery?.[0]?.alt ?? `${item.name} website screenshot`} fill sizes="(max-width: 960px) 100vw, 50vw" />
        <span className="display-preview-label">ACTUAL SCREENSHOT / {item.name.toUpperCase()}</span>
      </div> : <div className={`display-graphic graphic-${item.slug}`} aria-label="Editorial illustration, not a screenshot">
        <span className="display-glyph">{glyphs[item.slug]}</span><span className="diagram-axis axis-x"/><span className="diagram-axis axis-y"/><span className="diagram-circle circle-one"/><span className="diagram-circle circle-two"/><span className="diagram-dot"/><span className="graphic-caption">EDITORIAL GRAPHIC / NOT A SCREENSHOT</span>
      </div>}
      <div className="display-meta"><span>{item.kind}</span><span className="status-chip">{item.status}</span></div>
      <div className="display-info"><h3>{item.name}</h3><p>{item.summary}</p></div>
      <div className="display-foot"><span>{item.stack.slice(0, 3).join(" / ")}</span><Link href={`/work/${item.slug}`}>View project <span aria-hidden="true">↗</span></Link></div>
    </div>
  </div>;
}
