import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GALLERY_BATCH_SIZE,
  GALLERY_INITIAL_VISIBLE_COUNT,
  PhotoGallery,
} from "@/components/PhotoGallery";
import { ALL_GALLERY_IMAGES } from "@/lib/outreach-photos";

type GallerySearch = {
  more?: boolean;
};

export const Route = createFileRoute("/gallery")({
  validateSearch: (search: Record<string, unknown>): GallerySearch => {
    const more = search.more === true || search.more === "true" || search.more === "1";
    return more ? { more: true } : {};
  },
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
  const { more } = Route.useSearch();

  return (
    <>
      <section className="surface-deep">
        <div className="adire-pattern">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h1 className="font-display text-5xl text-gold">Gallery</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">
              {ALL_GALLERY_IMAGES.length} photographs from food relief, medical outreach, and the
              communities the foundation serves. Open any image to view it larger.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <PhotoGallery
          initialVisibleCount={
            more === true
              ? GALLERY_INITIAL_VISIBLE_COUNT + GALLERY_BATCH_SIZE
              : GALLERY_INITIAL_VISIBLE_COUNT
          }
        />

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
