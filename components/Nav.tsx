"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "work" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 h-[52px] bg-[#f6f5f1]">
      <div className="flex h-full items-center justify-between px-[22px]">
        <a href="#" className="text-[13px] font-medium text-[#1a1a18]">
          Shreyansh Sharma
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-4 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] text-[#9a9890] transition-colors hover:text-[#1a1a18]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <motion.span
              className="h-2 w-2 rounded-full bg-[#22c55e]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <span className="hidden text-[11px] text-[#3b6d11] md:inline">
              open to internships
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
