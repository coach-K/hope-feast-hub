export function ImpactVideo() {
  return (
    <section id="impact" className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">
          Impact & Highlights
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl text-primary-deep">
          See the work in motion.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A look at how the foundation gathers widows, shares food, and restores dignity through
          community outreach.
        </p>
        <div className="mt-8 aspect-video w-full overflow-hidden rounded-3xl bg-primary-deep shadow-lift">
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/3T_eVA3ZVjc"
            title="Olori Adeola Relief Foundation impact and outreach highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
