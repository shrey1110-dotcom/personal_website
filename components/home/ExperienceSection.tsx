"use client";

import ExperienceCard from "@/components/home/ExperienceCard";
import SectionHeading from "@/components/home/SectionHeading";
import { experienceEntries } from "@/lib/portfolio-content";

const featuredEntries = experienceEntries.filter((entry) => entry.featured);
const supportingEntries = experienceEntries.filter((entry) => !entry.featured);

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell pt-8 md:pt-10">
      <div className="section-frame">
        <SectionHeading
          label="Experience"
          title="Where I’ve shipped"
          body="Product, platform, and client work across live software, AI systems, and launch-ready web experiences."
        />

        <div className="experience-grid mt-10">
          {featuredEntries.map((entry, index) => (
            <ExperienceCard key={entry.company} entry={entry} index={index} />
          ))}
        </div>

        <div className="experience-support-grid mt-6">
          {supportingEntries.map((entry, index) => (
            <ExperienceCard
              key={entry.company}
              compact
              entry={entry}
              index={index + featuredEntries.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
