"use client";

import { ambientRails } from "@/lib/portfolio-content";

function RailTrack({
  items,
  reverse = false,
}: {
  items: readonly string[];
  reverse?: boolean;
}) {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden rounded-full border border-white/8 bg-white/[0.025]">
      <div className="rail-mask pointer-events-none absolute inset-y-0 left-0 w-24" />
      <div className="rail-mask rail-mask-right pointer-events-none absolute inset-y-0 right-0 w-24" />
      <div className={`rail-track ${reverse ? "rail-track-reverse" : ""}`}>
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rail-item"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

type InfoRailsProps = {
  className?: string;
};

export default function InfoRails({ className = "" }: InfoRailsProps) {
  const editorialRail = [...ambientRails[0], ...ambientRails[1]];

  return (
    <div aria-hidden="true" className={className}>
      <div className="info-rails">
        <RailTrack items={editorialRail} />
      </div>
    </div>
  );
}
