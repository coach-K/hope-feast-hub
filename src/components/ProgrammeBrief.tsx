import { Link } from "@tanstack/react-router";
import { DonatePathways } from "@/components/DonatePathways";

type ProgrammeBriefProps = {
  title: string;
  lede: string;
  items: readonly { title: string; body: string }[];
  closing: string;
  photos: readonly { id: string; src: string; alt: string }[];
};

export function ProgrammeBrief({ title, lede, items, closing, photos }: ProgrammeBriefProps) {
  return (
    <>
      <section className="surface-deep">
        <div className="adire-pattern">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
              Our Programs
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl text-gold">{title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">{lede}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, index) => (
            <article key={item.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <p className="font-display text-sm tracking-widest text-gold uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 font-display text-2xl text-primary-deep">{item.title}</h2>
              <p className="mt-3 text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>

        {photos.length > 0 ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {photos.map((photo) => (
              <figure key={photo.id} className="overflow-hidden rounded-3xl bg-card shadow-soft">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </figure>
            ))}
          </div>
        ) : null}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 pb-20 sm:px-6">
        <h2 className="font-display text-4xl text-primary-deep">Get involved</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{closing}</p>
        <div className="mt-10">
          <DonatePathways />
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/donate"
            className="inline-block rounded-full bg-ember px-8 py-4 font-semibold text-ember-foreground shadow-soft"
          >
            Support Our Cause
          </Link>
        </div>
      </section>
    </>
  );
}
