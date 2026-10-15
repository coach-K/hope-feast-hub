import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  GALLERY_FILTERS,
  imagesForFilter,
  type GalleryFilter,
  type GalleryImage,
} from "@/lib/outreach-photos";

export const GALLERY_INITIAL_VISIBLE_COUNT = 6;
export const GALLERY_BATCH_SIZE = 6;

type PhotoGalleryProps = {
  initialVisibleCount?: number;
  paging?: boolean;
  initialFilter?: GalleryFilter;
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
  initialFilter = "All",
}: PhotoGalleryProps = {}) {
  const [filter, setFilter] = useState<GalleryFilter>(initialFilter);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [motion, setMotion] = useState<SlideMotion>("open");
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const dragRef = useRef<{ id: number; x: number; y: number; swiping: boolean } | null>(null);

  const photos = useMemo(() => imagesForFilter(filter), [filter]);
  const total = photos.length;
  const visibleImages = photos.slice(0, visibleCount);
  const shown = Math.min(visibleCount, total);
  const current = activeIndex === null ? undefined : photos[activeIndex];

  const indexById = useMemo(() => {
    const lookup = new Map<string, number>();
    photos.forEach((photo, index) => lookup.set(photo.id, index));
    return lookup;
  }, [photos]);

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  useEffect(() => {
    setVisibleCount(initialVisibleCount);
    setActiveIndex(null);
  }, [filter, initialVisibleCount]);

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

  const clearDragOffset = () => {
    const image = imageRef.current;
    if (!image) return;
    image.style.transition = "transform 180ms ease";
    image.style.transform = "";
  };

  const onSwipeStart = (event: ReactPointerEvent<HTMLElement>) => {
    if (total <= 1) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY, swiping: false };
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // The gesture still works if the pointer cannot be captured.
    }
  };

  const onSwipeMove = (event: ReactPointerEvent<HTMLElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (!drag.swiping) {
      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
      if (Math.abs(dy) > Math.abs(dx)) {
        dragRef.current = null;
        clearDragOffset();
        return;
      }
      drag.swiping = true;
    }
    const image = imageRef.current;
    if (!image) return;
    image.style.transition = "none";
    image.style.transform = `translateX(${dx}px)`;
  };

  const onSwipeEnd = (event: ReactPointerEvent<HTMLElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    clearDragOffset();
    if (Math.abs(dx) < 48 || Math.abs(dy) > Math.abs(dx)) return;
    event.preventDefault();
    event.stopPropagation();
    step(dx < 0 ? 1 : -1);
  };

  const onSwipeCancel = () => {
    dragRef.current = null;
    clearDragOffset();
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

    const preloaders = neighborIndexes(activeIndex, total).flatMap((index) => {
      const photo = photos[index];
      if (!photo) return [];
      const img = new Image();
      img.decoding = "async";
      img.src = photo.src;
      return [img];
    });

    return () => {
      preloaders.forEach((img) => {
        img.onload = null;
        img.onerror = null;
        img.src = "";
      });
    };
  }, [activeIndex, photos, total]);

  const slideClass =
    motion === "next" ? "gallery-slide-next" : motion === "prev" ? "gallery-slide-prev" : "gallery-reveal";

  return (
    <>
      <div role="tablist" aria-label="Gallery categories" className="mb-8 flex flex-wrap gap-2">
        {GALLERY_FILTERS.map((option) => {
          const selected = option === filter;
          return (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => {
                setFilter(option);
                setActiveIndex(null);
                setVisibleCount(initialVisibleCount);
              }}
              className={
                selected
                  ? "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                  : "rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:border-primary hover:text-primary"
              }
            >
              {option}
            </button>
          );
        })}
      </div>

      {total === 0 ? (
        <p className="rounded-3xl bg-secondary/70 px-6 py-10 text-center text-muted-foreground">
          No photographs in this category yet.
        </p>
      ) : (
        <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
          {visibleImages.map((photo, index) => (
            <button
              key={`${filter}-${photo.id}`}
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
      )}

      {paging && total > 0 && (
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
            Photograph {activeIndex + 1} of {total}. Swipe the photograph, or use the left and right
            arrow keys, to browse. Escape closes.
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
            className="max-h-full max-w-5xl touch-none select-none"
            onClick={(event) => event.stopPropagation()}
            onPointerDown={onSwipeStart}
            onPointerMove={onSwipeMove}
            onPointerUp={onSwipeEnd}
            onPointerCancel={onSwipeCancel}
          >
            <img
              ref={imageRef}
              key={current.id}
              src={current.src}
              alt={current.alt}
              decoding="async"
              draggable={false}
              className={`max-h-[78vh] w-auto max-w-full cursor-grab rounded-2xl object-contain active:cursor-grabbing ${slideClass}`}
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
