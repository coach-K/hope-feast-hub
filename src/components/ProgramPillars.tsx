import { Link } from "@tanstack/react-router";
import { BookOpen, CalendarDays, GraduationCap, Heart, HeartHandshake, MapPin } from "lucide-react";
import widowsGathering from "@/assets/images/75f62dff-d934-4b5f-8665-88fb9f58d0be.jpg";
import { agedCareFocus } from "@/lib/aged-care";
import { backToSchoolFocus } from "@/lib/back-to-school";
import { MISSION } from "@/lib/foundation";
import { featuredGirlChildSchool, GIRL_CHILD_EVENT } from "@/lib/girl-child";
import { highlightsForSchool } from "@/lib/girl-child-photos";

const girlHighlights = featuredGirlChildSchool
  ? highlightsForSchool(featuredGirlChildSchool).slice(0, 3)
  : [];

type ProgramPillarsProps = {
  showHeading?: boolean;
};

export function ProgramPillars({ showHeading = true }: ProgramPillarsProps) {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      {showHeading && (
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            Our Programs
          </p>
          <h2 className="mt-3 font-display text-4xl text-primary-deep">What we do</h2>
          <p className="mt-4 text-lg text-muted-foreground">{MISSION}</p>
        </div>
      )}

      <div className={`grid gap-6 lg:grid-cols-2 ${showHeading ? "mt-10" : ""}`}>
        <article className="flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
          <img
            src={widowsGathering}
            alt="Beneficiaries and volunteers gathered with food parcels outside Agbara town hall"
            loading="lazy"
            decoding="async"
            className="h-56 w-full object-cover"
          />
          <div className="flex flex-1 flex-col p-7 sm:p-8">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase">
              <HeartHandshake className="h-4 w-4" />
              Widows
            </p>
            <h3 className="mt-3 font-display text-3xl text-primary-deep">Feed the Widow</h3>
            <p className="mt-4 text-muted-foreground">
              Food distribution, healthcare support, medical consultations, and micro-grant
              empowerment for widows and their dependents.
            </p>
            <p className="mt-6 rounded-2xl bg-secondary px-4 py-3 text-sm text-secondary-foreground">
              <span className="font-semibold">Key event.</span> Annual Feed the Widow outreach in
              Agbara, Ogun State.
            </p>
            <Link
              to="/programs/widows"
              className="mt-6 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              View the outreach
            </Link>
          </div>
        </article>

        <article className="flex flex-col overflow-hidden rounded-[2rem] border border-gold/50 bg-card shadow-lift">
          <div className="p-7 sm:p-8">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase">
              <GraduationCap className="h-4 w-4" />
              School Outreach
            </p>
            <h3 className="mt-3 font-display text-3xl text-primary-deep">{GIRL_CHILD_EVENT}</h3>
            {featuredGirlChildSchool ? (
              <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-4">
                <p className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-gold" />
                  {featuredGirlChildSchool.dateLabel}
                </p>
                <p className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  {featuredGirlChildSchool.name}, {featuredGirlChildSchool.area}
                </p>
              </div>
            ) : null}
            <p className="mt-4 text-muted-foreground">
              Education, health, hygiene, and mentorship with students in the schools the foundation
              visits.
            </p>
            <Link
              to="/programs/school-outreach"
              className="mt-5 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              View the outreach
            </Link>
          </div>
          {girlHighlights.length > 0 ? (
            <div className="mt-auto grid grid-cols-3 gap-2 px-3 pb-3 sm:gap-3 sm:px-4 sm:pb-4">
              {girlHighlights.map((photo) => (
                <figure key={photo.id} className="overflow-hidden rounded-2xl bg-secondary">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <figcaption className="px-2 py-2 text-center text-[11px] font-semibold tracking-wide text-muted-foreground uppercase sm:text-xs">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </article>

        <article className="flex flex-col rounded-[2rem] border border-border bg-card p-7 shadow-soft sm:p-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase">
            <BookOpen className="h-4 w-4" />
            Back to School
          </p>
          <h3 className="mt-3 font-display text-3xl text-primary-deep">Back to School</h3>
          <p className="mt-4 text-muted-foreground">
            Books, uniforms, and school fees so children can resume and stay in class.
          </p>
          <ul className="mt-6 grid gap-2">
            {backToSchoolFocus.map((item) => (
              <li key={item.title} className="rounded-2xl bg-secondary px-4 py-3 text-sm">
                {item.title}
              </li>
            ))}
          </ul>
          <Link
            to="/programs/back-to-school"
            className="mt-6 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            View the programme
          </Link>
        </article>

        <article className="flex flex-col rounded-[2rem] border border-border bg-primary-deep p-7 text-primary-foreground shadow-soft sm:p-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold uppercase">
            <Heart className="h-4 w-4" />
            Aged Care
          </p>
          <h3 className="mt-3 font-display text-3xl text-gold">Aged Care</h3>
          <p className="mt-4 text-primary-foreground/85">
            Food, health checks, and home visits for older people, including grandparents raising
            children.
          </p>
          <ul className="mt-6 grid gap-2">
            {agedCareFocus.map((item) => (
              <li key={item.title} className="rounded-2xl bg-background/10 px-4 py-3 text-sm">
                {item.title}
              </li>
            ))}
          </ul>
          <Link
            to="/programs/aged-care"
            className="mt-6 inline-flex text-sm font-semibold text-gold underline-offset-4 hover:underline"
          >
            View the programme
          </Link>
        </article>
      </div>
    </section>
  );
}
