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
      : "h-40 w-40 text-2xl md:h-60 md:w-60 md:text-4xl";
  const imageSizes = size === "compact" ? "(min-width: 768px) 80px, 64px" : "(min-width: 768px) 240px, 160px";

  if (hasImageError) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(135deg,rgba(142,135,255,0.94),rgba(98,231,223,0.72))] font-semibold tracking-[-0.04em] text-white shadow-[0_28px_70px_rgba(79,70,229,0.28)] ${sizing}`}
      >
        SS
      </div>
    );
  }

  return (
    <>
      {/* TODO: add headshot as /public/me.jpg */}
      <div
        className={`relative shrink-0 overflow-hidden rounded-full border border-white/14 bg-[linear-gradient(135deg,rgba(142,135,255,0.18),rgba(98,231,223,0.1))] shadow-[0_26px_72px_rgba(6,10,18,0.44)] ${sizing}`}
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
    </>
  );
}
