import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { outreachPhotos, type OutreachPhoto } from "@/lib/outreach-photos";

type PhotoGalleryProps = {
  photos?: OutreachPhoto[];
};

const frameClass = [
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[5/4]",
  "aspect-[3/4]",
  "aspect-[4/3]",
];

export function PhotoGallery({ photos = outreachPhotos }: PhotoGalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? undefined : photos[active];

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActive((index) => (index === null ? index : (index + 1) % photos.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((index) =>
          index === null ? index : (index - 1 + photos.length) % photos.length,
        );
      }
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, photos.length]);

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setActive(index)}
            aria-label={photo.alt}
            className="mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-secondary shadow-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mb-4"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              className={`w-full object-cover transition-transform duration-300 hover:scale-[1.03] ${frameClass[index % frameClass.length] ?? "aspect-square"}`}
            />
          </button>
        ))}
      </div>

      {current && active !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-primary-deep/92 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 rounded-full bg-background/15 p-2 text-primary-foreground hover:bg-background/25"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous photograph"
            onClick={(event) => {
              event.stopPropagation();
              setActive((active - 1 + photos.length) % photos.length);
            }}
            className="absolute left-3 rounded-full bg-background/15 p-2 text-primary-foreground hover:bg-background/25 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-primary-foreground/85">
              {current.alt}
              <span className="mt-1 block text-xs tracking-wide text-gold uppercase">
                {active + 1} of {photos.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next photograph"
            onClick={(event) => {
              event.stopPropagation();
              setActive((active + 1) % photos.length);
            }}
            className="absolute right-3 rounded-full bg-background/15 p-2 text-primary-foreground hover:bg-background/25 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
