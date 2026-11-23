import Link from "next/link";
import StudioScene from "@/components/StudioScene";
import ProjectExplorer from "@/components/ProjectExplorer";
import ServiceSelector from "@/components/ServiceSelector";
import {profile} from "@/content/profile";

const steps = [
  ["01", "Understand", "We discuss what you want to build, who will use it and what matters most."],
  ["02", "Plan", "I break the idea into pages, features, user flows and a realistic development scope."],
  ["03", "Develop", "I write the frontend and backend code, connect data and build working features."],
  ["04", "Test & improve", "I check how it behaves, fix issues and refine it before the next release."],
] as const;

export default function Home(){return <>
  <section className="hero-workshop" aria-labelledby="hero-title">
    <div className="hero-left">
      <div className="hero-kicker"><span className="kicker-line"/><span>FULL STACK WEB DEVELOPMENT</span><span className="kicker-index">FRONTEND + BACKEND</span></div>
      <p className="hero-overline">HEY, I&apos;M HAMZAT — THE DEVELOPER BEHIND BLEZOLAD.</p>
      <h1 id="hero-title">I develop<br/><span className="h1-outline">software</span><br/><em>for the web.</em></h1>
      <p className="hero-description">I&apos;m a full stack web developer building websites, web applications and the APIs behind them. I take an idea from interface to working functionality—with clean, thoughtful code.</p>
      <div className="hero-actions"><Link href="/work" className="btn-electric">See my projects <span aria-hidden="true">↗</span></Link><Link href="/contact" className="hero-text-link">Have something to build? <span aria-hidden="true">→</span></Link><a className="hero-cv-link" href={profile.resumeUrl} download>Download CV <span aria-hidden="true">↓</span></a></div>
      <div className="hero-tech-line" aria-label="Technologies used in my projects"><span>MY STACK</span><span>REACT</span><span>NEXT.JS</span><span>NODE.JS</span><span>PHP</span></div>
      <div className="hero-bottom"><span className="hero-availability"><span className="pulse-dot"/>AVAILABLE TO DISCUSS DEVELOPMENT PROJECTS</span><span className="hero-years">{profile.experience} <small>DEVELOPING FOR THE WEB</small></span></div>
    </div>
    <div className="hero-right"><StudioScene/></div>
    <div className="hero-bottom-band"><span>01 / FROM IDEA TO WORKING SOFTWARE</span><span>WEBSITES. WEB APPS. APIs.</span><Link href="#selected-work">EXPLORE MY PROJECTS ↓</Link></div>
  </section>

  <section className="manifesto-strip" aria-label="My software development focus"><span>WEB APPLICATIONS</span><span aria-hidden="true">✳</span><span>FRONTEND DEVELOPMENT</span><span aria-hidden="true">✳</span><span>BACKEND &amp; APIs</span><span aria-hidden="true">✳</span><span>DATABASES</span></section>

  <section id="selected-work" className="section-pad showcase-section">
    <div className="section-intro" data-reveal><div><p className="eyebrow">01 / PROJECTS I&apos;VE BUILT</p><h2>Real projects.<br/><em>Real software.</em></h2></div><div className="intro-side"><span className="side-rule"/><p>Explore the websites and applications I&apos;ve worked on, from Cinevex to a B2B marketplace and a records management system.</p><span className="micro-note">CHOOSE A PROJECT TO EXPLORE ↘</span></div></div>
    <ProjectExplorer/>
  </section>

  <section className="capabilities-section section-pad">
    <div className="section-intro" data-reveal><div><p className="eyebrow ink">02 / DEVELOPMENT SERVICES</p><h2>What do you<br/><em>need built?</em></h2></div><p className="intro-right">A business website? A custom web application? Help with a broken feature? Choose what you need and see how I can help.</p></div>
    <ServiceSelector compact/>
  </section>

  <section className="method-section section-pad"><div className="method-layout">
    <div className="method-sticky" data-reveal><p className="eyebrow">03 / MY DEVELOPMENT PROCESS</p><h2>From idea<br/><em>to working app.</em></h2><p>Development is more than making a page look good. It means understanding the problem, writing functional code and testing the result.</p><Link href="/about" className="underlined-link">Meet the developer <span aria-hidden="true">↗</span></Link></div>
    <ol className="method-steps">{steps.map(([n,title,body])=><li data-reveal key={n}><span className="step-id">{n} /</span><div><h3>{title}</h3><p>{body}</p></div><span className="step-arrow" aria-hidden="true">↗</span></li>)}</ol>
  </div></section>

  <section className="closing-section section-pad"><div className="closing-graphic" aria-hidden="true"><span>B.</span><span className="closing-graph-line"/></div><div className="closing-message" data-reveal><p className="eyebrow">04 / THE PERSON WRITING THE CODE</p><h2>One developer.<br/><em>Full stack skills.</em></h2><p>I&apos;m {profile.name}, a full stack web developer with {profile.experience} of experience. I work on the parts users see and the backend that makes everything run.</p><Link href="/about" className="underlined-link">More about me &amp; my skills <span aria-hidden="true">↗</span></Link></div></section>
</>}