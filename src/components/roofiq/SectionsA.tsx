import { useRef } from "react";
import { VideoSlot } from "./VideoSlot";
import { useParallax } from "@/hooks/use-reveal";
import detailSeam from "@/assets/detail-seam.jpg";
import inspector from "@/assets/inspector.jpg";
import rooftopUnits from "@/assets/rooftop-units.jpg";

/* ── Marquee statement strip ───────────────────────────────── */
export function Marquee() {
  const words = [
    "Forensic inspection",
    "Moisture mapping",
    "Leak diagnostics",
    "Roof asset planning",
    "Storm documentation",
    "Membrane repair",
  ];
  return (
    <div className="relative border-y border-border bg-navy-deep py-5">
      <div className="flex overflow-hidden">
        <div className="marquee-track flex shrink-0 gap-12 pr-12">
          {[...words, ...words].map((w, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-12 font-mono text-sm uppercase tracking-[0.28em] text-muted-foreground"
            >
              {w}
              <span className="h-1 w-1 rounded-full bg-electric" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── SERVICES — editorial numbered list, no cards ──────────── */
const SERVICES = [
  {
    n: "01",
    t: "Forensic Roof Inspection",
    d: "Layer-by-layer assessment with photo documentation, core sampling and infrared scanning of every field, seam and penetration.",
  },
  {
    n: "02",
    t: "Leak Diagnostics",
    d: "We trace water to its true entry point instead of chasing stains — flood testing, dye tracing and thermal confirmation.",
  },
  {
    n: "03",
    t: "Membrane & Flashing Repair",
    d: "Targeted repairs on TPO, EPDM, PVC, modified bitumen and built-up systems, executed to manufacturer detail specs.",
  },
  {
    n: "04",
    t: "Roof Asset Planning",
    d: "Multi-year capital forecasts with remaining-life estimates so facilities teams budget on data, not surprises.",
  },
  {
    n: "05",
    t: "Storm & Insurance Documentation",
    d: "Defensible reports, measurements and evidence packages that hold up in claims and adjuster negotiations.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow reveal">Services</p>
            <h2 className="reveal mt-5 text-[11vw] leading-[0.88] sm:text-6xl lg:text-[4.2vw]">
              What we
              <br />
              actually do
            </h2>
            <p className="reveal mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              No sales pitch, no guesswork. Every engagement starts with evidence and ends with a
              plan you can act on.
            </p>
          </div>

          <div className="divide-y divide-border border-t border-border">
            {SERVICES.map((s) => (
              <div
                key={s.n}
                className="reveal group relative grid grid-cols-[auto_1fr] gap-6 py-8 transition-colors duration-500 hover:bg-navy-deep/50 sm:gap-10 sm:py-10"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-electric/70">{s.n}</span>
                <div>
                  <h3 className="text-2xl transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                    {s.t}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {s.d}
                  </p>
                </div>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-electric transition-all duration-700 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── IMMERSIVE FULL-WIDTH VIDEO (#2) ──────────────────────── */
export function ImmersiveVideo() {
  return (
    <section className="relative h-[85vh] min-h-[520px] w-full overflow-hidden">
      <VideoSlot
        asBackground
        label="Immersive full-width video"
        hint="Cinematic wide footage — drone pass or slow rooftop dolly"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h2 className="reveal max-w-5xl px-6 text-center text-[10vw] leading-[0.9] text-foreground/90 lg:text-[6vw]">
          We read roofs
          <br />
          <span className="text-electric">like evidence.</span>
        </h2>
      </div>
    </section>
  );
}

/* ── ABOUT — image/text composition, offset ───────────────── */
export function About() {
  const wrap = useRef<HTMLDivElement>(null);
  useParallax(wrap, 0.14);

  return (
    <section id="about" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div className="reveal relative">
          <div className="relative aspect-[3/4] overflow-hidden border border-border">
            <div ref={wrap} className="absolute inset-0 will-change-transform">
              <img
                src={inspector}
                alt="Roofing inspector documenting a commercial roof at dusk"
                loading="lazy"
                width={1200}
                height={1504}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden border border-electric/40 bg-ink px-6 py-5 sm:block">
            <p className="font-display text-4xl text-electric">18</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              years in the field
            </p>
          </div>
        </div>

        <div className="lg:pl-10">
          <p className="eyebrow reveal">About Roof IQ</p>
          <h2 className="reveal mt-5 text-[10vw] leading-[0.9] sm:text-5xl lg:text-[3.6vw]">
            Built by someone
            <br />
            who still climbs
            <br />
            the ladder
          </h2>
          <div className="reveal mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              Roof IQ exists because commercial roofs are usually judged from the parking lot. We
              walk them. Every square, every drain, every termination bar — inspected in person and
              recorded.
            </p>
            <p>
              The result is a report that tells you what is actually happening on your building, how
              urgent it is, and what it costs to solve now versus later.
            </p>
          </div>
          <div className="reveal mt-10 grid grid-cols-2 gap-y-6 border-t border-border pt-8">
            {[
              ["Independent", "No manufacturer quotas"],
              ["Documented", "Photo & thermal evidence"],
              ["Direct", "You talk to the inspector"],
              ["Practical", "Repair before replace"],
            ].map(([t, d]) => (
              <div key={t}>
                <p className="font-display text-lg">{t}</p>
                <p className="mt-1 text-xs text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FIELD EXPERTISE — oversized typography over imagery ──── */
const SYSTEMS = ["TPO", "EPDM", "PVC", "MOD BIT", "BUR", "METAL", "COATINGS", "SPF"];

export function Expertise() {
  const bg = useRef<HTMLDivElement>(null);
  useParallax(bg, 0.2);

  return (
    <section id="expertise" className="relative overflow-hidden diagonal-both bg-navy-deep py-32 lg:py-44">
      <div ref={bg} className="absolute inset-0 will-change-transform">
        <img
          src={rooftopUnits}
          alt="Rooftop mechanical units under a storm sky"
          loading="lazy"
          width={1600}
          height={912}
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-navy-deep/80 to-ink" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="eyebrow reveal">Field expertise</p>
        <h2 className="reveal mt-6 max-w-4xl text-[12vw] leading-[0.86] sm:text-7xl lg:text-[5vw]">
          Systems we know
          <br />
          <span className="text-gradient-electric">down to the seam</span>
        </h2>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-6">
          {SYSTEMS.map((s) => (
            <span
              key={s}
              className="reveal font-display text-[9vw] leading-none text-navy-soft/70 transition-colors duration-500 hover:text-electric sm:text-5xl lg:text-6xl"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="reveal mt-20 grid gap-10 border-t border-border pt-10 sm:grid-cols-3">
          {[
            [
              "Infrared moisture scanning",
              "Locating saturated insulation without cutting the roof open.",
            ],
            ["Detail engineering", "Curbs, drains, pitch pans and parapets built to spec."],
            ["Warranty literacy", "We know what voids a warranty before you sign anything."],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="glow-line mb-5 w-16" />
              <h3 className="text-xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ROOF PROBLEMS — split hover list + macro image ───────── */
const PROBLEMS = [
  ["Ponding water", "Standing water past 48 hours doubles membrane fatigue and hides deck rot."],
  ["Open seams", "A 6-inch seam split can wet 400 sq ft of insulation in a single storm."],
  ["Failed flashings", "Most leaks start where the roof stops — walls, curbs and penetrations."],
  ["Clogged drains", "Blocked drainage turns a designed load into a structural risk."],
  ["Storm impact", "Hail bruising and wind uplift often show no visible leak for months."],
  ["Bad prior repairs", "Mastic smears and mismatched patches trap moisture underneath."],
];

export function Problems() {
  return (
    <section id="problems" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-10">
        <div>
          <p className="eyebrow reveal">Roof problems</p>
          <h2 className="reveal mt-5 text-[11vw] leading-[0.9] sm:text-6xl lg:text-[3.8vw]">
            The six failures
            <br />
            we find most
          </h2>
          <div className="mt-12 border-t border-border">
            {PROBLEMS.map(([t, d], i) => (
              <details
                key={t}
                className="reveal group border-b border-border py-6"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-display text-xl uppercase transition-colors duration-300 group-hover:text-electric sm:text-2xl">
                    {t}
                  </span>
                  <span className="font-mono text-xs text-electric transition-transform duration-500 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">{d}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="reveal relative">
          <div className="sticky top-32 overflow-hidden border border-border">
            <img
              src={detailSeam}
              alt="Macro detail of a commercial roof seam and flashing"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-6 pt-20">
              <p className="eyebrow">Detail matters</p>
              <p className="mt-2 max-w-sm text-sm text-foreground/80">
                This is where 80% of commercial roof failures begin — and where a walk-by inspection
                sees nothing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
