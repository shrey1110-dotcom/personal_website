"use client";

import { motion } from "framer-motion";
import type { KeyboardEvent } from "react";

const tags = ["Solidity", "Python", "DeFi", "Web3"];

const openGist = () => {
  window.open(
    "https://gist.github.com/shrey1110-dotcom/ef53904ed184311d8a8dd5587ef11716",
    "_blank",
    "noopener,noreferrer",
  );
};

const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openGist();
  }
};

export default function FlashloanCard() {
  return (
    <motion.article
      className="col-span-12 flex cursor-pointer flex-col justify-between gap-4 rounded-xl border-[0.5px] border-[#1c1c18] bg-[#090907] px-[18px] py-[14px] md:flex-row md:items-center"
      role="link"
      tabIndex={0}
      onClick={openGist}
      onKeyDown={handleKeyDown}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      whileHover={{ scale: 1.004 }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[7px] border border-[#1c1c18] bg-[#111110]">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <polygon
              points="10,2 17,6 17,14 10,18 3,14 3,6"
              fill="none"
              stroke="#534AB7"
              strokeWidth="1.2"
            />
            <line
              x1="10"
              y1="5"
              x2="8"
              y2="10"
              stroke="#7F77DD"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="8"
              y1="10"
              x2="12"
              y2="10"
              stroke="#7F77DD"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="12"
              y1="10"
              x2="10"
              y2="15"
              stroke="#AFA9EC"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-[13px] font-medium text-[#e2e0d8]">Flashloan Arbitrage Bot</h2>
          <p className="mt-[2px] text-[11px] text-[#44443e]">
            Multi-DEX route scanning · EVM DeFi · thousands of token pairs
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-[5px] md:justify-end">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[3px] border border-[#1c1c18] bg-[#111110] px-[7px] py-[2px] text-[10px] text-[#44443e]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
