import { Facebook, Instagram, MessageCircle } from "lucide-react";
import founderImg from "@/assets/images/founder.png";

const socials = [
  { Icon: Facebook, label: "Facebook", href: "https://web.facebook.com/adeola.agunbiade.754" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/adeola.agunbiade.754/" },
];

export function FounderSpotlight() {
  return (
    <section id="founder" className="bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <figure className="overflow-hidden rounded-[2rem] bg-card shadow-lift">
          <img
            src={founderImg}
            alt="Portrait of Olori Adeola, founder and chief executive of the foundation"
            loading="lazy"
            decoding="async"
            className="h-[32rem] w-full object-cover object-top"
          />
          <figcaption className="px-6 py-5">
            <p className="font-display text-xl text-primary-deep">Olori Adeola</p>
            <p className="text-sm tracking-wide text-muted-foreground uppercase">
              Founder & Chief Executive Officer
            </p>
          </figcaption>
        </figure>

        <div>
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">Leadership</p>
          <h2 className="mt-3 font-display text-4xl text-primary-deep">
            Meet Our Founder & CEO — Olori Adeola
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Driven by empathy, unwavering faith, and a heart for service, Olori Adeola founded the
            Olori Adeola Relief Foundation to be a beacon of hope for widows, orphans, and
            underserved communities. With a passion for sustainable relief and social dignity, she
            continues to pioneer annual outreaches, medical interventions, and food distribution
            initiatives that impact hundreds of families across Ogun State and beyond.
          </p>

          <blockquote className="mt-8 border-l-4 border-gold bg-card px-6 py-5 shadow-soft">
            <p className="font-display text-2xl text-primary-deep">
              “Guided by love, empathy, and service to humanity.”
            </p>
          </blockquote>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/2348184344442"
              className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-3 text-sm font-semibold text-ember-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Contact on WhatsApp
            </a>
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-border bg-card p-3 text-primary transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
