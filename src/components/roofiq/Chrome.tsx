import { useEffect, useState } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#problems", label: "Problems" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#results", label: "Results" },
  { href: "#areas", label: "Areas" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "surface-glass py-3" : "border-b border-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center border border-electric/60">
            <span className="absolute inset-0 bg-electric/15 transition-opacity duration-500 group-hover:opacity-0" />
            <span className="font-display text-sm text-electric">IQ</span>
          </span>
          <span className="font-display text-lg tracking-[0.18em]">ROOF&nbsp;IQ</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-electric transition-all duration-500 hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden border border-electric/60 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-electric transition-all duration-500 hover:bg-electric hover:text-primary-foreground sm:inline-block"
          >
            Book inspection
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-border lg:hidden"
          >
            <span
              className={`block h-px w-5 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 lg:hidden ${open ? "max-h-[70vh]" : "max-h-0"}`}
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-6 gap-y-4 px-6 py-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-ink py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-[13vw] leading-[0.8] text-navy-soft/40 lg:text-[9vw]">
              ROOF IQ
            </p>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Commercial roofing expertise. Most roof problems hide in the details.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="eyebrow">Contact</p>
              <a
                href="mailto:theroofiq@gmail.com"
                className="mt-3 block text-sm text-foreground/80 transition-colors hover:text-electric"
              >
                theroofiq@gmail.com
              </a>
              <a
                href="https://instagram.com/roof.iq.official"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm text-foreground/80 transition-colors hover:text-electric"
              >
                @roof.iq.official
              </a>
            </div>
            <div>
              <p className="eyebrow">Navigate</p>
              <div className="mt-3 flex flex-col gap-1">
                {["services", "process", "projects", "faq", "contact"].map((s) => (
                  <a
                    key={s}
                    href={`#${s}`}
                    className="text-sm capitalize text-muted-foreground transition-colors hover:text-electric"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="glow-line mt-12" />
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} Roof IQ — Commercial roofing consultancy
        </p>
      </div>
    </footer>
  );
}
