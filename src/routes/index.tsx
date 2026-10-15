import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { AboutCopy, AboutPortraits } from "@/components/AboutStory";
import { DonatePathways } from "@/components/DonatePathways";
import { FounderSpotlight } from "@/components/FounderSpotlight";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { ImpactVideo } from "@/components/ImpactVideo";
import { PhotoGallery } from "@/components/PhotoGallery";
import { ProgramPillars } from "@/components/ProgramPillars";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OLORI ADEOLA RELIEF FOUNDATION — Breaking Barriers, Building Futures." },
      {
        name: "description",
        content:
          "Empowering widows, nurturing young girls, and supporting vulnerable communities through targeted relief, healthcare, education, and sustainable development initiatives.",
      },
      {
        property: "og:title",
        content: "OLORI ADEOLA RELIEF FOUNDATION — Breaking Barriers, Building Futures.",
      },
      {
        property: "og:description",
        content:
          "Empowering widows, nurturing young girls, and supporting vulnerable communities through targeted relief, healthcare, education, and sustainable development initiatives.",
      },
    ],
  }),
  component: Home,
});

const testimonials = [
  {
    programme: "Widows",
    quote:
      "After my husband passed, feeding my three children was a daily fear. The food bank gave me room to breathe and start my small trade again.",
    name: "Mrs. Folake A.",
    place: "Agbara",
  },
  {
    programme: "School Outreach",
    quote:
      "I stood up with the microphone in front of my classmates. That was the first time someone asked me what I want to become.",
    name: "A student",
    place: "Agbara Grammar School",
  },
  {
    programme: "Back to School",
    quote:
      "Last term my daughter stayed home because we had no uniform. This term she walked in on the first day with her books.",
    name: "Mrs. Adewunmi K.",
    place: "Agbara",
  },
  {
    programme: "Aged Care",
    quote:
      "They came to my house, not only to the hall. They checked on me and left food for the grandchildren who live with me.",
    name: "Mama Sade",
    place: "Agbara",
  },
];

function Home() {
  return (
    <>
      <HeroSlideshow />

      <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">About Us</p>
            <h2 className="mt-3 font-display text-4xl text-primary-deep">About the Foundation</h2>
            <AboutCopy />
          </div>

          <AboutPortraits />
        </div>
      </section>

      <ImpactVideo />
      <div className="bg-secondary/40">
        <ProgramPillars />
      </div>

      <FounderSpotlight />

      <section id="gallery" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">
          Impact stories
        </p>
        <h2 className="mt-3 font-display text-4xl text-primary-deep">Gallery</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          World Girl Child Day at Agbara Grammar School, widows&apos; relief in Agbara, and community
          outreaches. Filter by programme, then select any image to view it larger.
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
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            One voice from each programme.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.programme} className="rounded-3xl bg-card p-7 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <Quote className="h-6 w-6 text-gold" />
                  <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                    {t.programme}
                  </p>
                </div>
                <p className="mt-3 text-lg text-foreground/85">{t.quote}</p>
                <footer className="mt-4 text-sm font-semibold text-primary">
                  {t.name} — {t.place}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="get-involved" className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-4xl text-primary-deep">Support Our Cause</h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Stand with widows, schoolchildren, and older people. Give financially, or coordinate
            food items directly with the team.
          </p>
          <div className="mt-10">
            <DonatePathways />
          </div>
        </div>
      </section>
    </>
  );
}
