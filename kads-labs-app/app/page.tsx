import Image from "next/image";
import Timeline, { type JourneyItem } from "@/components/ui/timeline";
import {
  TestimonialCarousel,
  type Testimonial,
} from "@/components/ui/profile-card-testimonial-carousel";
import { site } from "@/lib/site-content";
import { workProjects, type WorkProject } from "@/lib/work-data";

/* ------------------------------------------------------------------ */
/* KADS LABS — data                                                    */
/* ------------------------------------------------------------------ */

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

/** "How we work": the template's 9 Our Approach steps on the pinned timeline. */
const APPROACH_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
] as const;

const approachItems: JourneyItem[] = site.approach.steps.map((step, i) => ({
  id: `step-${step.n}-${step.name.toLowerCase().replace(/[^a-z]+/g, "-")}`,
  year: step.n,
  month: APPROACH_MONTHS[i],
  title: `${step.n} · ${step.name}`,
  content: step.content,
}));
const approachTop = approachItems.filter((_, i) => i % 2 === 0);
const approachBottom = approachItems.filter((_, i) => i % 2 === 1);

const clientWork = workProjects.filter((p) => p.group === "client");
const conceptWork = workProjects.filter((p) => p.group === "concept");

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function SectionHead({ label }: { label: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff5f00]">
      {label}
    </p>
  );
}

function WorkCard({ project }: { project: WorkProject }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-card transition-colors hover:border-white/25">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} — website screen`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span
            className={
              project.group === "client"
                ? "rounded-full border border-[#ff5f00]/40 px-2.5 py-0.5 text-[11px] font-medium text-[#ff5f00]"
                : "rounded-full border border-white/15 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
            }
          >
            {project.label}
          </span>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.industry}</p>
        <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground/70">
          {project.services}
        </p>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
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
          <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground md:flex">
            <a href="#create" className="transition-colors hover:text-foreground">
              What we create
            </a>
            <a href="#journey" className="transition-colors hover:text-foreground">
              How we work
            </a>
            <a href="#work" className="transition-colors hover:text-foreground">
              The work
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
            <a href="#team" className="transition-colors hover:text-foreground">
              The owners
            </a>
          </nav>
          <a
            href="#cta"
            className="rounded-full bg-[#ff5f00] px-4 py-2 text-xs font-semibold text-[#0a0a0a] transition hover:brightness-110"
          >
            {site.hero.ctaPrimary}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 pt-28 pb-16 text-center"
      >
        <SectionHead label={site.hero.kicker} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/kads-labs-logo.jpg"
          alt="KADS LABS"
          className="h-24 w-24 rounded-3xl object-cover shadow-2xl ring-1 ring-white/15 sm:h-28 sm:w-28"
        />
        <h1 className="max-w-[18ch] text-4xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
          {site.hero.title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {site.hero.lead}
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground/80">
          {site.hero.body}
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#cta"
            className="rounded-full bg-[#ff5f00] px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition hover:brightness-110"
          >
            {site.hero.ctaPrimary}
          </a>
          <a
            href="#work"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white/5"
          >
            {site.hero.ctaSecondary}
          </a>
        </div>
        <span className="mt-4 animate-bounce text-muted-foreground">&darr;</span>
      </section>

      {/* The Idea */}
      <section id="idea" className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHead label={site.idea.label} />
            <h2 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {site.idea.title[0]}
              <br />
              <span className="text-muted-foreground">{site.idea.title[1]}</span>
            </h2>
          </div>
          <div>
            <ul className="space-y-3">
              {site.idea.lines.map((line, i) => (
                <li
                  key={i}
                  className={
                    i === site.idea.lines.length - 1
                      ? "text-xl font-medium sm:text-2xl"
                      : "text-lg text-muted-foreground line-through decoration-white/25 sm:text-xl"
                  }
                >
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {site.idea.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.idea.disciplines.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Create */}
      <section id="create" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead label={site.services.label} />
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {site.services.title}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {site.services.intro.join(" ")}
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {site.services.items.map((service) => (
              <article
                key={service.n}
                className="rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/25 sm:p-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {service.name}
                  </h3>
                  <span className="font-mono text-sm text-[#ff5f00]">
                    {service.n}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium">{service.title}</p>
                {service.body && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-white/10 p-6 text-center sm:p-8">
            <p className="text-lg font-semibold">{site.services.ctaTitle}</p>
            {site.services.ctaLines.map((line) => (
              <p key={line} className="mt-1 text-sm text-muted-foreground">
                {line}
              </p>
            ))}
            <a
              href="#cta"
              className="mt-5 inline-block rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium transition hover:bg-white/5"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </section>

      {/* How we work — lead-in, then the pinned horizontal GSAP timeline. */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 pt-24 text-center">
          <SectionHead label={site.approach.label} />
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {site.approach.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Great work doesn&apos;t happen in one step. Keep scrolling — the next
            section pins and each step draws itself as it reaches centre.
          </p>
        </div>
      </section>
      <Timeline
        title={site.approach.label}
        periodLabel={site.approach.periodLabel}
        backgroundColor="var(--color-background, #0a0a0a)"
        textColor="var(--color-foreground, #ffffff)"
        mutedTextColor="var(--color-muted-foreground, #a1a1aa)"
        activeColor="#ff5f00"
        imageUrl="/brand/kads-labs-logo.jpg"
        imageAlt="KADS LABS"
        duration={1.4}
        topItems={approachTop}
        bottomItems={approachBottom}
      />

      {/* The Work */}
      <section id="work" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead label={site.work.label} />
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {site.work.title[0]}
            <br />
            <span className="text-muted-foreground">{site.work.title[1]}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {site.work.intro}
          </p>

          <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {site.work.clientGroupTitle}
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clientWork.map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>

          <h3 className="mt-16 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {site.work.conceptGroupTitle}
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conceptWork.map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe + Our Numbers */}
      <section id="believe" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead label={site.believe.label} />
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {site.believe.title}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {site.believe.body.map((paragraph, i) => (
              <p
                key={i}
                className="rounded-2xl border border-white/10 bg-card p-6 text-sm leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-20">
            <SectionHead label={site.numbers.label} />
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {site.numbers.items.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-card p-6"
                >
                  <p className="text-3xl font-semibold tracking-tight text-[#ff5f00] sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {site.numbers.body}
            </p>
          </div>
        </div>
      </section>

      {/* A Different Kind of Agency */}
      <section id="agency" className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHead label={site.agency.label} />
            <h2 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {site.agency.title}
            </h2>
            <p className="mt-4 font-medium text-[#ff5f00]">
              {site.agency.kicker}
            </p>
          </div>
          <div>
            <p className="text-base leading-relaxed sm:text-lg">
              {site.agency.body}
            </p>
            <ul className="mt-6 space-y-2">
              {site.agency.nots.map((not) => (
                <li
                  key={not}
                  className="text-muted-foreground line-through decoration-white/30"
                >
                  {not}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-medium">{site.agency.closing}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/10">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <SectionHead label={site.faq.label} />
          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-card px-6">
            {site.faq.items.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold sm:text-base [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-mono text-lg text-muted-foreground transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* The owners — profile-card carousel. */}
      <section
        id="team"
        className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-24"
      >
        <div className="text-center">
          <SectionHead label="Who's behind it" />
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            The owners
          </h2>
        </div>
        <TestimonialCarousel testimonials={owners} />
      </section>

      {/* Client Stories */}
      <section id="stories" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-wrap items-center gap-3">
            <SectionHead label={site.stories.label} />
            <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[11px] text-muted-foreground">
              {site.stories.sampleTag}
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            {site.stories.title}
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {site.stories.items.map((story) => (
              <figure
                key={story.project}
                className="flex flex-col rounded-2xl border border-white/10 bg-card p-6"
              >
                <span className="text-sm font-medium text-[#ff5f00]">
                  ★ {story.rating.toFixed(1)}
                </span>
                <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto pt-5">
                  <span className="text-sm font-semibold">{story.project}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {story.industry}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="border-t border-white/10">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center">
          <SectionHead label={site.cta.label} />
          <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-tight sm:text-6xl">
            {site.cta.title}
          </h2>
          <div className="mt-6 space-y-1 text-sm text-muted-foreground sm:text-base">
            {[...site.cta.lines, ...site.cta.lines2].map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <a
            href={`mailto:${site.footer.email}`}
            className="mt-8 rounded-full bg-[#ff5f00] px-8 py-4 text-sm font-semibold text-[#0a0a0a] transition hover:brightness-110"
          >
            {site.cta.cta}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12 text-center">
        <p className="text-sm text-muted-foreground">{site.footer.line}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-wider text-muted-foreground">
          {site.footer.services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
        <p className="mt-8 text-xs font-semibold tracking-[0.25em]">
          {site.footer.motto}
        </p>
        <p className="mt-6 text-xs text-muted-foreground">
          {site.footer.copyright}
        </p>
      </footer>
    </main>
  );
}
