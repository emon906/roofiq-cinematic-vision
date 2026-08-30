import { useState } from "react";
import { VideoSlot } from "./VideoSlot";

/* ── REVIEWS — single oversized rotating quote ─────────────── */
const REVIEWS = [
  {
    q: "They found in one afternoon what two contractors missed over two years. The report paid for itself immediately.",
    n: "Facilities Director",
    c: "Regional distribution group",
  },
  {
    q: "The only roofing consultant who told us not to replace. We repaired for a fraction and the roof is still dry.",
    n: "Property Manager",
    c: "Retail portfolio, 11 sites",
  },
  {
    q: "Documentation was so thorough our insurer approved the claim without a second inspection.",
    n: "Operations Lead",
    c: "Light manufacturing",
  },
];

export function Reviews() {
  const [i, setI] = useState(0);
  const r = REVIEWS[i] ?? REVIEWS[0]!;


  return (
    <section id="reviews" className="relative overflow-hidden surface-navy py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="eyebrow reveal">Reviews</p>
        <blockquote className="reveal mt-10 max-w-5xl">
          <p
            key={i}
            className="font-display text-[8vw] uppercase leading-[1.02] text-foreground/90 sm:text-4xl lg:text-[3vw]"
          >
            “{r.q}”
          </p>
          <footer className="mt-10 flex flex-wrap items-center gap-6">
            <div className="glow-line w-20" />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-electric">{r.n}</p>
              <p className="mt-1 text-xs text-muted-foreground">{r.c}</p>
            </div>
          </footer>
        </blockquote>

        <div className="mt-14 flex items-center gap-4">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Review ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-px transition-all duration-500 ${
                idx === i ? "w-16 bg-electric" : "w-8 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
          <span className="ml-4 font-mono text-[10px] tracking-[0.24em] text-muted-foreground">
            0{i + 1} / 0{REVIEWS.length}
          </span>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ — two column editorial accordion ─────────────────── */
const FAQ = [
  [
    "How long does a commercial inspection take?",
    "Most roofs between 20,000 and 100,000 sq ft take three to six hours on site. The written report follows within 72 hours.",
  ],
  [
    "Do you also perform the repairs?",
    "Yes, for targeted membrane, flashing and detail work. For full replacements we scope, tender and oversee the work on your behalf.",
  ],
  [
    "Will an inspection void my warranty?",
    "No. All testing is non-destructive unless core sampling is approved in writing, and every core is restored to manufacturer spec.",
  ],
  [
    "Can you support an insurance claim?",
    "We produce dated, measured, photo-backed evidence packages built specifically for adjuster review.",
  ],
  [
    "What does an inspection cost?",
    "Pricing is based on square footage and system complexity. Most single-building assessments fall in a predictable flat-fee range quoted upfront.",
  ],
];

export function Faq() {
  return (
    <section id="faq" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow reveal">FAQ</p>
          <h2 className="reveal mt-5 text-[10vw] leading-[0.9] sm:text-5xl lg:text-[3.2vw]">
            Answers
            <br />
            before you
            <br />
            call
          </h2>
        </div>
        <div className="border-t border-border">
          {FAQ.map(([q, a]) => (
            <details key={q} className="reveal group border-b border-border py-7">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-8">
                <span className="max-w-2xl text-lg leading-snug transition-colors duration-300 group-hover:text-electric sm:text-xl">
                  {q}
                </span>
                <span className="mt-1 font-mono text-xs text-electric transition-transform duration-500 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SERVICE AREAS — dense typographic grid over glow ─────── */
const AREAS = [
  "Metro core",
  "North county",
  "South industrial belt",
  "East logistics corridor",
  "West suburbs",
  "Airport district",
  "Port & warehouse zone",
  "Regional — within 150 mi",
];

export function Areas() {
  return (
    <section
      id="areas"
      className="relative overflow-hidden border-y border-border bg-navy-deep py-28 lg:py-36"
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--electric) 1px, transparent 1px), linear-gradient(to bottom, var(--electric) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />
      <div className="pulse-glow absolute right-0 top-0 h-96 w-96 rounded-full bg-electric/15 blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow reveal">Service areas</p>
            <h2 className="reveal mt-5 text-[11vw] leading-[0.9] sm:text-6xl lg:text-[3.8vw]">
              Where we
              <br />
              work
            </h2>
          </div>
          <p className="reveal max-w-md text-sm leading-relaxed text-muted-foreground">
            Roof IQ services commercial, industrial and multi-site portfolios across the region.
            Outside the map? Larger portfolios travel — just ask.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a) => (
            <div
              key={a}
              className="reveal group flex items-center justify-between border-b border-border pb-4"
            >
              <span className="text-sm text-foreground/80 transition-colors duration-300 group-hover:text-electric">
                {a}
              </span>
              <span className="font-mono text-[10px] text-electric/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                ●
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT — split editorial form ───────────────────────── */
export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="eyebrow reveal">Contact</p>
          <h2 className="reveal mt-5 text-[12vw] leading-[0.88] sm:text-6xl lg:text-[4vw]">
            Let's look
            <br />
            at your roof
          </h2>
          <p className="reveal mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Send the building address and what you're seeing. You'll get a straight answer on whether
            an inspection is worth it — even if the answer is no.
          </p>

          <div className="reveal mt-12 space-y-6">
            <a href="mailto:theroofiq@gmail.com" className="group block border-t border-border pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Email
              </p>
              <p className="mt-2 font-display text-2xl transition-colors duration-300 group-hover:text-electric">
                theroofiq@gmail.com
              </p>
            </a>
            <a
              href="https://instagram.com/roof.iq.official"
              target="_blank"
              rel="noreferrer"
              className="group block border-t border-border pt-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Instagram
              </p>
              <p className="mt-2 font-display text-2xl transition-colors duration-300 group-hover:text-electric">
                @roof.iq.official
              </p>
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="reveal surface-glass p-8 lg:p-10"
        >
          <div className="space-y-6">
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "building", label: "Building address", type: "text" },
            ].map((f) => (
              <div key={f.id}>
                <label
                  htmlFor={f.id}
                  className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
                >
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required
                  className="mt-2 w-full border-b border-input bg-transparent pb-2 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-electric"
                  placeholder="—"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
              >
                What are you seeing?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full resize-none border-b border-input bg-transparent pb-2 text-sm text-foreground outline-none transition-colors duration-300 focus:border-electric"
                placeholder="Leaks, ponding, storm damage, budget planning…"
              />
            </div>
          </div>

          <button
            type="submit"
            className="group relative mt-10 w-full overflow-hidden bg-electric py-4 font-mono text-xs uppercase tracking-[0.24em] text-primary-foreground"
          >
            <span className="relative z-10">{sent ? "Received — we'll reply shortly" : "Send request"}</span>
            <span className="absolute inset-0 -translate-y-full bg-navy transition-transform duration-500 group-hover:translate-y-0" />
            <span className="absolute inset-0 z-10 flex items-center justify-center text-electric opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {sent ? "Thank you" : "Send it →"}
            </span>
          </button>
          <p className="mt-4 text-[11px] text-muted-foreground">
            Prefer email? Write directly to theroofiq@gmail.com.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ── FINAL CINEMATIC VIDEO CTA (#4) ───────────────────────── */
export function CinematicCta() {
  return (
    <section className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <VideoSlot
        asBackground
        label="Final cinematic CTA video"
        hint="Slow, dramatic closing shot — sunset or storm rooftop"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow reveal">Roof IQ</p>
        <h2 className="reveal mt-6 max-w-4xl text-[12vw] leading-[0.88] sm:text-7xl lg:text-[5vw]">
          Most roof problems
          <br />
          <span className="text-gradient-electric">hide in the details.</span>
        </h2>
        <p className="reveal mt-6 max-w-lg text-sm text-muted-foreground">
          Find yours before the next storm does.
        </p>
        <a
          href="#contact"
          className="reveal group relative mt-10 overflow-hidden border border-electric px-10 py-4 font-mono text-xs uppercase tracking-[0.24em] text-electric"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-primary-foreground">
            Book your inspection
          </span>
          <span className="absolute inset-0 -translate-y-full bg-electric transition-transform duration-500 group-hover:translate-y-0" />
        </a>
      </div>
    </section>
  );
}
