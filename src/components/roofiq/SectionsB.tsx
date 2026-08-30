import { VideoSlot } from "./VideoSlot";
import heroRoof from "@/assets/hero-roof.jpg";
import rooftopUnits from "@/assets/rooftop-units.jpg";
import detailSeam from "@/assets/detail-seam.jpg";

/* ── INSPECTION PROCESS — horizontal timeline ─────────────── */
const STEPS = [
  ["Walk & scan", "Full-surface walk, drone capture and infrared sweep of the entire deck."],
  ["Test & verify", "Core samples, flood tests and dye tracing confirm every suspicion."],
  ["Report", "Annotated photo report with severity ranking and remaining-life estimate."],
  ["Plan & execute", "Prioritised repair scope, budget tiers and execution oversight."],
];

export function Process() {
  return (
    <section id="process" className="relative surface-navy py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow reveal">Inspection process</p>
            <h2 className="reveal mt-5 text-[11vw] leading-[0.9] sm:text-6xl lg:text-[3.8vw]">
              Four steps.
              <br />
              Zero guessing.
            </h2>
          </div>
          <p className="reveal max-w-sm text-sm leading-relaxed text-muted-foreground">
            Typical turnaround from site visit to delivered report: 72 hours.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {STEPS.map(([t, d], i) => (
              <div key={t} className="reveal group relative">
                <div className="relative mb-8 flex h-12 w-12 items-center justify-center border border-electric/50 bg-ink transition-all duration-500 group-hover:bg-electric">
                  <span className="font-mono text-xs text-electric transition-colors duration-500 group-hover:text-primary-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SPLIT VIDEO SECTION (#3) ─────────────────────────────── */
export function SplitVideo() {
  return (
    <section className="relative bg-ink">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[80vh]">
          <VideoSlot
            asBackground
            label="Split video — inspection walkthrough"
            hint="Vertical or 4:5 crop works well here"
          />
        </div>
        <div className="flex items-center bg-navy-deep px-6 py-20 lg:px-16">
          <div>
            <p className="eyebrow reveal">Inside an inspection</p>
            <h2 className="reveal mt-5 text-[10vw] leading-[0.9] sm:text-5xl lg:text-[3.2vw]">
              You see what
              <br />
              we see
            </h2>
            <p className="reveal mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Every inspection is filmed and narrated. You get the raw footage alongside the report,
              so nothing about the condition of your roof depends on trust alone.
            </p>
            <ul className="reveal mt-10 space-y-4">
              {[
                "Narrated video walkthrough",
                "Thermal overlay imagery",
                "Drainage & slope mapping",
                "Severity-ranked findings",
              ].map((li) => (
                <li key={li} className="flex items-center gap-4 border-b border-border pb-4">
                  <span className="h-1.5 w-1.5 shrink-0 bg-electric" />
                  <span className="text-sm text-foreground/80">{li}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PROJECTS — asymmetric editorial gallery ──────────────── */
const PROJECTS = [
  {
    img: heroRoof,
    w: 1600,
    h: 1200,
    tag: "Distribution centre",
    title: "92,000 sq ft TPO recovery",
    meta: "Moisture survey → phased overlay",
    span: "lg:col-span-7 lg:row-span-2",
    ratio: "aspect-[4/3]",
  },
  {
    img: detailSeam,
    w: 1408,
    h: 1008,
    tag: "Retail plaza",
    title: "Chronic leak resolved in one visit",
    meta: "Dye tracing → flashing rebuild",
    span: "lg:col-span-5",
    ratio: "aspect-[4/3]",
  },
  {
    img: rooftopUnits,
    w: 1600,
    h: 912,
    tag: "Manufacturing",
    title: "Storm claim documentation",
    meta: "Evidence package → full approval",
    span: "lg:col-span-5",
    ratio: "aspect-[16/10]",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow reveal">Projects</p>
            <h2 className="reveal mt-5 text-[11vw] leading-[0.9] sm:text-6xl lg:text-[3.8vw]">
              Selected work
            </h2>
          </div>
          <a
            href="#contact"
            className="reveal font-mono text-xs uppercase tracking-[0.24em] text-electric"
          >
            Discuss your building →
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {PROJECTS.map((p) => (
            <article key={p.title} className={`reveal group relative overflow-hidden ${p.span}`}>
              <div className={`relative w-full overflow-hidden ${p.ratio}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={p.w}
                  height={p.h}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="eyebrow">{p.tag}</p>
                  <h3 className="mt-2 text-2xl">{p.title}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm text-muted-foreground opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {p.meta}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FIELD INSIGHTS — editorial index list ────────────────── */
const INSIGHTS = [
  ["Why your roof leaks in the same spot every spring", "Diagnostics", "07 min"],
  ["Repair or replace: the 40% rule facilities teams use", "Asset planning", "05 min"],
  ["What hail damage looks like before it leaks", "Storm response", "06 min"],
  ["Reading a warranty before you sign it", "Warranty", "04 min"],
];

export function Insights() {
  return (
    <section id="insights" className="relative overflow-hidden bg-navy-deep py-28 lg:py-36">
      <div className="pulse-glow absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-electric/10 blur-[120px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <p className="eyebrow reveal">Field insights</p>
            <h2 className="reveal mt-5 text-[10vw] leading-[0.9] sm:text-5xl lg:text-[3.2vw]">
              Notes from
              <br />
              the deck
            </h2>
          </div>
          <div className="border-t border-border">
            {INSIGHTS.map(([t, cat, read], i) => (
              <a
                key={t}
                href="#contact"
                className="reveal group flex flex-col gap-3 border-b border-border py-8 transition-colors duration-500 hover:bg-ink/40 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-xs text-electric/60">0{i + 1}</span>
                  <h3 className="max-w-xl text-xl leading-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-2xl">
                    {t}
                  </h3>
                </div>
                <div className="flex shrink-0 items-center gap-6 pl-12 sm:pl-0">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {cat}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {read}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── RESULTS / STATS — oversized numeric band ─────────────── */
const STATS = [
  ["2.4M", "sq ft inspected"],
  ["390+", "roofs diagnosed"],
  ["72h", "report turnaround"],
  ["$4.1M", "client repairs avoided"],
];

export function Results() {
  return (
    <section id="results" className="relative overflow-hidden diagonal-top bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Results</p>
          <h2 className="mt-5 text-[11vw] leading-[0.9] sm:text-6xl lg:text-[3.8vw]">
            Numbers that came
            <br />
            <span className="text-gradient-electric">off real roofs</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(([n, l]) => (
            <div key={l} className="reveal group relative pl-6">
              <span className="absolute left-0 top-2 h-[70%] w-px bg-border transition-colors duration-500 group-hover:bg-electric" />
              <p className="font-display text-[13vw] leading-[0.85] text-foreground/90 transition-colors duration-500 group-hover:text-electric sm:text-6xl lg:text-[4vw]">
                {n}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
