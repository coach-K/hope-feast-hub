import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Quote } from "lucide-react";
import heroEvent from "@/assets/images/4cbc272c-cf61-47a5-b8bf-f5a327507180.jpg";
import aboutGathering from "@/assets/images/c340594c-f1a3-476f-b2b6-9df753bab56b.jpg";
import aboutDistribution from "@/assets/images/cae7d963-b395-45be-9089-680ea3d9c6da.jpg";
import foodRelief from "@/assets/images/8fd1211c-784b-4f5a-bfd7-158507191b02.jpg";
import volunteers from "@/assets/images/5de07678-79b9-4c14-ae10-804faa8e4c4c.jpg";
import beneficiaryImg from "@/assets/images/e200d2c4-6282-4af2-ab85-7a0fa624a976.jpg";
import { DonatePathways } from "@/components/DonatePathways";
import { FocusAreas } from "@/components/FocusAreas";
import { FounderSpotlight } from "@/components/FounderSpotlight";
import { ImpactVideo } from "@/components/ImpactVideo";
import { PhotoGallery } from "@/components/PhotoGallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OLORI ADEOLA RELIEF FOUNDATION — Feed the Widow 2026" },
      {
        name: "description",
        content:
          "Olori Adeola Relief Foundation presents the 9th Edition of Feed the Widow on 22nd February 2026 at Agbara Town Hall, Ogun State. Breaking Barriers, Building Futures.",
      },
      { property: "og:title", content: "OLORI ADEOLA RELIEF FOUNDATION — Feed the Widow 2026" },
      {
        property: "og:description",
        content:
          "9th Edition Feed the Widow, 22nd February 2026, Agbara Town Hall, Ogun State. Breaking Barriers, Building Futures.",
      },
    ],
  }),
  component: Home,
});

const heroAlt = "Beneficiaries and volunteers with food parcels outside Alamosun Town Hall, Agbara";

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
      "Every time the rice and semovita come. My grandchildren eat, and I can now save the little I earn.",
    name: "Mama Titi",
    place: "Ijoko",
  },
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden text-primary-foreground">
        <img
          src={heroEvent}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/94 via-primary-deep/82 to-primary-deep/60" />
        <div className="adire-pattern absolute inset-0 opacity-30" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
              Breaking Barriers, Building Futures.
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-gold sm:text-5xl lg:text-6xl">
              OLORI ADEOLA RELIEF FOUNDATION
            </h1>
            <p className="mt-5 font-display text-2xl text-primary-foreground sm:text-3xl">
              A Widow, But Not Wasted
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap">
              <p className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-gold" />
                22nd February, 2026
              </p>
              <p className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2">
                <MapPin className="h-4 w-4 text-gold" />
                Agbara Town Hall, Ogun State
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/donate"
                className="inline-flex justify-center rounded-full bg-ember px-7 py-3.5 text-center font-semibold text-ember-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Support Our Cause
              </Link>
              <a
                href="#get-involved"
                className="inline-flex justify-center rounded-full bg-gold px-7 py-3.5 text-center font-semibold text-gold-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Get Involved
              </a>
              <Link
                to="/programs"
                className="inline-flex justify-center rounded-full border border-primary-foreground/40 px-7 py-3.5 text-center font-semibold text-primary-foreground transition-colors hover:border-gold hover:text-gold"
              >
                View Outreach Details
              </Link>
            </div>
            <img
              src={heroEvent}
              alt={heroAlt}
              className="mt-8 h-64 w-full rounded-[1.6rem] object-cover ring-4 ring-gold/70 lg:hidden"
            />
          </div>

          <figure className="hidden lg:block">
            <div className="rounded-[2rem] border-4 border-gold/70 p-2 shadow-lift">
              <img
                src={heroEvent}
                alt={heroAlt}
                width={1280}
                height={960}
                className="h-[30rem] w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <figcaption className="mt-4 rounded-2xl bg-background px-5 py-3 text-foreground shadow-lift">
              <p className="font-display text-xl text-primary-deep">Feed the Widow 2026</p>
              <p className="text-xs tracking-wide text-muted-foreground uppercase">
                9th edition · Agbara Town Hall
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">About Us</p>
            <h2 className="mt-3 font-display text-4xl text-primary-deep">About the Foundation</h2>
            <div className="mt-5 space-y-4 text-lg text-muted-foreground">
              <p>
                Olori Adeola Relief Foundation is a compassionate humanitarian organization
                dedicated to restoring hope and dignity to vulnerable members of society, especially
                widows and underprivileged families. The foundation was established with a deep
                commitment to supporting those facing hardship by providing essential care, food
                assistance, and access to medical treatment.
              </p>
              <p>
                At Olori Adeola Relief Foundation, we believe that no widow or vulnerable individual
                should suffer in silence or lack basic necessities. Through our outreach programs,
                we provide nutritious food supplies, healthcare support, medical consultations, and
                treatment assistance to widows who often struggle with financial and emotional
                challenges after the loss of their spouses.
              </p>
              <p>
                Our mission is to break barriers and build brighter futures by promoting compassion,
                community support, and sustainable empowerment. Beyond immediate relief, we aim to
                uplift lives, restore confidence, and create opportunities for healthier and more
                stable living.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <figure className="overflow-hidden rounded-3xl shadow-soft">
              <img
                src={aboutGathering}
                alt="Widows seated together at a foundation gathering inside the hall"
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover sm:h-[22rem]"
              />
            </figure>
            <figure className="mt-8 overflow-hidden rounded-3xl shadow-soft">
              <img
                src={aboutDistribution}
                alt="A volunteer handing a food package to a widow during an indoor distribution"
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover sm:h-[22rem]"
              />
            </figure>
          </div>
        </div>
      </section>

      <ImpactVideo />
      <FocusAreas />

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            Relief in practice
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl text-primary-deep">
            Food for households. Hands for the work.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-3xl bg-card shadow-soft">
              <img
                src={foodRelief}
                alt="Labeled Feed the Widows food sacks packed for distribution"
                loading="lazy"
                decoding="async"
                className="h-80 w-full object-cover"
              />
              <figcaption className="p-6">
                <h3 className="font-display text-2xl text-primary-deep">Food relief programmes</h3>
                <p className="mt-2 text-muted-foreground">
                  Nutritious food packages and staple supplies, prepared so widows and vulnerable
                  families leave an outreach with something real to take home.
                </p>
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-3xl bg-card shadow-soft">
              <img
                src={volunteers}
                alt="Volunteers and community members gathered for a foundation outreach"
                loading="lazy"
                decoding="async"
                className="h-80 w-full object-cover"
              />
              <figcaption className="p-6">
                <h3 className="font-display text-2xl text-primary-deep">
                  Volunteer & community support
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Outreach teams and assistants who pack, welcome, and walk with beneficiaries so
                  every distribution is orderly, warm, and dignified.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <FounderSpotlight />

      <section id="gallery" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">
          Impact stories
        </p>
        <h2 className="mt-3 font-display text-4xl text-primary-deep">Gallery</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Photographs from distributions, gatherings, and the people at the heart of the foundation.
          Select any image to view it larger.
        </p>
        <div className="mt-10">
          <PhotoGallery paging={false} />
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/gallery"
            search={{ more: true }}
            className="inline-block rounded-full border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            See more
          </Link>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-4xl text-primary-deep">Your Impact in Their Words.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <img
              src={beneficiaryImg}
              alt="A widow receiving a food package during an Agbara outreach"
              loading="lazy"
              decoding="async"
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

      <section id="get-involved" className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-4xl text-primary-deep">Support Our Cause</h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Stand with widows and vulnerable families ahead of Feed the Widow 2026. Give
            financially, or coordinate food items directly with the team.
          </p>
          <div className="mt-10">
            <DonatePathways />
          </div>
        </div>
      </section>
    </>
  );
}
