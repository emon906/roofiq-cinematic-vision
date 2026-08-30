import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Nav, Footer } from "@/components/roofiq/Chrome";
import { Hero } from "@/components/roofiq/Hero";
import {
  Marquee,
  Services,
  ImmersiveVideo,
  About,
  Expertise,
  Problems,
} from "@/components/roofiq/SectionsA";
import {
  Process,
  SplitVideo,
  Projects,
  Insights,
  Results,
} from "@/components/roofiq/SectionsB";
import { Reviews, Faq, Areas, Contact, CinematicCta } from "@/components/roofiq/SectionsC";

const TITLE = "Roof IQ — Commercial Roofing Inspection & Diagnostics";
const DESC =
  "Most roof problems hide in the details. Roof IQ delivers forensic commercial roof inspections, leak diagnostics and asset planning with documented evidence.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="grain min-h-screen bg-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <ImmersiveVideo />
        <About />
        <Expertise />
        <Problems />
        <Process />
        <SplitVideo />
        <Projects />
        <Insights />
        <Results />
        <Reviews />
        <Faq />
        <Areas />
        <Contact />
        <CinematicCta />
      </main>
      <Footer />
    </div>
  );
}
