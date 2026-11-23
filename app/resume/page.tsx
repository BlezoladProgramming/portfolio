import type {Metadata} from "next";
import Link from "next/link";
import {profile} from "@/content/profile";
import {pageMetadata} from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Résumé | Hamzat Muhammed Adewale",
  "The CV, project experience, skills and education of Hamzat Muhammed Adewale, the Full Stack Web Developer behind BLEZOLAD.",
  "/resume"
);

const capabilities = [
  {label:"Frontend", skills:"HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS"},
  {label:"Backend", skills:"Node.js, Express.js, NestJS, PHP, REST APIs"},
  {label:"Data & infrastructure", skills:"MongoDB, Prisma, Redis, Linux and server deployment workflows"},
  {label:"Development practice", skills:"Git, GitHub, Vitest, ESLint, debugging, accessibility, SEO and performance"},
];
const experience = [
  {name:"Cinevex",status:"Ongoing",description:"Movie and TV discovery platform. Frontend and backend development work, testing, accessibility, SEO, account flows and production troubleshooting.",url:"/work/cinevex"},
  {name:"Mini-B2B Marketplace",status:"Paused",description:"Buyer–seller marketplace prototype using Next.js, NestJS and Prisma. Listings, orders and messaging flows explored; some features remain unfinished.",url:"/work/mini-b2b-marketplace"},
  {name:"OIMS",status:"Portfolio project",description:"PHP administrator-focused information management system for student, staff and IT/SIWES records.",url:"/work/oims"},
];

export default function ResumePage(){return <>
  <header className="inner-hero resume-hero" aria-labelledby="resume-title">
    <p className="eyebrow">05 / PROFESSIONAL RÉSUMÉ</p>
    <div className="resume-title-layout">
      <div>
        <h1 id="resume-title">Behind the<br/><em>code.</em></h1>
        <p className="resume-intro">I&apos;m {profile.name}, a {profile.role.toLowerCase()} with {profile.experience} of hands-on development experience. Here&apos;s a closer look at my skills, projects and background.</p>
        <div className="resume-hero-actions">
          <a href={profile.resumeUrl} download className="btn-electric">Download my CV <span aria-hidden="true">↓</span></a>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="underlined-link">Open the PDF <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="resume-document-card" aria-label="Résumé document preview">
        <div className="resume-doc-top"><span>BLEZOLAD / DOCUMENT 001</span><span>PDF · A4</span></div>
        <div className="resume-doc-monogram" aria-hidden="true">B<span>.</span></div>
        <span className="resume-doc-caption">HAMZAT MUHAMMED ADEWALE</span>
        <strong>FULL STACK<br/>WEB DEVELOPER</strong>
        <div className="resume-doc-bottom"><span>2+ YEARS</span><span>ONE-PAGE CV ↗</span></div>
      </div>
    </div>
  </header>
  <section className="resume-sheet section-pad" aria-label="Professional background">
    <div className="resume-section" data-reveal>
      <div className="resume-section-label"><span className="eyebrow">01 / PROFILE</span></div>
      <div><h2>Software made<br/><em>for real use.</em></h2><p>Full Stack Web Developer with {profile.experience} of hands-on experience building responsive interfaces, backend services and database-driven applications. Developer behind BLEZOLAD, with work spanning entertainment discovery, records management and B2B marketplace systems.</p></div>
    </div>
    <div className="resume-section" data-reveal>
      <div className="resume-section-label"><span className="eyebrow">02 / TECHNICAL SKILLS</span></div>
      <div className="resume-skills">{capabilities.map(item=><div className="resume-skill-row" key={item.label}><h3>{item.label}</h3><p>{item.skills}</p></div>)}</div>
    </div>
    <div className="resume-section" data-reveal>
      <div className="resume-section-label"><span className="eyebrow">03 / SELECTED WORK</span></div>
      <div className="resume-projects">{experience.map(item=><article key={item.name} className="resume-project"><span>{item.status}</span><h3>{item.name}</h3><p>{item.description}</p><Link href={item.url}>View case study <span aria-hidden="true">↗</span></Link></article>)}</div>
    </div>
    <div className="resume-section" data-reveal>
      <div className="resume-section-label"><span className="eyebrow">04 / EDUCATION</span></div>
      <div className="resume-education"><span>November 2025</span><h3>National Diploma (ND), Computer Science</h3><p>Federal School of Surveying, Oyo</p></div>
    </div>
    <div className="resume-section resume-last" data-reveal>
      <div className="resume-section-label"><span className="eyebrow">05 / GET IN TOUCH</span></div>
      <div><h2>Let&apos;s build<br/><em>something useful.</em></h2><p>Open to development opportunities and conversations about web applications, websites, APIs and improvements to existing products.</p><div className="resume-hero-actions"><Link href="/contact" className="btn-electric">Contact me <span aria-hidden="true">↗</span></Link><a href={profile.resumeUrl} download className="underlined-link">Download CV <span aria-hidden="true">↓</span></a></div></div>
    </div>
  </section>
</>}
