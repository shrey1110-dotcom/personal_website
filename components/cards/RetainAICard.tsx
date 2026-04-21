"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { KeyboardEvent } from "react";
import { withBasePath } from "@/lib/site";

const openSite = () => {
  window.open("https://retain-ai-eight.vercel.app/", "_blank", "noopener,noreferrer");
};

const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openSite();
  }
};

export default function RetainAICard() {
  return (
    <motion.article
      className="col-span-12 flex min-h-[250px] cursor-pointer flex-col overflow-hidden rounded-xl border-[0.5px] border-[#1c1c18] bg-[#0b0b09] p-[18px] md:col-span-8"
      role="link"
      tabIndex={0}
      onClick={openSite}
      onKeyDown={handleKeyDown}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="relative min-h-[176px] flex-1 overflow-hidden rounded-lg border border-[#1c1c18]">
        <Image
          src={withBasePath("/retain-screenshot.png")}
          alt="RETAIN AI dashboard preview"
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover"
          priority
        />
        <div className="absolute left-0 right-0 top-0 flex h-[22px] items-center gap-1 rounded-t-lg bg-[#080807]/90 px-2">
          <span className="h-[6px] w-[6px] rounded-full bg-[#3a1a1a]" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#3a2e14]" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#142a1a]" />
          <div className="mx-2 flex h-[11px] flex-1 items-center rounded bg-[#111110] px-1 font-mono text-[8px] text-[#44443e]">
            retain-ai-eight.vercel.app
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-end justify-between gap-3">
        <div>
          <h2 className="text-[17px] font-medium tracking-tight text-[#e2e0d8]">RETAIN AI</h2>
          <p className="text-[11px] text-[#44443e]">
            AI SMS SaaS · multi-tenant · Gemini + Twilio
          </p>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-[#153018] bg-[#0c1e10] px-3 py-1">
          <motion.span
            className="h-[6px] w-[6px] rounded-full bg-[#4ade80]"
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          />
          <span className="text-[11px] font-medium text-[#4ade80]">live</span>
        </div>
      </div>
    </motion.article>
  );
}
