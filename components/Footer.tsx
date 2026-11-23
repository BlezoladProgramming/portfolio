import Link from "next/link";
import {profile} from "@/content/profile";
export default function Footer(){return <footer className="footer">
  <div className="footer-main"><div><span className="eyebrow">READY TO BUILD? / 05</span><h2>Have an idea<br/><em>for an app?</em></h2><Link className="footer-primary-link" href="/contact">Discuss your project <span aria-hidden="true">↗</span></Link></div>
  <div className="footer-index"><span className="mini-heading">Find your way</span><Link href="/">Overview</Link><Link href="/work">Projects</Link><Link href="/services">Development services</Link><Link href="/about">About</Link><Link href="/resume">Résumé / CV</Link><Link href="/contact">Contact</Link></div>
  <div className="footer-index"><span className="mini-heading">Connect</span><a href={`mailto:${profile.email}`}>Email ↗</a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.x} target="_blank" rel="noopener noreferrer">X / @Blezolad_2 ↗</a><a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a><a href={profile.resumeUrl} download>Download CV ↓</a><Link href="/privacy">Privacy</Link></div></div>
  <div className="footer-base"><span>© {new Date().getFullYear()} BLEZOLAD · {profile.name}.</span><span>FULL STACK WEB DEVELOPER / WEB APPS · WEBSITES · APIs</span><Link href="#top">BACK TO TOP ↑</Link></div>
</footer>}
