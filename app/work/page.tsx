import type {Metadata} from "next";
import Link from "next/link";
import {projects} from "@/content/projects";
import {pageMetadata} from "@/lib/seo";
export const metadata:Metadata=pageMetadata("Projects","Websites and software applications developed by BLEZOLAD, including Cinevex, a B2B marketplace and OIMS.","/work");
export default function WorkPage(){return <>
  <header className="inner-hero archive-hero"><p className="eyebrow">01 / SELECTED SOFTWARE PROJECTS</p><div className="inner-heading-line"><h1>Projects I&apos;ve<br/><em>worked on.</em></h1><span className="hero-stamp">{String(projects.length).padStart(2,"0")} PROJECTS / IN VIEW</span></div><p>Explore screenshots, the technologies used and what each project does. Each project is labelled as completed, in development, paused or a learning exercise.</p></header>
  <section className="archive-section section-pad"><div className="archive-columns"><span>PROJECT / SOFTWARE</span><span>FOCUS</span><span>STATUS</span><span>OPEN</span></div>
    {projects.map((p,i)=><Link href={`/work/${p.slug}`} className="archive-row" key={p.slug} data-reveal><span className="archive-title"><small>{String(i+1).padStart(2,"0")} /</small><strong>{p.name}</strong><small>{p.label}</small></span><span className="archive-kind">{p.kind}</span><span className="archive-status"><i/>{p.status}</span><span className="archive-arrow" aria-hidden="true">↗</span></Link>)}
    <div className="archive-after"><p>CINEVEX, MINI-B2B, OIMS AND BLEZOLAD PORTFOLIO INCLUDE OWNER-SUPPLIED SCREENSHOTS. SOME CAPTURES SHOW AN EARLIER INTERFACE STATE.</p><Link href="/contact">Have a project in mind? ↗</Link></div>
  </section>
</>}
