import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Heart, MapPin, Stethoscope, Users, Utensils } from "lucide-react";
import heroEvent from "@/assets/images/24908c36-3363-416e-b3c2-60c2bc2d1322.jpg";
import foodParcels from "@/assets/images/47c0d6db-098f-4ee8-aa96-2c7282e76bbd.jpg";
import outreachTeam from "@/assets/images/aa585078-0a63-41cf-9c30-3c17c28f80b9.jpg";
import townHall from "@/assets/images/75f62dff-d934-4b5f-8665-88fb9f58d0be.jpg";
import { DonatePathways } from "@/components/DonatePathways";

const areas = [
  {
    title: "Food distribution",
    body: "Food distribution to widows and vulnerable families, so households have nutritious staples they can count on.",
    Icon: Utensils,
  },
  {
    title: "Medical care",
    body: "Medical care and treatment support, including consultations and assistance for widows facing health challenges.",
    Icon: Stethoscope,
  },
  {
    title: "Community outreach",
    body: "Community outreach and humanitarian assistance that meets people where they live, with organised, personal care.",
    Icon: Users,
  },
  {
    title: "Dignity and inclusion",
    body: "Promoting dignity, hope, and social inclusion so no widow or vulnerable person is left to suffer in silence.",
    Icon: Heart,
  },
];

export const Route = createFileRoute("/programs/widows")({
  head: () => ({
    meta: [
      { title: "Feed the Widow — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        name: "description",
        content:
          "9th Edition Feed the Widow, 22nd February 2026 at Agbara Town Hall, Ogun State. Food distribution, medical care, and community outreach by Olori Adeola Relief Foundation.",
      },
      { property: "og:title", content: "(9TH EDITION) FEED THE WIDOW 2026" },
      {
        property: "og:description",
        content: "22nd February 2026 · Agbara Town Hall, Ogun State.",
      },
    ],
  }),
  component: WidowsProgram,
});

function WidowsProgram() {
  return (
    <>
      <section className="relative isolate overflow-hidden text-primary-foreground">
        <img
          src={heroEvent}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-deep/82" />
        <div className="adire-pattern relative">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
              OLORI ADEOLA RELIEF FOUNDATION
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl text-gold">
              (9TH EDITION) FEED THE WIDOW 2026
            </h1>
            <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row">
              <p className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-gold" />
                22nd February, 2026
              </p>
              <p className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2">
                <MapPin className="h-4 w-4 text-gold" />
                Agbara Town Hall, Ogun State
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-4xl text-primary-deep">Outreach details</h2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          The 9th edition brings widows and vulnerable families together for food distribution,
          medical care and treatment support, and the kind of community presence that restores
          dignity. The gathering is at Agbara Town Hall, Ogun State, on 22nd February, 2026.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <figure className="overflow-hidden rounded-3xl bg-card shadow-soft md:col-span-2">
            <img
              src={townHall}
              alt="Beneficiaries and volunteers gathered with food parcels outside Agbara town hall"
              loading="lazy"
              decoding="async"
              className="h-80 w-full object-cover"
            />
          </figure>
          <figure className="overflow-hidden rounded-3xl bg-card shadow-soft">
            <img
              src={heroEvent}
              alt="Event setup and venue prepared for the Feed the Widow outreach"
              loading="lazy"
              decoding="async"
              className="h-80 w-full object-cover"
            />
          </figure>
          <figure className="overflow-hidden rounded-3xl bg-card shadow-soft">
            <img
              src={foodParcels}
              alt="Stacks of labeled food packages prepared for widow households"
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover"
            />
            <figcaption className="p-5 text-muted-foreground">
              Food packages and staple supplies for widow households.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-3xl bg-card shadow-soft md:col-span-2">
            <img
              src={outreachTeam}
              alt="Volunteers and assistants ready for a community food distribution"
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover"
            />
            <figcaption className="p-5 text-muted-foreground">
              Volunteers and assistants who carry the outreach from packing to distribution.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">
          Core Focus & Vision
        </p>
        <div className="mt-6 rounded-[2rem] bg-primary-deep px-7 py-10 text-primary-foreground shadow-lift sm:px-10">
          <h2 className="font-display text-3xl text-gold sm:text-4xl">Our Vision</h2>
          <p className="mt-4 max-w-3xl font-display text-2xl leading-snug text-primary-foreground/95 sm:text-3xl">
            To build a society where widows and vulnerable individuals live with dignity, good
            health, and renewed hope.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {areas.map(({ title, body, Icon }, index) => (
            <article key={title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
                  <Icon className="h-6 w-6 text-primary" />
                </span>
                <p className="font-display text-sm tracking-widest text-gold uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <h3 className="mt-5 font-display text-2xl text-primary-deep">{title}</h3>
              <p className="mt-2 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 pb-20 sm:px-6">
        <h2 className="font-display text-4xl text-primary-deep">Get involved</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Contributions purchase food, support medical assistance, and keep the outreach organised.
        </p>
        <div className="mt-10">
          <DonatePathways />
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/gallery"
            search={{ category: "Widows Relief" }}
            className="inline-block rounded-full border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View the gallery
          </Link>
        </div>
      </section>
    </>
  );
}
