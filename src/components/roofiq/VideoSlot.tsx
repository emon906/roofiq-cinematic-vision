import { useRef } from "react";

type VideoSlotProps = {
  /** Put your file in /public/videos and set e.g. src="/videos/hero.mp4" */
  src?: string;
  poster?: string;
  label: string;
  hint?: string;
  className?: string;
  /** Cover the whole parent as a background layer. */
  asBackground?: boolean;
};

/**
 * EMPTY VIDEO AREA — ready for the client's footage.
 * Drop an mp4/webm into `public/videos/` and pass `src`.
 * Until then it renders a cinematic placeholder frame.
 */
export function VideoSlot({
  src,
  poster,
  label,
  hint,
  className = "",
  asBackground = false,
}: VideoSlotProps) {
  const ref = useRef<HTMLVideoElement>(null);

  if (src) {
    return (
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className={
          asBackground
            ? `absolute inset-0 h-full w-full object-cover ${className}`
            : `h-full w-full object-cover ${className}`
        }
      />
    );
  }

  return (
    <div
      data-video-slot={label}
      className={`group relative flex items-center justify-center overflow-hidden bg-ink ${
        asBackground ? "absolute inset-0 h-full w-full" : "h-full w-full"
      } ${className}`}
    >
      <div className="absolute inset-0 surface-navy opacity-90" />
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--electric) 1px, transparent 1px), linear-gradient(to bottom, var(--electric) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="scan-line absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-electric/15 to-transparent" />

      <div
        className={
          asBackground
            ? "absolute bottom-10 left-6 z-10 text-left sm:left-10"
            : "relative z-10 px-6 text-center"
        }
      >
        <div
          className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-electric/50 transition-transform duration-500 group-hover:scale-110 ${asBackground ? "" : "mx-auto"}`}
        >
          <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-electric" />
        </div>
        <p className="eyebrow">Video area</p>
        <p className="mt-2 font-display text-xl tracking-wide text-foreground/80">{label}</p>
        {hint ? <p className="mt-2 text-xs text-muted-foreground">{hint}</p> : null}
      </div>

      <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t border-electric/60" />
      <span className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r border-t border-electric/60" />
      <span className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b border-l border-electric/60" />
      <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-electric/60" />
    </div>
  );
}
