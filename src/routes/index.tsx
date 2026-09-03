import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, Sprout, Utensils, Quote } from "lucide-react";
import heroImg from "@/assets/hero-distribution.jpg";
import foodImg from "@/assets/food-staples.jpg";
import beneficiaryImg from "@/assets/beneficiary-1.jpg";
import volunteersImg from "@/assets/volunteers.jpg";
import { DonatePathways } from "@/components/DonatePathways";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olori Adeola Relief Foundation — A Widow, but NOT Wasted" },
      {
        name: "description",
        content:
          "We empower widows in Agbara, Ogun State through the Widows Food Bank — food support, dignity and sustainable community programs.",
      },
      { property: "og:title", content: "A Widow, but NOT Wasted" },
      {
        property: "og:description",
        content:
          "Support the Widows Food Bank of Olori Adeola Relief Foundation. Breaking Barriers, Building Futures.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    Icon: Utensils,
    title: "Food Security",
    body: "Regular, reliable food parcels so that no widow in our community goes to bed hungry.",
  },
  {
    Icon: Sprout,
    title: "Community Empowerment",
    body: "Skills, small-trade support and networks that turn relief into lasting independence.",
  },
  {
    Icon: HeartHandshake,
    title: "Dignity Support",
    body: "Distributions run with warmth and privacy, because being served should never cost dignity.",
  },
];

const testimonials = [
  {
    quote:
      "After my husband passed, feeding my three children was a daily fear. The food bank gave me room to breathe and start my small trade again.",
    name: "Mrs. Folake A.",
    place: "Agbara",
  },
  {
    quote:
      "They did not treat us like beggars. They called us by name. That respect is what I carry with me.",
    name: "Mrs. Ngozi E.",
    place: "Igbesa",
  },
  {
    quote:
      "Every month the rice and semovita come. My grandchildren eat, and I can now save the little I earn.",
    name: "Mama Titi",
    place: "Ijoko",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden surface-deep">
        <div className="adire-pattern">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <span className="inline-block rounded-full border border-gold/50 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
                Widows Food Bank
              </span>
              <h1 className="mt-5 font-display text-5xl leading-[1.05] text-gold sm:text-6xl">
                A Widow, but NOT Wasted.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
                Olori Adeola Relief Foundation is dedicated to empowering and uplifting widows
                through essential food support and sustainable community programs.
              </p>
              <Link
                to="/donate"
                className="mt-8 inline-block rounded-full bg-ember px-8 py-4 font-semibold text-ember-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Support Our Mission
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border-4 border-gold/70 p-2">
                <img
                  src={heroImg}
                  alt="Widows receiving food packages at a foundation distribution"
                  width={1600}
                  height={1104}
                  className="h-full w-full rounded-[1.6rem] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-4 rounded-2xl bg-background px-5 py-3 shadow-lift sm:left-8">
                <p className="font-display text-xl text-primary-deep">Feed the Widow 2025</p>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  Ongoing initiative
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">Why We Exist</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl text-primary-deep">
          A widow, but not wasted — a promise we keep every month.
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Widowhood in our communities too often arrives with two burdens at once: social stigma and
          sudden economic hardship. We exist to break those barriers and build futures — starting
          with a full pot at home, and reaching toward independence, confidence and community.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map(({ Icon, title, body }) => (
            <article key={title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
                <Icon className="h-6 w-6 text-primary" />
              </span>
              <h3 className="mt-5 font-display text-2xl text-primary-deep">{title}</h3>
              <p className="mt-2 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="max-w-3xl font-display text-4xl text-primary-deep">
            Widows Food Bank: Providing Relief and Hope.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            The Widows Food Bank is our flagship program. We buy staples in bulk, pack them into
            balanced household parcels, and distribute them through organised, register-based
            outreaches so support reaches the same families reliably. The objective is simple: no
            widow goes hungry.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-3xl bg-card shadow-soft">
              <img
                src={foodImg}
                alt="Bulk food staples: rice, semovita, milk and cooking oil"
                loading="lazy"
                width={1200}
                height={912}
                className="h-72 w-full object-cover"
              />
              <figcaption className="p-6">
                <h3 className="font-display text-xl text-primary-deep">What goes in a parcel</h3>
                <p className="mt-1 text-muted-foreground">
                  Rice, semovita, beverages, cooking oil and other staples, purchased in bulk so
                  every naira stretches further.
                </p>
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-3xl bg-card shadow-soft">
              <img
                src={volunteersImg}
                alt="Volunteers packing food parcels for distribution"
                loading="lazy"
                width={1200}
                height={912}
                className="h-72 w-full object-cover"
              />
              <figcaption className="p-6">
                <h3 className="font-display text-xl text-primary-deep">Organised distribution</h3>
                <p className="mt-1 text-muted-foreground">
                  Volunteers pack and hand out parcels at scheduled outreaches, with each
                  beneficiary registered and followed up.
                </p>
              </figcaption>
            </figure>
          </div>

          <Link
            to="/programs"
            className="mt-8 inline-block rounded-full border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Explore the program
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-4xl text-primary-deep">
          How You Can Be Part of the Solution.
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Two clear pathways — give financially, or give food directly.
        </p>
        <div className="mt-10">
          <DonatePathways />
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-4xl text-primary-deep">Your Impact in Their Words.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <img
              src={beneficiaryImg}
              alt="A widow holding her food package outside the community centre"
              loading="lazy"
              width={912}
              height={1104}
              className="h-[26rem] w-full rounded-3xl object-cover shadow-soft"
            />
            <div className="grid gap-5">
              {testimonials.map((t) => (
                <blockquote key={t.name} className="rounded-3xl bg-card p-7 shadow-soft">
                  <Quote className="h-6 w-6 text-gold" />
                  <p className="mt-3 text-lg text-foreground/85">{t.quote}</p>
                  <footer className="mt-4 text-sm font-semibold text-primary">
                    {t.name} — {t.place}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
