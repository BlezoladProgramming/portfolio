import type {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import {pageMetadata} from "@/lib/seo";
import {profile} from "@/content/profile";
export const metadata:Metadata=pageMetadata("About","Meet Hamzat Muhammed Adewale, the full stack web developer behind BLEZOLAD, and explore my development skills.","/about");
const skills=[
  {id:"01",title:"Frontend development",words:["HTML & CSS", "JavaScript & TypeScript", "React & Next.js", "Responsive interfaces"]},
  {id:"02",title:"Backend development",words:["Node.js", "NestJS", "API development", "Authentication flows"]},
  {id:"03",title:"Databases & projects",words:["PostgreSQL & Prisma", "MongoDB", "PHP", "Data-driven applications"]},
  {id:"04",title:"Developer workflow",words:["Git & GitHub", "Debugging", "Testing", "Deployment and iteration"]},
];
export default function About(){return <>
  <header className="inner-hero about-hero"><p className="eyebrow">ABOUT / MEET THE DEVELOPER</p><div className="about-hero-grid"><h1>Hey, I&apos;m Hamzat.<br/><em>I build for the web.</em></h1><div className="about-identity"><div className="about-portrait"><Image src={profile.portrait} width={516} height={516} alt="Portrait of Hamzat Muhammed Adewale, the full stack web developer behind BLEZOLAD" priority /><span className="portrait-corner" aria-hidden="true">↗</span></div><small>DEVELOPER / INDEPENDENT PRACTICE</small><strong>{profile.name}</strong><span>{profile.role}<br/>{profile.experience} experience</span></div></div><p>I&apos;m {profile.name}, a full stack web developer. I build websites and software applications, connecting what users see on screen to the backend logic, APIs and databases that make them work.</p></header>
  <section className="about-statement section-pad"><div className="about-statement-index" data-reveal><span className="eyebrow">WHY I DEVELOP</span><span className="statement-line"/></div><div data-reveal><h2>I enjoy turning an idea into <em>something people can actually use.</em></h2><p>For {profile.experience}, I&apos;ve been building and improving web projects—working on user interfaces, application logic, debugging and the little details that make software easier to use. My portfolio includes a movie-discovery platform, a B2B marketplace project and an institutional records system.</p></div></section>
  <section className="skills-section section-pad"><div className="section-intro" data-reveal><div><p className="eyebrow">TOOLS &amp; TECHNOLOGIES</p><h2>My development<br/><em>toolkit.</em></h2></div><p className="intro-right">Technologies represented in my work and learning—not a claim of expert-level mastery in every tool.</p></div><div className="skills-grid">{skills.map(s=><article key={s.id} data-reveal><span className="skill-index">{s.id} / AREA</span><h3>{s.title}</h3><ul>{s.words.map(w=><li key={w}>{w}<span aria-hidden="true">↗</span></li>)}</ul></article>)}</div></section>
  <section className="about-final section-pad"><p className="eyebrow">EXPLORE MORE</p><h2>The projects<br/><em>behind the code.</em></h2><div><Link href="/work" className="btn-electric">See my projects ↗</Link><Link href="/contact" className="underlined-link">Start a conversation →</Link></div></section>
</>}