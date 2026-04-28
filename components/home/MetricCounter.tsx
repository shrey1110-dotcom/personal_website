"use client";

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";
import type { RetainProductEntry } from "@/lib/portfolio-content";

type MetricCounterProps = {
  active: boolean;
  metric: RetainProductEntry["stats"][number];
};

type RangeState = {
  end: number;
  start: number;
};

const numberFormatter = new Intl.NumberFormat("en-US");
const compactFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 1,
  notation: "compact",
});

export default function MetricCounter({ active, metric }: MetricCounterProps) {
  const prefersReducedMotion = useReducedMotion();
  const [numericValue, setNumericValue] = useState(0);
  const [rangeValue, setRangeValue] = useState<RangeState>({ start: 0, end: 0 });

  useEffect(() => {
    if (!active || metric.animation.kind === "text") {
      return;
    }

    if (prefersReducedMotion) {
      switch (metric.animation.kind) {
        case "int":
        case "decimal":
          setNumericValue(metric.animation.end);
          return;
        case "range":
          setRangeValue({
            start: metric.animation.start,
            end: metric.animation.end,
          });
          return;
      }
    }

    const duration =
      metric.animation.kind === "range"
        ? 2.7
        : metric.animation.kind === "decimal"
          ? 2.4
          : metric.animation.kind === "int" && metric.animation.end >= 1_000_000
            ? 2.9
            : metric.animation.kind === "int" && metric.animation.end >= 1_000
              ? 2.7
              : 2.35;

    if (metric.animation.kind === "range") {
      const rangeAnimation = metric.animation;
      const controls = animate(0, 1, {
        duration,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => {
          setRangeValue({
            start: rangeAnimation.start * latest,
            end: rangeAnimation.end * latest,
          });
        },
      });

      return () => {
        controls.stop();
      };
    }

    const controls = animate(0, metric.animation.end, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setNumericValue(latest);
      },
    });

    return () => {
      controls.stop();
    };
  }, [active, metric, prefersReducedMotion]);

  const renderValue = () => {
    switch (metric.animation.kind) {
      case "int":
        return `${metric.animation.compact
          ? compactFormatter.format(numericValue)
          : numberFormatter.format(Math.round(numericValue))}${metric.animation.suffix ?? ""}`;
      case "decimal":
        return `${numericValue.toFixed(metric.animation.decimals)}${metric.animation.suffix ?? ""}`;
      case "range":
        return `${Math.round(rangeValue.start)}–${Math.round(rangeValue.end)}${metric.animation.suffix ?? ""}`;
      case "text":
        return metric.value;
      default:
        return metric.value;
    }
  };

  return (
    <span className="retain-stat-value inline-block">
      {renderValue()}
    </span>
  );
}
