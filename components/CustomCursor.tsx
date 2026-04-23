"use client";

import { useEffect, useRef } from "react";

function mix(current: number, target: number, factor: number) {
  return current + (target - current) * factor;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    const ring = {
      x: pointer.x,
      y: pointer.y,
    };

    let rafId = 0;
    let visible = false;
    let pressed = false;
    let mode: "default" | "panel" | "interactive" = "default";

    const render = () => {
      ring.x = mix(ring.x, pointer.x, 0.16);
      ring.y = mix(ring.y, pointer.y, 0.16);

      const dot = dotRef.current;
      const ringElement = ringRef.current;
      const scale = mode === "interactive" ? 1.55 : mode === "panel" ? 1.18 : 1;
      const dotScale = pressed ? 0.75 : 1;

      if (dot && ringElement) {
        dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) scale(${dotScale})`;
        dot.style.opacity = visible ? "1" : "0";
        ringElement.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) scale(${scale})`;
        ringElement.style.opacity = visible ? "1" : "0";
      }

      rafId = window.requestAnimationFrame(render);
    };

    const updateMode = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) {
        mode = "default";
        return;
      }

      if (target.closest('[data-cursor="interactive"], a, button')) {
        mode = "interactive";
        return;
      }

      if (target.closest('[data-cursor="panel"]')) {
        mode = "panel";
        return;
      }

      mode = "default";
    };

    const onMove = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      visible = true;
      updateMode(event.target);
    };

    const onDown = () => {
      pressed = true;
    };

    const onUp = () => {
      pressed = false;
    };

    const onLeave = () => {
      visible = false;
    };

    const onEnter = () => {
      visible = true;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafId = window.requestAnimationFrame(render);

    return () => {
      root.classList.remove("has-custom-cursor");
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} aria-hidden="true" className="custom-cursor-ring" />
      <div ref={dotRef} aria-hidden="true" className="custom-cursor-dot" />
    </>
  );
}
