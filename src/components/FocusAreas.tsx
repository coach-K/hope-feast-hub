import { Heart, Stethoscope, Users, Utensils } from "lucide-react";

const areas = [
  {
    title: "Food distribution",
    body: "Food distribution to widows and vulnerable families, so households have nutritious staples they can count on.",
    Icon: Utensils,
  },
  {
    title: "Medical care",
    body: "Medical care and treatment support, including consultations and assistance for widows facing health challenges.",
    Icon: Stethoscope,
  },
  {
    title: "Community outreach",
    body: "Community outreach and humanitarian assistance that meets people where they live, with organised, personal care.",
    Icon: Users,
  },
  {
    title: "Dignity and inclusion",
    body: "Promoting dignity, hope, and social inclusion so no widow or vulnerable person is left to suffer in silence.",
    Icon: Heart,
  },
];

export function FocusAreas() {
  return (
    <section id="focus" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="text-xs font-semibold tracking-widest text-primary uppercase">
        Core Focus & Vision
      </p>
      <div className="mt-6 rounded-[2rem] bg-primary-deep px-7 py-10 text-primary-foreground shadow-lift sm:px-10">
        <h2 className="font-display text-3xl text-gold sm:text-4xl">Our Vision</h2>
        <p className="mt-4 max-w-3xl font-display text-2xl leading-snug text-primary-foreground/95 sm:text-3xl">
          To build a society where widows and vulnerable individuals live with dignity, good health,
          and renewed hope.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {areas.map(({ title, body, Icon }, index) => (
          <article key={title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
                <Icon className="h-6 w-6 text-primary" />
              </span>
              <p className="font-display text-sm tracking-widest text-gold uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
            </div>
            <h3 className="mt-5 font-display text-2xl text-primary-deep">{title}</h3>
            <p className="mt-2 text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
