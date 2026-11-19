"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import Brand from "@/components/Brand";

const nav = [
  {href: "/", label: "Overview", number: "00"},
  {href: "/work", label: "Projects", number: "01"},
  {href: "/services", label: "Services", number: "02"},
  {href: "/about", label: "About", number: "03"},
  {href: "/contact", label: "Contact", number: "04"},
];
export default function SiteChrome() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const active = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {setOpen(false); toggle.current?.focus();}
      if (e.key === "Tab" && menu.current) {
        const focusable = [...menu.current.querySelectorAll<HTMLElement>("a, button")];
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {e.preventDefault(); last.focus();}
        else if (!e.shiftKey && document.activeElement === last) {e.preventDefault(); first.focus();}
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {document.body.style.overflow = prev; window.removeEventListener("keydown", onKey);};
  },[open]);
  return <>
    <aside className="site-rail" aria-label="Portfolio navigation">
      <div className="rail-top"><Link href="/" className="rail-emblem" aria-label="BLEZOLAD homepage">b<span>.</span></Link><span className="rail-rule" /></div>
      <nav className="rail-nav" aria-label="Primary">
        {nav.map(({href,label,number})=><Link key={href} href={href} className={`rail-link ${active(href)?"is-active":""}`} aria-current={active(href)?"page":undefined} title={label}>
          <span className="rail-index">{number}</span><span className="rail-label">{label}</span><span className="rail-pip" />
        </Link>)}
      </nav>
      <div className="rail-bottom"><span className="rail-orientation">CODE / BUILD / IMPROVE</span><span className="rail-tick">↗</span></div>
    </aside>
    <header className="mobile-topbar">
      <Brand compact />
      <button ref={toggle} type="button" className="mobile-menu-trigger" aria-label={open?"Close navigation":"Open navigation"} aria-controls="mobile-nav" aria-expanded={open} onClick={()=>setOpen(x=>!x)}><span>{open?"CLOSE":"MENU"}</span><span aria-hidden="true">{open?"×":"☷"}</span></button>
    </header>
    {open && <div id="mobile-nav" className="mobile-menu" ref={menu} role="dialog" aria-modal="true" aria-label="Navigation menu">
      <nav aria-label="Mobile primary">{nav.map(({href,label,number})=><Link href={href} key={href} aria-current={active(href)?"page":undefined} onClick={()=>setOpen(false)}><small>{number} /</small><span>{label}</span><span aria-hidden="true">↗</span></Link>)}</nav>
      <p>BLEZOLAD / FULL STACK WEB DEVELOPER</p>
    </div>}
    <div className="topline"><Brand /><span className="topline-note">Full Stack Web Developer <span aria-hidden="true">/</span> 2+ years experience</span><Link href="/contact" className="topline-contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link></div>
  </>;
}
