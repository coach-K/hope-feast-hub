import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GALLERY_BATCH_SIZE,
  GALLERY_INITIAL_VISIBLE_COUNT,
  PhotoGallery,
} from "@/components/PhotoGallery";
import { ALL_GALLERY_IMAGES, GALLERY_FILTERS, type GalleryFilter } from "@/lib/outreach-photos";

type GallerySearch = {
  more?: boolean;
  category?: GalleryFilter;
};

function isGalleryFilter(value: unknown): value is GalleryFilter {
  return typeof value === "string" && (GALLERY_FILTERS as readonly string[]).includes(value);
}

export const Route = createFileRoute("/gallery")({
  validateSearch: (search: Record<string, unknown>): GallerySearch => {
    const moreValue = search["more"];
    const categoryValue = search["category"];
    const more = moreValue === true || moreValue === "true" || moreValue === "1";
    const category =
      isGalleryFilter(categoryValue) && categoryValue !== "All" ? categoryValue : undefined;
    return {
      ...(more ? { more: true } : {}),
      ...(category ? { category } : {}),
    };
  },
  head: () => ({
    meta: [
      { title: "Gallery — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        name: "description",
        content:
          "Photographs from World Girl Child Day 2026 at Agbara Grammar School, widows' relief, and community outreaches.",
      },
      { property: "og:title", content: "Gallery — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        property: "og:description",
        content:
          "Filter photographs from Girl Child Day, Widows Relief, and community outreaches.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const { more, category } = Route.useSearch();

  return (
    <>
      <section className="surface-deep">
        <div className="adire-pattern">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h1 className="font-display text-5xl text-gold">Gallery</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">
              {ALL_GALLERY_IMAGES.length} photographs from World Girl Child Day at Agbara Grammar
              School on 12 October 2026, widows&apos; relief, and community outreaches. Filter by
              programme, then open any image to move through that set.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <PhotoGallery
          initialFilter={category ?? "All"}
          initialVisibleCount={
            more === true
              ? GALLERY_INITIAL_VISIBLE_COUNT + GALLERY_BATCH_SIZE
              : GALLERY_INITIAL_VISIBLE_COUNT
          }
        />

        <div className="mt-14 rounded-3xl bg-secondary/70 p-8 text-center">
          <h2 className="font-display text-3xl text-primary-deep">
            Help us carry this care into the next school and the next gathering.
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
