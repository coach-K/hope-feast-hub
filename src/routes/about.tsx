import { createFileRoute, Link } from "@tanstack/react-router";
import volunteersImg from "@/assets/volunteers.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Olori Adeola Relief Foundation" },
      {
        name: "description",
        content:
          "Our story, mission and values: breaking barriers of stigma and hardship for widows in Agbara, Ogun State.",
      },
      { property: "og:title", content: "About Olori Adeola Relief Foundation" },
      {
        property: "og:description",
        content: "Breaking Barriers, Building Futures — empowering widows with dignity.",
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
            <h1 className="font-display text-5xl text-gold">About Us</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">
              Breaking Barriers, Building Futures — one household, one widow, one full pot at a
              time.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-4xl text-primary-deep">Our story</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Olori Adeola Relief Foundation began with a simple observation in Agbara: when a woman
            loses her husband, she frequently loses her income, her standing and her safety net all
            at once. Neighbours mean well, but goodwill fades after the burial.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            We built a structure that does not fade. Registered beneficiaries, scheduled
            distributions, bulk purchasing and follow-up — so support is predictable enough for a
            family to plan around.
          </p>
        </div>
        <img
          src={volunteersImg}
          alt="Foundation volunteers preparing food parcels"
          loading="lazy"
          width={1200}
          height={912}
          className="h-80 w-full rounded-3xl object-cover shadow-soft"
        />
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-3">
          {[
            {
              title: "Our Mission",
              body: "To empower and uplift widows through essential food support and sustainable community programs.",
            },
            {
              title: "Our Vision",
              body: "Communities where widowhood never means hunger, isolation or the loss of a woman's future.",
            },
            {
              title: "Our Values",
              body: "Dignity first, transparency in every naira, and consistency over one-off charity.",
            },
          ].map((c) => (
            <article key={c.title} className="rounded-3xl bg-card p-7 shadow-soft">
              <h3 className="font-display text-2xl text-primary-deep">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-4xl text-primary-deep">Stand with our widows.</h2>
        <Link
          to="/donate"
          className="mt-6 inline-block rounded-full bg-ember px-8 py-4 font-semibold text-ember-foreground shadow-soft"
        >
          Support Our Mission
        </Link>
      </section>
    </>
  );
}
