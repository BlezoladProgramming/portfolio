"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectScreenshot } from "@/content/projects";

export default function ProjectGallery({ projectName, images }: { projectName: string; images: ProjectScreenshot[] }) {
  const [selected, setSelected] = useState(0);
  if (!images.length) return null;
  const active = images[selected];
  const select = (index: number) => setSelected((index + images.length) % images.length);
  return <section className="project-gallery-section section-pad" aria-label={`${projectName} product screenshots`}>
    <div className="gallery-intro" data-reveal>
      <div><p className="eyebrow">REAL PRODUCT / OWNER-SUPPLIED CAPTURES</p><h2>Inside the <em>interface.</em></h2></div>
      <p>These are captures of the actual interface—not renders or mockups. They show visible page states, not independently verified performance or backend behaviour.</p>
    </div>
    <div className="gallery-workspace" data-reveal>
      <div className="gallery-bar"><span className="gallery-rec"><i aria-hidden="true"/> PRODUCT EVIDENCE</span><span aria-live="polite">{String(selected + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span></div>
      <figure className="gallery-current" key={active.src}>
        <div className="gallery-image-frame"><Image src={active.src} alt={active.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1180px) 85vw, 1100px" /></div>
        <figcaption><strong>{active.title}</strong><span>{active.caption}</span></figcaption>
      </figure>
      <div className="gallery-controls"><div className="gallery-paging" role="group" aria-label="Screenshot navigation">
        <button type="button" onClick={() => select(selected - 1)} aria-label="Previous screenshot">←</button>
        <button type="button" onClick={() => select(selected + 1)} aria-label="Next screenshot">→</button>
      </div><span>EXPLORE {images.length} SUPPLIED SCREENSHOTS <span aria-hidden="true">↘</span></span></div>
      <div className="gallery-filmstrip" role="group" aria-label={`Choose ${projectName} screenshot`}>
        {images.map((image, index) => <button key={image.src} className={selected === index ? "gallery-tile active" : "gallery-tile"} type="button" aria-pressed={selected === index} aria-label={`View screenshot ${index + 1}: ${image.title}`} onClick={() => select(index)}>
          <span className="gallery-tile-image"><Image src={image.src} alt="" fill sizes="150px" /></span>
          <span className="gallery-tile-label"><small>{String(index + 1).padStart(2, "0")}</small>{image.title}</span>
        </button>)}
      </div>
    </div>
  </section>;
}
