"use client";

import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type TiltPanelProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  lift?: number;
};

const spring = {
  damping: 18,
  mass: 0.5,
  stiffness: 170,
};

export default function TiltPanel({
  children,
  className = "",
  intensity = 8,
  lift = 6,
}: TiltPanelProps) {
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springX = useSpring(rotateX, spring);
  const springY = useSpring(rotateY, spring);
  const background = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(203, 214, 255, 0.14), rgba(203, 214, 255, 0.04) 22%, transparent 56%)`;

  const handleMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    rotateY.set((x - 0.5) * intensity * 2);
    rotateX.set((0.5 - y) * intensity * 2);
    glowX.set(x * 100);
    glowY.set(y * 100);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.div
      className={`tilt-surface ${className}`}
      data-cursor="panel"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={
        reduceMotion
          ? undefined
          : {
              rotateX: springX,
              rotateY: springY,
              transformPerspective: 1400,
              transformStyle: "preserve-3d",
            }
      }
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.004,
              y: -lift,
            }
      }
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {!reduceMotion ? <motion.div aria-hidden="true" className="tilt-glow" style={{ background }} /> : null}
      <div className="relative z-[1] h-full">{children}</div>
    </motion.div>
  );
}
