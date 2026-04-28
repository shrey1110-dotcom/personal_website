"use client";

import ExperienceCard from "@/components/home/ExperienceCard";
import SectionHeading from "@/components/home/SectionHeading";
import { experienceEntries } from "@/lib/portfolio-content";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell pt-8 md:pt-10">
      <div className="section-frame">
        <SectionHeading
          label="Experience"
          title="Work experience"
          body="Two roles that matter most for the page: enterprise voice AI work at Rezolve.ai and founder-led product engineering on RETAIN AI."
        />

        <div className="experience-grid mt-10">
          {experienceEntries.map((entry, index) => (
            <ExperienceCard key={entry.company} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
