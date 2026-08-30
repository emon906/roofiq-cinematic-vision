import { useRef } from "react";
import { VideoSlot } from "./VideoSlot";
import { useParallax } from "@/hooks/use-reveal";
import heroRoof from "@/assets/hero-roof.jpg";

export function Hero() {
  const imgWrap = useRef<HTMLDivElement>(null);
  useParallax(imgWrap, 0.12);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ink">
      {/* EMPTY VIDEO AREA #1 — hero background */}
      <div className="absolute inset-0">
        <VideoSlot
          asBackground
          label="Hero background loop"
          hint="Recommended: 16:9, muted, 10–20s aerial rooftop footage"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <p className="eyebrow reveal">Commercial roofing expert</p>
          <h1 className="reveal mt-6 text-[13vw] leading-[0.86] sm:text-[9vw] lg:text-[6.4vw]">
            Most roof
            <br />
            problems hide
            <br />
            <span className="text-gradient-electric">in the details.</span>
          </h1>
          <p className="reveal mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Roof IQ inspects, diagnoses and documents commercial roof systems with forensic
            precision — before small failures turn into six-figure damage.
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative overflow-hidden bg-electric px-8 py-4 font-mono text-xs uppercase tracking-[0.24em] text-primary-foreground"
            >
              <span className="relative z-10">Request an inspection</span>
              <span className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover:translate-x-0" />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-electric opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Let's talk →
              </span>
            </a>
            <a
              href="#process"
              className="border-b border-border pb-1 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors duration-300 hover:border-electric hover:text-electric"
            >
              See the process
            </a>
          </div>

          <div className="reveal mt-14 flex flex-wrap gap-10">
            {[
              ["18+", "Years on roofs"],
              ["2.4M", "Sq ft assessed"],
              ["100%", "Documented findings"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl text-electric">{n}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <div ref={imgWrap} className="absolute inset-0 will-change-transform">
              <img
                src={heroRoof}
                alt="Commercial flat roof at night lit by blue light"
                width={1600}
                height={1200}
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 surface-glass p-5">
              <p className="eyebrow">Field note 001</p>
              <p className="mt-2 text-sm text-foreground/80">
                Ponding at a single low seam accounted for 70% of the moisture found on a 90,000 sq
                ft warehouse deck.
              </p>
            </div>
          </div>
          <div className="pulse-glow absolute -right-10 -top-10 h-48 w-48 rounded-full bg-electric/25 blur-3xl" />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        Scroll
      </div>
    </section>
  );
}
