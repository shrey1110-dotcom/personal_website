"use client";

type LiveDemoWindowProps = {
  accentClassName?: string;
  chromeLabel: string;
  className?: string;
  src: string;
  title: string;
  urlLabel: string;
};

export default function LiveDemoWindow({
  accentClassName = "",
  chromeLabel,
  className = "",
  src,
  title,
  urlLabel,
}: LiveDemoWindowProps) {
  return (
    <div className={`live-demo-shell ${accentClassName} ${className}`.trim()}>
      <div className="live-demo-frame">
        <div className="live-demo-header">
          <div className="flex items-center gap-2.5">
            <span className="live-demo-dot bg-rose-300/85" />
            <span className="live-demo-dot bg-amber-200/85" />
            <span className="live-demo-dot bg-teal-300/85" />
            <span className="mono-label ml-2">{chromeLabel}</span>
          </div>
          <span className="live-demo-badge">
            <span className="live-demo-badge-dot" />
            Live
          </span>
        </div>

        <div className="live-demo-url-bar">
          <span className="truncate">{urlLabel}</span>
        </div>

        <div className="live-demo-viewport">
          <iframe
            src={src}
            title={title}
            loading="eager"
            className="live-demo-iframe"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="live-demo-overlay" />
        </div>
      </div>
    </div>
  );
}
