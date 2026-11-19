"use client";
import {usePathname} from "next/navigation";
import {useEffect} from "react";
export default function MotionController() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    const elements = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      root.classList.remove("motion-ready");
      elements.forEach(e=>e.classList.add("in-view"));
      return;
    }
    // The CSS hides only below-the-fold elements *after* JS initializes.
    elements.forEach(e => {
      if (e.getBoundingClientRect().top < window.innerHeight * .95) e.classList.add("in-view");
    });
    root.classList.add("motion-ready");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    }), {rootMargin:"0px 0px -40px 0px", threshold: .08});
    elements.forEach(e=>{if (!e.classList.contains("in-view")) observer.observe(e);});
    return () => observer.disconnect();
  },[pathname]);
  return null;
}
