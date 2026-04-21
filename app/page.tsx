import BentoGrid from "@/components/BentoGrid";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import { withBasePath } from "@/lib/site";

const footerLinks = [
  {
    href: "https://github.com/shrey1110-dotcom",
    label: "github",
  },
  {
    href: "https://linkedin.com/in/sharmasshrey",
    label: "linkedin",
  },
  {
    href: withBasePath("/resume.pdf"),
    label: "resume",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f6f5f1]">
      <div className="mx-auto flex min-h-screen max-w-[1180px] flex-col">
        <Nav />
        <Hero />
        <BentoGrid />
        <footer className="mt-auto flex flex-col items-center justify-between gap-2 border-t border-[#e2e0d8] px-[22px] py-[13px] sm:flex-row">
          <p className="text-center text-[11px] text-[#b0aea8] sm:text-left">
            Shreyansh Sharma · Long Beach CA · 2026
          </p>
          <div className="flex items-center gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-[#888780] transition-colors hover:text-[#1a1a18]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
