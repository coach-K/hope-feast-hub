import { Link } from "@tanstack/react-router";
import { CalendarDays, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import widowsHero from "@/assets/images/4cbc272c-cf61-47a5-b8bf-f5a327507180.jpg";
import { agedCareFocus } from "@/lib/aged-care";
import { backToSchoolFocus } from "@/lib/back-to-school";
import { heroPhotoForSchool } from "@/lib/girl-child-photos";
import { featuredGirlChildSchool, GIRL_CHILD_EVENT } from "@/lib/girl-child";

const NEXT_EDITION = new Date("2027-02-01T00:00:00+01:00").getTime();

function countdownParts(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

function EditionCountdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const remaining = now === null ? null : countdownParts(NEXT_EDITION - now);

  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2">
      <CalendarDays className="h-4 w-4 shrink-0 text-gold" />
      {remaining ? (
        <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-0.5 tabular-nums">
          {(
            [
              ["days", remaining.days],
              ["hrs", remaining.hours],
              ["min", remaining.minutes],
              ["sec", remaining.seconds],
            ] as const
          ).map(([label, value]) => (
            <span key={label} className="inline-flex items-baseline gap-1">
              <span className="font-semibold text-gold">{String(value).padStart(2, "0")}</span>
              <span className="text-primary-foreground/75">{label}</span>
            </span>
          ))}
          <span>to February 2027</span>
        </span>
      ) : (
        <span>Countdown to February 2027</span>
      )}
    </p>
  );
}

const girlHero = featuredGirlChildSchool ? heroPhotoForSchool(featuredGirlChildSchool) : undefined;

const slides = [
  {
    id: "widows",
    kicker: "Widows",
    title: "Feed the Widow",
    body: "Food distribution, healthcare, medical consultations, and empowerment support for widows and their dependents.",
    image: widowsHero,
    imageAlt: "Beneficiaries and volunteers with food parcels outside Alamosun Town Hall, Agbara",
    captionTitle: "Feed the Widow",
    captionMeta: "Agbara Town Hall, Ogun State",
    points: [] as string[],
    primary: { to: "/programs/widows" as const, label: "View the outreach" },
    secondary: { to: "/donate" as const, label: "Support Our Cause" },
  },
  {
    id: "school-outreach",
    kicker: "School Outreach",
    title: "School Outreach",
    body: featuredGirlChildSchool
      ? `${GIRL_CHILD_EVENT} brought education, health, hygiene, and mentorship to ${featuredGirlChildSchool.name}.`
      : "School visits for education, health, hygiene, and mentorship.",
    image: girlHero?.src ?? widowsHero,
    imageAlt:
      girlHero?.alt ?? "Students gathered for World Girl Child Day at Agbara Grammar School",
    captionTitle: featuredGirlChildSchool?.name ?? "School Outreach",
    captionMeta: featuredGirlChildSchool
      ? `${GIRL_CHILD_EVENT} · ${featuredGirlChildSchool.dateLabel}`
      : GIRL_CHILD_EVENT,
    points: [] as string[],
    primary: { to: "/programs/school-outreach" as const, label: "View the outreach" },
    secondary: { to: "/donate" as const, label: "Support Our Cause" },
  },
  {
    id: "back-to-school",
    kicker: "Back to School",
    title: "Back to School",
    body: "Books, uniforms, and school fees so children in the households the foundation already knows can resume and stay in class.",
    image: null,
    imageAlt: "",
    captionTitle: "Back to School",
    captionMeta: "Books, uniforms, and fees",
    points: backToSchoolFocus.map((item) => item.title),
    primary: { to: "/programs/back-to-school" as const, label: "View the programme" },
    secondary: { to: "/donate" as const, label: "Support Our Cause" },
  },
  {
    id: "aged-care",
    kicker: "Aged Care",
    title: "Aged Care",
    body: "Food, health checks, and home visits for older people, including grandparents raising children.",
    image: null,
    imageAlt: "",
    captionTitle: "Aged Care",
    captionMeta: "Food, health, and home visits",
    points: agedCareFocus.map((item) => item.title),
    primary: { to: "/programs/aged-care" as const, label: "View the programme" },
    secondary: { to: "/donate" as const, label: "Support Our Cause" },
  },
];

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index] ?? slides[0];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, [paused, index]);

  if (!slide) return null;

  const step = (delta: number) => {
    setIndex((current) => (current + delta + slides.length) % slides.length);
  };

  return (
    <section
      className="relative isolate overflow-hidden text-primary-foreground"
      aria-roledescription="carousel"
      aria-label="Foundation programmes"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      {slides.map((item, itemIndex) =>
        item.image ? (
          <img
            key={item.id}
            src={item.image}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              itemIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div
            key={item.id}
            aria-hidden="true"
            className={`absolute inset-0 bg-primary-deep transition-opacity duration-700 ${
              itemIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ),
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/94 via-primary-deep/82 to-primary-deep/60" />
      <div className="adire-pattern absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            {slide.kicker}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] text-gold sm:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">{slide.body}</p>
          <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap">
            {slide.id === "widows" ? (
              <>
                <EditionCountdown />
                <p className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  Agbara Town Hall, Ogun State
                </p>
              </>
            ) : null}
            {slide.id === "school-outreach" && featuredGirlChildSchool ? (
              <>
                <p className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2">
                  <CalendarDays className="h-4 w-4 text-gold" />
                  {GIRL_CHILD_EVENT}
                </p>
                <p className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  {featuredGirlChildSchool.name}, {featuredGirlChildSchool.area}
                </p>
              </>
            ) : null}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to={slide.primary.to}
              className="inline-flex justify-center rounded-full bg-ember px-7 py-3.5 text-center font-semibold text-ember-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              {slide.primary.label}
            </Link>
            <Link
              to={slide.secondary.to}
              className="inline-flex justify-center rounded-full border border-primary-foreground/40 px-7 py-3.5 text-center font-semibold text-primary-foreground transition-colors hover:border-gold hover:text-gold"
            >
              {slide.secondary.label}
            </Link>
          </div>
          {slide.image ? (
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="mt-8 h-64 w-full rounded-[1.6rem] object-cover ring-4 ring-gold/70 lg:hidden"
            />
          ) : (
            <ul className="mt-6 grid gap-2 lg:hidden">
              {slide.points.map((point) => (
                <li key={point} className="rounded-2xl bg-background/10 px-4 py-3 text-sm">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>

        <figure className="hidden lg:block">
          {slide.image ? (
            <>
              <div className="rounded-[2rem] border-4 border-gold/70 p-2 shadow-lift">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="h-[30rem] w-full rounded-[1.5rem] object-cover"
                />
              </div>
              <figcaption className="mt-4 rounded-2xl bg-background px-5 py-3 text-foreground shadow-lift">
                <p className="font-display text-xl text-primary-deep">{slide.captionTitle}</p>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  {slide.captionMeta}
                </p>
              </figcaption>
            </>
          ) : (
            <ul className="grid gap-3">
              {slide.points.map((point) => (
                <li key={point} className="rounded-3xl bg-background/10 px-6 py-5">
                  <p className="font-display text-2xl text-gold">{point}</p>
                </li>
              ))}
            </ul>
          )}
        </figure>
      </div>

      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pb-8 sm:px-6">
        <div className="flex items-center gap-2">
          {slides.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show ${item.title}`}
              aria-current={itemIndex === index ? "true" : undefined}
              onClick={() => setIndex(itemIndex)}
              className={`h-2.5 rounded-full transition-all ${
                itemIndex === index ? "w-8 bg-gold" : "w-2.5 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous programme"
            onClick={() => step(-1)}
            className="rounded-full border border-primary-foreground/30 p-2 text-primary-foreground hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next programme"
            onClick={() => step(1)}
            className="rounded-full border border-primary-foreground/30 p-2 text-primary-foreground hover:border-gold hover:text-gold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {slide.title}, slide {index + 1} of {slides.length}
      </p>
    </section>
  );
}
