"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "TypeScript",
  "C/C++",
  "Go",
  "SQL",
  "Next.js",
  "React",
  "FastAPI",
  "Express",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "TensorFlow",
  "scikit-learn",
  "Docker",
  "AWS",
  "Vercel",
  "Stripe",
  "Clerk",
];

export default function SkillsCard() {
  return (
    <motion.article
      id="skills"
      className="col-span-12 scroll-mt-20 rounded-xl border-[0.5px] border-[#e2e0d8] bg-white p-[16px] md:col-span-5"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <p className="mb-[10px] text-[10px] uppercase tracking-[0.1em] text-[#b0aea8]">Skills</p>
      <div className="flex flex-wrap gap-[5px]">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="rounded-full border border-[#e2e0d8] bg-[#f8f7f4] px-[10px] py-1 text-[11px] text-[#5f5e5a]"
            whileHover={{
              backgroundColor: "#EEEDFE",
              color: "#3C3489",
              borderColor: "#AFA9EC",
            }}
            transition={{ duration: 0.15 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.article>
  );
}
