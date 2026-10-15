import { createFileRoute } from "@tanstack/react-router";
import { ProgramPillars } from "@/components/ProgramPillars";
import { MISSION } from "@/lib/foundation";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Our Programs — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        name: "description",
        content:
          "Widows, school outreach, back to school, and aged care at Olori Adeola Relief Foundation.",
      },
      { property: "og:title", content: "Our Programs — OLORI ADEOLA RELIEF FOUNDATION" },
      { property: "og:description", content: MISSION },
    ],
  }),
  component: ProgramsIndex,
});

function ProgramsIndex() {
  return (
    <>
      <section className="surface-deep">
        <div className="adire-pattern">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
              Breaking Barriers, Building Futures.
            </p>
            <h1 className="mt-4 font-display text-5xl text-gold">Our Programs</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">{MISSION}</p>
          </div>
        </div>
      </section>
      <ProgramPillars showHeading={false} />
    </>
  );
}
