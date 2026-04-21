"use client";

import { motion } from "framer-motion";
import type { KeyboardEvent } from "react";

const tags = ["Keras", "Python", "scikit-learn"];

const circles = [
  "h-[26px] w-[26px] bg-[#FAECE7] border-[#F0997B]",
  "h-[22px] w-[22px] bg-[#EAF3DE] border-[#97C459]",
  "h-[24px] w-[24px] bg-[#E6F1FB] border-[#85B7EB]",
  "h-[20px] w-[20px] bg-[#FBEAF0] border-[#ED93B1]",
  "h-[24px] w-[24px] bg-[#EEEDFE] border-[#AFA9EC]",
];

const openRepo = () => {
  window.open(
    "https://github.com/shrey1110-dotcom/cervical-cancer-detection",
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

export default function CervicalCNNCard() {
  return (
    <motion.article
      className="col-span-12 flex min-h-[165px] cursor-pointer flex-col justify-between rounded-xl border-[0.5px] border-[#e2e0d8] bg-white p-[16px] md:col-span-4"
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
      <div className="flex items-center">
        {circles.map((circle, index) => (
          <span
            key={circle}
            className={`rounded-full border-[2.5px] ${circle} ${index === 0 ? "" : "-ml-[5px]"}`}
          />
        ))}
        <span className="ml-[9px] text-[10px] text-[#888780]">5 classes</span>
      </div>

      <div>
        <h2 className="text-[13px] font-medium text-[#1a1a18]">Cervical Cell CNN</h2>
        <p className="mt-[2px] text-[11px] text-[#888780]">
          Pap smear classification · transfer learning
        </p>
        <div className="mt-[5px] flex flex-wrap gap-[5px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[3px] bg-[#f2f1ed] px-[7px] py-[2px] text-[10px] text-[#5f5e5a]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
