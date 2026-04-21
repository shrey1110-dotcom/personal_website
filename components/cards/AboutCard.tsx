"use client";

import { motion } from "framer-motion";

const stats = ["GPA 3.5", "May 2027", "6+ languages", "3 deployed"];

export default function AboutCard() {
  return (
    <motion.article
      className="col-span-12 flex min-h-[250px] flex-col justify-between rounded-xl border-[0.5px] border-[#e2e0d8] bg-white p-[18px] md:col-span-4"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <div>
        <div className="mb-3 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#EEEDFE] text-[14px] font-medium text-[#3C3489]">
          SS
        </div>
        <h2 className="mb-1 text-[14px] font-medium text-[#1a1a18]">Shreyansh Sharma</h2>
        <p className="text-[12px] text-[#888780]">CS junior @ CSULB</p>
        <p className="text-[12px] text-[#888780]">Full-stack · ML · Web3</p>
        <p className="text-[12px] text-[#888780]">Long Beach, CA</p>
      </div>

      <div className="flex flex-wrap gap-1">
        {stats.map((stat) => (
          <span
            key={stat}
            className="rounded-full border border-[#e2e0d8] bg-[#f2f1ed] px-[9px] py-[3px] text-[11px] text-[#5f5e5a]"
          >
            {stat}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
