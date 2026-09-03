import { createFileRoute, Link } from "@tanstack/react-router";
import foodImg from "@/assets/food-staples.jpg";
import heroImg from "@/assets/hero-distribution.jpg";
import { DonatePathways } from "@/components/DonatePathways";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Widows Food Bank" },
      {
        name: "description",
        content:
          "Inside the Widows Food Bank: bulk staples, organised distributions and the Feed the Widow Program 2025.",
      },
      { property: "og:title", content: "Widows Food Bank: Providing Relief and Hope" },
      {
        property: "og:description",
        content: "How the Widows Food Bank works and how you can support it.",
      },
    ],
  }),
  component: Programs,
});

const steps = [
  {
    n: "01",
    title: "Identify & register",
    body: "Widows are referred by community leaders and registered with household details, so support is fair and traceable.",
  },
  {
    n: "02",
    title: "Purchase in bulk",
    body: "Donations are pooled to buy rice, semovita, beverages and oil at wholesale prices — more food per naira given.",
  },
  {
    n: "03",
    title: "Pack & distribute",
    body: "Volunteers assemble balanced household parcels and hand them out at scheduled, orderly outreaches.",
  },
  {
    n: "04",
    title: "Follow up",
    body: "We check in between distributions and connect widows to skills and small-trade support where possible.",
  },
];

function Programs() {
  return (
    <>
      <section className="surface-deep">
        <div className="adire-pattern">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h1 className="max-w-3xl font-display text-5xl text-gold">
              Widows Food Bank: Providing Relief and Hope.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">
              Our flagship program with one objective: ensure no widow goes hungry.
            </p>
            <span className="mt-6 inline-block rounded-full bg-gold px-5 py-2 text-sm font-semibold text-gold-foreground">
              Feed the Widow Program 2025 — ongoing
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-4xl text-primary-deep">How the program works</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {steps.map((s) => (
            <article key={s.n} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="font-display text-3xl text-gold">{s.n}</span>
              <h3 className="mt-2 font-display text-2xl text-primary-deep">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-4xl text-primary-deep">The support we provide</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-3xl bg-card shadow-soft">
              <img
                src={foodImg}
                alt="Stacked staples: rice bags, semovita cartons, milk tins and cooking oil"
                loading="lazy"
                width={1200}
                height={912}
                className="h-80 w-full object-cover"
              />
              <figcaption className="p-6 text-muted-foreground">
                Bulk staples — rice, semovita, beverages, oil — sorted for household parcels.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-3xl bg-card shadow-soft">
              <img
                src={heroImg}
                alt="Beneficiaries smiling as they collect their food packages"
                loading="lazy"
                width={1600}
                height={1104}
                className="h-80 w-full object-cover"
              />
              <figcaption className="p-6 text-muted-foreground">
                Beneficiaries collecting parcels at an organised community distribution.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-4xl text-primary-deep">Fuel the next distribution</h2>
        <div className="mt-10">
          <DonatePathways />
        </div>
        <Link
          to="/gallery"
          className="mt-8 inline-block rounded-full border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          See the gallery
        </Link>
      </section>
    </>
  );
}
