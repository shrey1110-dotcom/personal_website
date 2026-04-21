"use client";

import { motion } from "framer-motion";
import type { KeyboardEvent } from "react";
import PoseSkeleton from "@/components/PoseSkeleton";

const tags = ["TF.js", "FastAPI", "Docker"];

const openRepo = () => {
  window.open(
    "https://github.com/shrey1110-dotcom/Motion_analysis",
    "_blank",
    "noopener,noreferrer",
  );
};

const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openRepo();
  }
};

export default function MotionAnalysisCard() {
  return (
    <motion.article
      className="col-span-12 flex min-h-[165px] cursor-pointer flex-col justify-between overflow-hidden rounded-xl border-[0.5px] border-[#152338] bg-[#0a1422] p-[16px] md:col-span-4"
      role="link"
      tabIndex={0}
      onClick={openRepo}
      onKeyDown={handleKeyDown}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      whileHover={{ scale: 1.01 }}
    >
      <div
        className="flex flex-1 items-center justify-center rounded-lg"
        style={{
          background: "radial-gradient(circle at center, #1a2a40 0%, #0a1422 70%)",
        }}
      >
        <PoseSkeleton />
      </div>

      <div className="mt-4">
        <h2 className="text-[13px] font-medium text-[#dde4f0]">AI Motion Analysis</h2>
        <p className="mt-[2px] text-[11px] text-[#3a5068]">
          17-pt pose keypoints · biomechanical scoring
        </p>
        <div className="mt-[5px] flex flex-wrap gap-[5px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[3px] border border-[#1a2e3d] bg-[#0f1e2d] px-[7px] py-[2px] text-[10px] text-[#3a5878]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
