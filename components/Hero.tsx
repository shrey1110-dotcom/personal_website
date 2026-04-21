"use client";

import { motion } from "framer-motion";

const lines = [
  { text: "Building", className: "text-[#1a1a18]" },
  { text: "real products.", className: "text-[#c0bdb5]" },
  { text: "Not just demos.", className: "text-[#1a1a18]" },
];

export default function Hero() {
  return (
    <section className="px-[22px] pb-[20px] pt-[32px]">
      <div className="max-w-[780px]">
        {lines.map((line, index) => (
          <motion.p
            key={line.text}
            className={`text-[28px] font-medium leading-[1] tracking-[-0.04em] md:text-[46px] ${line.className}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.45,
              ease: "easeOut",
            }}
          >
            {line.text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
