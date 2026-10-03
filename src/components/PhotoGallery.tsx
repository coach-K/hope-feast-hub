import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ALL_GALLERY_IMAGES, type GalleryImage } from "@/lib/outreach-photos";

export const GALLERY_INITIAL_VISIBLE_COUNT = 6;
export const GALLERY_BATCH_SIZE = 6;

type PhotoGalleryProps = {
  initialVisibleCount?: number;
  paging?: boolean;
};

const frameClass = [
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[5/4]",
  "aspect-[3/4]",
  "aspect-[4/3]",
];

type SlideMotion = "open" | "next" | "prev";

function neighborIndexes(index: number, total: number): number[] {
  if (total <= 1) return [];
  return [(index - 1 + total) % total, (index + 1) % total];
}

export function PhotoGallery({
  initialVisibleCount = GALLERY_INITIAL_VISIBLE_COUNT,
  paging = true,
}: PhotoGalleryProps = {}) {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [motion, setMotion] = useState<SlideMotion>("open");
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const total = ALL_GALLERY_IMAGES.length;
  const visibleImages = ALL_GALLERY_IMAGES.slice(0, visibleCount);
  const shown = Math.min(visibleCount, total);
  const current = activeIndex === null ? undefined : ALL_GALLERY_IMAGES[activeIndex];

  const indexById = useMemo(() => {
    const lookup = new Map<string, number>();
    ALL_GALLERY_IMAGES.forEach((photo, index) => lookup.set(photo.id, index));
    return lookup;
  }, []);

  const openAt = (photo: GalleryImage, trigger: HTMLButtonElement) => {
    const index = indexById.get(photo.id);
    if (index === undefined) return;
    triggerRef.current = trigger;
    setMotion("open");
    setActiveIndex(index);
  };

  const close = () => {
    setActiveIndex(null);
    triggerRef.current?.focus();
  };

  const step = (delta: 1 | -1) => {
    setMotion(delta === 1 ? "next" : "prev");
    setActiveIndex((index) => {
      if (index === null || total === 0) return index;
      return (index + delta + total) % total;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setMotion("next");
        setActiveIndex((index) => (index === null || total === 0 ? index : (index + 1) % total));
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setMotion("prev");
        setActiveIndex((index) =>
          index === null || total === 0 ? index : (index - 1 + total) % total,
        );
      } else if (event.key === "Escape") {
        event.preventDefault();
        setActiveIndex(null);
        triggerRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, total]);

  useEffect(() => {
    if (activeIndex === null || total === 0) return;

    const preloaders = neighborIndexes(activeIndex, total).map((index) => {
      const photo = ALL_GALLERY_IMAGES[index];
      const img = new Image();
      img.decoding = "async";
      img.src = photo.src;
      return img;
    });

    return () => {
      preloaders.forEach((img) => {
        img.onload = null;
        img.onerror = null;
        img.src = "";
      });
    };
  }, [activeIndex, total]);

  const slideClass =
    motion === "next" ? "gallery-slide-next" : motion === "prev" ? "gallery-slide-prev" : "gallery-reveal";

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {visibleImages.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={(event) => openAt(photo, event.currentTarget)}
            aria-label={photo.alt}
            className="gallery-reveal mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-secondary shadow-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mb-4"
            style={{ animationDelay: `${(index % GALLERY_BATCH_SIZE) * 40}ms` }}
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

      {paging && (
        <div className="mt-6 flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Showing {shown} of {total} photos
          </p>
          {visibleCount < total && (
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + GALLERY_BATCH_SIZE)}
              className="rounded-full border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Load More
            </button>
          )}
        </div>
      )}

      {current && activeIndex !== null && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-primary-deep/92 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          tabIndex={-1}
          onClick={close}
        >
          <p className="sr-only">
            Photograph {activeIndex + 1} of {total}. Use the left and right arrow keys to browse,
            or escape to close.
          </p>
          <button
            type="button"
            onClick={close}
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
              step(-1);
            }}
            className="absolute left-3 rounded-full bg-background/15 p-2 text-primary-foreground hover:bg-background/25 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure
            className="max-h-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={current.id}
              src={current.src}
              alt={current.alt}
              decoding="async"
              className={`max-h-[78vh] w-auto max-w-full rounded-2xl object-contain ${slideClass}`}
            />
            <figcaption className="mt-3 text-center text-sm text-primary-foreground/85">
              {current.caption}
              <span className="mt-1 block text-xs tracking-wide text-gold uppercase">
                {current.category}
              </span>
              <span className="mt-1 block text-xs tracking-wide text-primary-foreground/70">
                {activeIndex + 1} / {total}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next photograph"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
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
