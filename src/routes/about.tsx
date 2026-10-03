import { createFileRoute, Link } from "@tanstack/react-router";
import aboutGathering from "@/assets/images/c340594c-f1a3-476f-b2b6-9df753bab56b.jpg";
import aboutDistribution from "@/assets/images/cae7d963-b395-45be-9089-680ea3d9c6da.jpg";
import { FocusAreas } from "@/components/FocusAreas";
import { FounderSpotlight } from "@/components/FounderSpotlight";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        name: "description",
        content:
          "Olori Adeola Relief Foundation restores hope and dignity to widows and underprivileged families through food assistance, medical support, and community outreach.",
      },
      { property: "og:title", content: "About OLORI ADEOLA RELIEF FOUNDATION" },
      {
        property: "og:description",
        content: "Breaking Barriers, Building Futures. Compassion, care, and sustainable empowerment.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="surface-deep">
        <div className="adire-pattern">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
              Breaking Barriers, Building Futures.
            </p>
            <h1 className="mt-4 font-display text-5xl text-gold">About Us</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">
              A humanitarian foundation restoring hope, health, and dignity to widows and vulnerable
              families.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4 text-lg text-muted-foreground">
          <h2 className="font-display text-4xl text-primary-deep">About the Foundation</h2>
          <p>
            Olori Adeola Relief Foundation is a compassionate humanitarian organization dedicated to
            restoring hope and dignity to vulnerable members of society, especially widows and
            underprivileged families. The foundation was established with a deep commitment to
            supporting those facing hardship by providing essential care, food assistance, and access
            to medical treatment.
          </p>
          <p>
            At Olori Adeola Relief Foundation, we believe that no widow or vulnerable individual
            should suffer in silence or lack basic necessities. Through our outreach programs, we
            provide nutritious food supplies, healthcare support, medical consultations, and
            treatment assistance to widows who often struggle with financial and emotional challenges
            after the loss of their spouses.
          </p>
          <p>
            Our mission is to break barriers and build brighter futures by promoting compassion,
            community support, and sustainable empowerment. Beyond immediate relief, we aim to uplift
            lives, restore confidence, and create opportunities for healthier and more stable living.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={aboutGathering}
            alt="Widows seated together at a foundation gathering inside the hall"
            loading="lazy"
            decoding="async"
            className="h-72 w-full rounded-3xl object-cover shadow-soft sm:h-96"
          />
          <img
            src={aboutDistribution}
            alt="A volunteer handing a food package to a widow during an indoor distribution"
            loading="lazy"
            decoding="async"
            className="mt-8 h-72 w-full rounded-3xl object-cover shadow-soft sm:h-96"
          />
        </div>
      </section>

      <FocusAreas />
      <FounderSpotlight />

      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-4xl text-primary-deep">Stand with the work.</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/donate"
            className="inline-block rounded-full bg-ember px-8 py-4 font-semibold text-ember-foreground shadow-soft"
          >
            Support Our Cause
          </Link>
          <Link
            to="/programs"
            className="inline-block rounded-full border border-primary px-8 py-4 font-semibold text-primary"
          >
            View Outreach Details
          </Link>
        </div>
      </section>
    </>
  );
}
