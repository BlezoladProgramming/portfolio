"use client";
import {useState} from "react";

const demos = [
  {id:"website", num:"01", title:"Websites", eyebrow:"RESPONSIVE WEBSITE", heading:"A website people want to use.", summary:"Clear pages, fast navigation and a great experience across screens."},
  {id:"app", num:"02", title:"Web apps", eyebrow:"INTERACTIVE WEB APPLICATION", heading:"Beyond a static page.", summary:"Dashboards, user flows, forms and features connected to real data."},
  {id:"api", num:"03", title:"APIs", eyebrow:"BACKEND DEVELOPMENT", heading:"The logic behind the screen.", summary:"APIs, authentication and databases working together behind the UI."},
] as const;

export default function StudioScene(){
  const [selected,setSelected]=useState(0);
  const demo=demos[selected];
  return <div className="scene dev-scene" role="group" aria-label="Interactive examples of the software I develop">
    <div className="scene-topline"><span>WHAT I BUILD / INTERACTIVE PREVIEW</span><span>0{selected+1} / 03</span></div>
    <div className="scene-stage dev-scene-stage" key={demo.id}>
      <div className="dev-scene-orbit" aria-hidden="true"/>
      <div className="dev-preview-shell">
        <div className="dev-preview-titlebar"><span className="dev-traffic" aria-hidden="true"><i/><i/><i/></span><span>blezolad.dev / {demo.id}</span><span>↗</span></div>
        <div className="dev-preview-content" aria-hidden="true">
          {demo.id==="website" && <div className="demo-website"><div className="demo-site-header"><strong>b<span>.</span> demo</strong><span>HOME &nbsp; WORK &nbsp; CONTACT</span></div><p className="demo-caption">WEBSITE / EXAMPLE INTERFACE</p><strong className="demo-bigline">A better home<br/>for your idea<span>.</span></strong><div className="demo-pseudo-link">Explore the page ↗</div><div className="demo-website-tiles"><span>Responsive layout</span><span>Clear navigation</span><span>Useful content</span></div></div>}
          {demo.id==="app" && <div className="demo-application"><div className="demo-app-heading"><div><span>DEMO WORKSPACE</span><strong>Project overview</strong></div><span className="demo-live-tag">SAMPLE DATA</span></div><div className="demo-app-cards"><div><small>PLANNED</small><strong>03</strong><span>New tasks</span></div><div><small>IN PROGRESS</small><strong>02</strong><span>Being built</span></div><div><small>COMPLETE</small><strong>05</strong><span>Ready to review</span></div></div><div className="demo-app-list"><span><i/> Set up dashboard <b>Done</b></span><span><i/> Connect data <b>In progress</b></span><span><i/> Test user flow <b>To do</b></span></div></div>}
          {demo.id==="api" && <div className="demo-api"><div className="demo-api-request"><span>GET</span> /api/projects <b>200 OK</b></div><div className="demo-api-body"><span className="demo-comment">{"// Example API response"}</span><pre>{`{
  "status": "success",
  "data": {
    "project": "Web app",
    "features": ["auth", "dashboard"],
    "ready": true
  }
}`}</pre></div><div className="demo-api-footer">Node.js <span>•</span> REST APIs <span>•</span> Databases</div></div>}
        </div>
        <div className="dev-preview-caption"><span>{demo.eyebrow}</span><span>CONCEPT PREVIEW · NOT A CLIENT PROJECT</span></div>
      </div>
      <span className="dev-scene-plus" aria-hidden="true">+</span>
    </div>
    <div className="dev-scene-description" aria-live="polite" aria-atomic="true"><strong>{demo.heading}</strong><p>{demo.summary}</p></div>
    <div className="scene-controls" role="group" aria-label="Select a software development example">
      {demos.map((entry,i)=><button key={entry.id} type="button" className={`scene-mode ${selected===i?"selected":""}`} aria-pressed={selected===i} onClick={()=>setSelected(i)}><small>{entry.num}</small><span>{entry.title}</span><span aria-hidden="true">{selected===i?"●":"↗"}</span></button>)}
    </div>
    <div className="scene-disclaimer">Preview shows fictional example interfaces, not shipped product features.</div>
  </div>;
}