"use client";

import { useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/site";

export default function HeroHeadshot() {
  const [hasImageError, setHasImageError] = useState(false);

  if (hasImageError) {
    return (
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(142,135,255,0.94),rgba(98,231,223,0.72))] text-lg font-semibold tracking-[-0.04em] text-white shadow-[0_18px_44px_rgba(79,70,229,0.28)] md:h-20 md:w-20 md:text-xl">
        SS
      </div>
    );
  }

  return (
    <>
      {/* TODO: add headshot as /public/me.jpg */}
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/12 bg-[linear-gradient(135deg,rgba(142,135,255,0.18),rgba(98,231,223,0.1))] shadow-[0_18px_44px_rgba(6,10,18,0.36)] md:h-20 md:w-20">
        <Image
          src={withBasePath("/me.jpg")}
          alt="Shreyansh Sharma"
          fill
          sizes="(min-width: 768px) 80px, 64px"
          className="object-cover"
          onError={() => setHasImageError(true)}
          priority
        />
      </div>
    </>
  );
}
