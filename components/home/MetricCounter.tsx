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

function finalRangeValue(metric: RetainProductEntry["stats"][number]): RangeState {
  if (metric.animation.kind === "range") {
    return {
      start: metric.animation.start,
      end: metric.animation.end,
    };
  }

  return { start: 0, end: 0 };
}

function finalNumericValue(metric: RetainProductEntry["stats"][number]) {
  if (metric.animation.kind === "int" || metric.animation.kind === "decimal") {
    return metric.animation.end;
  }

  return 0;
}

export default function MetricCounter({ active, metric }: MetricCounterProps) {
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const counterInView = useInView(counterRef, {
    amount: 0.01,
    once: true,
  });
  const shouldRun = active || counterInView;
  const [numericValue, setNumericValue] = useState(() => finalNumericValue(metric));
  const [rangeValue, setRangeValue] = useState<RangeState>(() => finalRangeValue(metric));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!shouldRun || hasAnimated || metric.animation.kind === "text") {
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
        duration: duration * 0.82,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => {
          const progress = 0.72 + latest * 0.28;

          setRangeValue({
            start: rangeAnimation.start * progress,
            end: rangeAnimation.end * progress,
          });
        },
        onComplete: () => setHasAnimated(true),
      });

      return () => {
        controls.stop();
      };
    }

    const startingValue = metric.animation.end * 0.72;

    const controls = animate(startingValue, metric.animation.end, {
      duration: duration * 0.82,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setNumericValue(latest);
      },
      onComplete: () => setHasAnimated(true),
    });

    return () => {
      controls.stop();
    };
  }, [shouldRun, hasAnimated, metric, prefersReducedMotion]);

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
    <span
      ref={counterRef}
      className="retain-stat-value inline-block"
      aria-label={`${metric.value} ${metric.label}`}
    >
      {renderValue()}
    </span>
  );
}
