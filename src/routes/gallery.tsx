import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-distribution.jpg";
import foodImg from "@/assets/food-staples.jpg";
import beneficiaryImg from "@/assets/beneficiary-1.jpg";
import volunteersImg from "@/assets/volunteers.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Olori Adeola Relief Foundation" },
      {
        name: "description",
        content:
          "Photos from Widows Food Bank distributions, volunteer packing days and the beneficiaries we serve.",
      },
      { property: "og:title", content: "Gallery — Widows Food Bank in action" },
      {
        property: "og:description",
        content: "Moments from our distributions in Agbara, Ogun State.",
      },
    ],
  }),
  component: Gallery,
});

const photos = [
  { src: heroImg, alt: "Widows receiving food packages at a distribution", tall: true },
  { src: foodImg, alt: "Bulk food staples ready for packing" },
  { src: beneficiaryImg, alt: "A beneficiary holding her food package", tall: true },
  { src: volunteersImg, alt: "Volunteers packing parcels" },
];

function Gallery() {
  return (
    <>
      <section className="surface-deep">
        <div className="adire-pattern">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h1 className="font-display text-5xl text-gold">Gallery</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">
              Moments from the Widows Food Bank — packing days, distributions and the women at the
              centre of it all.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {photos.map((p) => (
            <img
              key={p.alt}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className={`w-full rounded-3xl object-cover shadow-soft ${p.tall ? "h-[28rem]" : "h-72"}`}
            />
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-secondary/70 p-8 text-center">
          <h2 className="font-display text-3xl text-primary-deep">
            Every photo here started as a donation.
          </h2>
          <Link
            to="/donate"
            className="mt-5 inline-block rounded-full bg-ember px-8 py-4 font-semibold text-ember-foreground shadow-soft"
          >
            Support Our Mission
          </Link>
        </div>
      </section>
    </>
  );
}
