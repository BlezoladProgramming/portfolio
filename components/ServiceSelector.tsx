"use client";
import {useState} from "react";
import Link from "next/link";
import {services} from "@/content/services";
export default function ServiceSelector({compact=false}:{compact?:boolean}){
  const [index,setIndex] = useState(0);
  const selected = services[index];
  return <div className={`service-selector ${compact?"service-compact":""}`} data-reveal>
    <div className="service-options" role="group" aria-label="Choose a software development service">
      {services.map((service,i)=><button type="button" aria-pressed={index===i} className={`service-option ${index===i?"is-selected":""}`} key={service.slug} onClick={()=>setIndex(i)}><small>{service.number}</small><span>{service.title}</span><span aria-hidden="true">{index===i?"−":"+"}</span></button>)}
    </div>
    <section className="service-details" aria-live="polite" aria-atomic="true" key={selected.slug}>
      <p className="eyebrow ink">SELECTED SERVICE / {selected.number}</p>
      <h3>{selected.title}</h3><p className="service-summary">{selected.summary}</p>
      <div className="service-problem"><small>WHAT THIS SOLVES</small><p>{selected.problem}</p></div>
      <small className="deliverables-caption">TYPICAL DELIVERABLES</small><ul>{selected.deliverables.map(x=><li key={x}><span aria-hidden="true">↗</span>{x}</li>)}</ul>
      {!compact && <p className="service-limitation">{selected.note}</p>}
      <Link href={`/contact?service=${encodeURIComponent(selected.title)}`} className="service-request">Discuss this service <span aria-hidden="true">↗</span></Link>
    </section>
  </div>
}
