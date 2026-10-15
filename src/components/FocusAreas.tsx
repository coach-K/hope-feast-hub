import { BookOpen, GraduationCap, Heart, HeartHandshake } from "lucide-react";

const areas = [
  {
    title: "Widows",
    body: "Food, healthcare, medical consultations, and empowerment support for widows and the dependents who rely on them.",
    Icon: HeartHandshake,
  },
  {
    title: "School outreach",
    body: "Visits to schools for education, hygiene, health, and mentorship, including World Girl Child Day.",
    Icon: GraduationCap,
  },
  {
    title: "Back to school",
    body: "Books, uniforms, and help with fees so children can resume and remain in class.",
    Icon: BookOpen,
  },
  {
    title: "Aged care",
    body: "Food, health checks, and home visits for older people, including grandparents raising children.",
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
          To build a society where widows, schoolchildren, and older people live with dignity, good
          health, education, and renewed hope.
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
