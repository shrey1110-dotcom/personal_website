"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
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
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const counterInView = useInView(counterRef, {
    amount: 0.01,
    once: true,
  });
  const shouldRun = active || counterInView;
  const [numericValue, setNumericValue] = useState(0);
  const [rangeValue, setRangeValue] = useState<RangeState>({ start: 0, end: 0 });

  useEffect(() => {
    if (!shouldRun || metric.animation.kind === "text") {
      return;
    }

    if (prefersReducedMotion) {
      return;
    }

    const duration =
      metric.animation.kind === "range"
        ? 3.15
        : metric.animation.kind === "decimal"
          ? 2.9
          : metric.animation.kind === "int" && metric.animation.end >= 1_000_000
            ? 3.35
            : metric.animation.kind === "int" && metric.animation.end >= 1_000
              ? 3.05
              : 2.7;

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
  }, [shouldRun, metric, prefersReducedMotion]);

  const renderValue = () => {
    if (shouldRun && prefersReducedMotion) {
      return metric.value;
    }

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
    <span ref={counterRef} className="retain-stat-value inline-block">
      {renderValue()}
    </span>
  );
}
