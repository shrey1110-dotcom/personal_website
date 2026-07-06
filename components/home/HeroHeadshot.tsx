"use client";

import { useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/site";

type HeroHeadshotProps = {
  size?: "compact" | "hero";
};

export default function HeroHeadshot({ size = "hero" }: HeroHeadshotProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const sizing =
    size === "compact"
      ? "h-16 w-16 text-lg md:h-20 md:w-20 md:text-xl"
      : "h-48 w-48 text-2xl md:h-72 md:w-72 md:text-4xl";
  const imageSizes =
    size === "compact" ? "(min-width: 768px) 80px, 64px" : "(min-width: 768px) 288px, 192px";

  if (hasImageError) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(135deg,rgba(174,185,201,0.94),rgba(148,163,184,0.72))] font-semibold tracking-[-0.04em] text-white shadow-[0_28px_70px_rgba(0,0,0,0.28)] ${sizing}`}
      >
        SS
      </div>
    );
  }

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border border-white/14 bg-[linear-gradient(135deg,rgba(174,185,201,0.18),rgba(148,163,184,0.1))] shadow-[0_26px_72px_rgba(6,10,18,0.44)] ${sizing}`}
    >
      <Image
        src={withBasePath("/me.jpg")}
        alt="Shreyansh Sharma"
        fill
        sizes={imageSizes}
        className="object-cover object-[center_18%]"
        onError={() => setHasImageError(true)}
        priority
      />
    </div>
  );
}
