"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  body: string;
  label: string;
  title: string;
};

export default function SectionHeading({
  body,
  label,
  title,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0.88, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.36, ease: "easeOut" }}
      className="max-w-[54rem]"
    >
      <p className="section-label">{label}</p>
      <h2 className="section-title mt-4">{title}</h2>
      <p className="section-body mt-5">{body}</p>
    </motion.div>
  );
}
