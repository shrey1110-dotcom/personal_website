"use client";

import { motion } from "framer-motion";
import type { KeyboardEvent } from "react";

const email = "shreyansh.sharma01@student.csulb.edu";

const openEmail = () => {
  window.location.href = `mailto:${email}`;
};

const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openEmail();
  }
};

export default function ContactCard() {
  return (
    <motion.article
      id="contact"
      className="col-span-12 flex cursor-pointer items-center justify-between rounded-xl border-[0.5px] border-[#1c1c18] bg-[#181816] px-[20px] py-[16px] md:col-span-7"
      role="link"
      tabIndex={0}
      onClick={openEmail}
      onKeyDown={handleKeyDown}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      whileHover={{ backgroundColor: "#252520" }}
    >
      <div>
        <h2 className="text-[15px] font-medium tracking-tight text-[#e2e0d8]">
          Let&apos;s work together
        </h2>
        <p className="mt-[3px] text-[11px] text-[#44443e]">{email}</p>
      </div>
      <motion.span
        className="text-[24px] text-[#44443e]"
        whileHover={{ x: 3, y: -3, color: "#e2e0d8" }}
      >
        ↗
      </motion.span>
    </motion.article>
  );
}
