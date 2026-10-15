import { createFileRoute, Link } from "@tanstack/react-router";
import { AboutCopy, AboutPortraits } from "@/components/AboutStory";
import { FocusAreas } from "@/components/FocusAreas";
import { FounderSpotlight } from "@/components/FounderSpotlight";
import { MISSION } from "@/lib/foundation";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        name: "description",
        content:
          "Empowering widows, nurturing young girls, and supporting vulnerable communities through targeted relief, healthcare, education, and sustainable development initiatives.",
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
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">{MISSION}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-4xl text-primary-deep">About the Foundation</h2>
          <AboutCopy />
        </div>
        <AboutPortraits />
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
            Our Programs
          </Link>
        </div>
      </section>
    </>
  );
}
