import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import { DonatePathways } from "@/components/DonatePathways";
import {
  GIRL_CHILD_EVENT,
  girlChildFocus,
  girlChildSchools,
} from "@/lib/girl-child";
import { heroPhotoForSchool, highlightsForSchool } from "@/lib/girl-child-photos";

export const Route = createFileRoute("/programs/school-outreach")({
  head: () => ({
    meta: [
      { title: "School Outreach — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        name: "description",
        content:
          "School outreach by Olori Adeola Relief Foundation, including World Girl Child Day at Agbara Grammar School: education, hygiene, health, and mentorship.",
      },
      { property: "og:title", content: "School Outreach — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        property: "og:description",
        content: `${GIRL_CHILD_EVENT} and other school visits by Olori Adeola Relief Foundation.`,
      },
    ],
  }),
  component: SchoolOutreachProgram,
});

function SchoolOutreachProgram() {
  const lead = girlChildSchools[0];
  const leadHero = lead ? heroPhotoForSchool(lead) : undefined;

  return (
    <>
      <section className="relative isolate overflow-hidden text-primary-foreground">
        {leadHero && (
          <img
            src={leadHero.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-primary-deep/82" />
        <div className="adire-pattern relative">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
              Our Programs
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl text-gold">School Outreach</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">
              The foundation goes into schools to sit with students on education, health, hygiene,
              and the future they can build. {GIRL_CHILD_EVENT} is one of these visits.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid gap-3 sm:grid-cols-2">
          {girlChildFocus.map((item) => (
            <li key={item} className="rounded-2xl bg-secondary px-5 py-4 text-foreground/85">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {girlChildSchools.map((school) => {
        const highlights = highlightsForSchool(school);
        return (
          <section key={school.slug} className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              {GIRL_CHILD_EVENT}
            </p>
            <h2 className="mt-3 font-display text-4xl text-primary-deep">{school.name}</h2>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-4">
              <p className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-gold" />
                {school.dateLabel}
              </p>
              <p className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                {school.area}
              </p>
            </div>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{school.summary}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((photo) => (
                <figure key={photo.id} className="overflow-hidden rounded-3xl bg-card shadow-soft">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-6xl px-4 py-8 pb-20 sm:px-6">
        <h2 className="font-display text-4xl text-primary-deep">Get involved</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Contributions resource the kits, hygiene workshops, and mentors who sit with students
          during a school visit.
        </p>
        <div className="mt-10">
          <DonatePathways />
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/gallery"
            search={{ category: "Girl Child Day" }}
            className="inline-block rounded-full border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View the gallery
          </Link>
        </div>
      </section>
    </>
  );
}
