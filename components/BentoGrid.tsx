"use client";

import AboutCard from "@/components/cards/AboutCard";
import CervicalCNNCard from "@/components/cards/CervicalCNNCard";
import ContactCard from "@/components/cards/ContactCard";
import FlashloanCard from "@/components/cards/FlashloanCard";
import MotionAnalysisCard from "@/components/cards/MotionAnalysisCard";
import RetainAICard from "@/components/cards/RetainAICard";
import SkillsCard from "@/components/cards/SkillsCard";

export default function BentoGrid() {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="grid grid-cols-12 gap-2 px-[22px] pb-[22px]">
        <RetainAICard />
        <AboutCard />
        <MotionAnalysisCard />
        <CervicalCNNCard />
        <SkillsCard />
        <ContactCard />
        <FlashloanCard />
      </div>
    </section>
  );
}
