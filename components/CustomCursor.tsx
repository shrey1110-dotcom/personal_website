"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const mouseX = useMotionValue(-120);
  const mouseY = useMotionValue(-120);

  const springX = useSpring(mouseX, {
    stiffness: 440,
    damping: 34,
    mass: 0.18,
  });
  const springY = useSpring(mouseY, {
    stiffness: 440,
    damping: 34,
    mass: 0.18,
  });
  const glowX = useSpring(mouseX, {
    stiffness: 220,
    damping: 28,
    mass: 0.36,
  });
  const glowY = useSpring(mouseY, {
    stiffness: 220,
    damping: 28,
    mass: 0.36,
  });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setActive(true);
    };
    const handleLeave = () => setActive(false);
    const handleEnter = () => setActive(true);
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);
    const activateHover = () => setHovering(true);
    const deactivateHover = () => setHovering(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    const interactiveNodes = Array.from(
      document.querySelectorAll("a, button, [role='button'], [role='link'], [data-cursor='link']"),
    );

    interactiveNodes.forEach((node) => {
      node.addEventListener("mouseenter", activateHover);
      node.addEventListener("mouseleave", deactivateHover);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);

      interactiveNodes.forEach((node) => {
        node.removeEventListener("mouseenter", activateHover);
        node.removeEventListener("mouseleave", deactivateHover);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(53,230,211,0.24)_0%,rgba(91,162,255,0.14)_38%,rgba(178,107,255,0.08)_62%,transparent_74%)] blur-2xl md:block"
        style={{ x: glowX, y: glowY }}
        animate={{
          opacity: active ? (hovering ? 0.85 : 0.55) : 0,
          scale: hovering ? 1.18 : pressed ? 0.88 : 1,
        }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[95] hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/5 backdrop-blur-md md:block"
        style={{ x: springX, y: springY }}
        animate={{
          opacity: active ? 1 : 0,
          scale: hovering ? 1.75 : pressed ? 0.75 : 1,
          borderColor: hovering ? "rgba(53, 230, 211, 0.82)" : "rgba(255, 255, 255, 0.28)",
          backgroundColor: hovering ? "rgba(178, 107, 255, 0.18)" : "rgba(255, 255, 255, 0.05)",
          boxShadow: hovering
            ? "0 0 32px rgba(178,107,255,0.35), 0 0 18px rgba(53,230,211,0.28)"
            : "0 0 14px rgba(91,162,255,0.2)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white md:block"
        style={{ x: springX, y: springY }}
        animate={{
          opacity: active ? 1 : 0,
          scale: pressed ? 0.6 : 1,
          boxShadow: hovering
            ? "0 0 18px rgba(53,230,211,0.95), 0 0 28px rgba(178,107,255,0.72)"
            : "0 0 14px rgba(255,255,255,0.9)",
        }}
        transition={{ duration: 0.16 }}
      />
    </>
  );
}
