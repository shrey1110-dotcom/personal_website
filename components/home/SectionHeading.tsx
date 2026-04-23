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
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="max-w-[56rem]"
    >
      <motion.p
        className="section-label"
        variants={{
          hidden: { opacity: 0.58, y: 16 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          },
        }}
      >
        {label}
      </motion.p>
      <motion.h2
        className="section-title mt-4"
        variants={{
          hidden: { opacity: 0.6, y: 18 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
          },
        }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="section-body mt-5"
        variants={{
          hidden: { opacity: 0.64, y: 18 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
          },
        }}
      >
        {body}
      </motion.p>
    </motion.div>
  );
}
