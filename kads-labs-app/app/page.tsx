import Timeline, { type JourneyItem } from "@/components/ui/timeline";
import {
  TestimonialCarousel,
  type Testimonial,
} from "@/components/ui/profile-card-testimonial-carousel";

/* ------------------------------------------------------------------ */
/* KADS LABS — content                                                 */
/* ------------------------------------------------------------------ */

/** "How we work": seven steps on the pinned, sliding timeline. */
const howWeWorkTop: JourneyItem[] = [
  {
    id: "step-01-discover",
    year: "01",
    month: "January",
    title: "01 · Discover",
    content:
      "Every project starts with questions, not screens — your goals, audience and constraints shape everything that follows.",
  },
  {
    id: "step-03-design",
    year: "03",
    month: "May",
    title: "03 · Design",
    content:
      "Direction, layout and motion are explored in the open — you review real options, not just a final reveal.",
  },
  {
    id: "step-05-test",
    year: "05",
    month: "September",
    title: "05 · Test",
    content:
      "Real devices, real people, honest feedback. We break it before your users ever get the chance to.",
  },
  {
    id: "step-07-evolve",
    year: "07",
    month: "December",
    title: "07 · Evolve",
    content:
      "Launch is a checkpoint, not the finish line — the work keeps getting sharper with every iteration.",
  },
];

const howWeWorkBottom: JourneyItem[] = [
  {
    id: "step-02-define",
    year: "02",
    month: "March",
    title: "02 · Define",
    content:
      "Findings become a sharp brief: scope, structure and success criteria that design and code can be built against.",
  },
  {
    id: "step-04-build",
    year: "04",
    month: "July",
    title: "04 · Build",
    content:
      "Design and engineering grow together — real components, real content, tested as they are assembled.",
  },
  {
    id: "step-06-launch",
    year: "06",
    month: "October",
    title: "06 · Launch",
    content:
      "We ship, measure and stay close — fast, accessible and findable on every device from day one.",
  },
];

/** "The owners": the people behind KADS LABS. */
const owners: Testimonial[] = [
  {
    name: "Ayush Jaiswal",
    title: "Founder, KADS LABS",
    description:
      "Ayush started KADS LABS to build digital products that are engineered as carefully as they are designed. He leads direction and delivery on everything that leaves the studio.",
    imageUrl: "/team/ayush-jaiswal.png",
  },
  {
    name: "Shivam Gupta",
    title: "Co-founder, KADS LABS",
    description:
      "Shivam heads engineering — turning ambitious design into fast, stable builds and sweating the details most people never notice, but always feel.",
    imageUrl: "/team/shivamgupta.png",
  },
  {
    name: "Sudhir",
    title: "Co-founder, KADS LABS",
    description:
      "Sudhir keeps the studio honest — strategy, timelines and quality control — making sure what we promise is exactly what we ship.",
    imageUrl: "/team/sudhir.png",
  },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/kads-labs-logo.jpg"
              alt="KADS LABS logo"
              className="h-9 w-9 rounded-full object-cover ring-1 ring-white/20"
            />
            <span className="text-sm font-semibold tracking-[0.22em]">
              KADS LABS
            </span>
          </a>
          <nav className="flex items-center gap-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <a href="#journey" className="transition-colors hover:text-foreground">
              How we work
            </a>
            <a href="#team" className="transition-colors hover:text-foreground">
              The owners
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — lead-in so the pinned timeline has somewhere to scroll in from. */}
      <section
        id="top"
        className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 pt-24 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Design &amp; build studio
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/kads-labs-logo.jpg"
          alt="KADS LABS"
          className="h-28 w-28 rounded-3xl object-cover shadow-2xl ring-1 ring-white/15 sm:h-36 sm:w-36"
        />
        <h1 className="max-w-[16ch] text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
          KADS LABS
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          We design and build websites, products and digital experiences for
          businesses that want to be different. Keep scrolling — the next
          section pins, the track slides sideways, and each step of how we
          work draws itself as it reaches centre.
        </p>
        <span className="mt-2 animate-bounce text-muted-foreground">&darr;</span>
      </section>

      {/* How we work — pinned horizontal GSAP timeline. */}
      <Timeline
        title="How We Work"
        periodLabel="Discover → Evolve"
        backgroundColor="var(--color-background, #0a0a0a)"
        textColor="var(--color-foreground, #ffffff)"
        mutedTextColor="var(--color-muted-foreground, #a1a1aa)"
        activeColor="#ff5f00"
        imageUrl="/brand/kads-labs-logo.jpg"
        imageAlt="KADS LABS"
        duration={1.4}
        topItems={howWeWorkTop}
        bottomItems={howWeWorkBottom}
      />

      {/* The owners — profile-card carousel. */}
      <section
        id="team"
        className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-24"
      >
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Who&apos;s behind it
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            The owners
          </h2>
        </div>
        <TestimonialCarousel testimonials={owners} />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12 text-center">
        <p className="text-sm font-semibold tracking-[0.22em]">KADS LABS</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Built different. Built for you.
        </p>
        <p className="mt-6 text-xs text-muted-foreground">
          © 2026 KADS LABS. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
