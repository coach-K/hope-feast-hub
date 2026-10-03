import { createFileRoute, Link } from "@tanstack/react-router";
import { PhotoGallery } from "@/components/PhotoGallery";
import { outreachPhotos } from "@/lib/outreach-photos";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        name: "description",
        content:
          "Photographs from Olori Adeola Relief Foundation outreaches, food distributions, and community gatherings.",
      },
      { property: "og:title", content: "Gallery — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        property: "og:description",
        content: "Impact stories and outreach photographs from Agbara, Ogun State and beyond.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <section className="surface-deep">
        <div className="adire-pattern">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h1 className="font-display text-5xl text-gold">Gallery</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">
              {outreachPhotos.length} photographs from food relief, medical outreach, and the
              communities the foundation serves. Open any image to view it larger.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <PhotoGallery photos={outreachPhotos} />

        <div className="mt-14 rounded-3xl bg-secondary/70 p-8 text-center">
          <h2 className="font-display text-3xl text-primary-deep">
            Help us fill the next gathering with the same care.
          </h2>
          <Link
            to="/donate"
            className="mt-5 inline-block rounded-full bg-ember px-8 py-4 font-semibold text-ember-foreground shadow-soft"
          >
            Support Our Cause
          </Link>
        </div>
      </section>
    </>
  );
}
