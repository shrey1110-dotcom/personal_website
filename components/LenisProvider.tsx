"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.08,
      lerp: 0.08,
      smoothWheel: true,
      touchMultiplier: 1.05,
      wheelMultiplier: 0.9,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;

      if (!link) {
        return;
      }

      const href = link.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const element = document.querySelector(href);

      if (!(element instanceof HTMLElement)) {
        return;
      }

      event.preventDefault();
      lenis.scrollTo(element, {
        duration: 1.15,
        offset: -96,
      });
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
