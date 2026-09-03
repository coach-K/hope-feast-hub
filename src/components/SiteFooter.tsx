import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="surface-deep mt-24">
      <div className="adire-pattern">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <div className="flex justify-center">
            <Logo tone="inverse" />
          </div>

          <p className="mx-auto mt-8 max-w-xl font-display text-2xl text-gold">
            Breaking Barriers, Building Futures.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 text-sm text-primary-foreground/80 sm:grid-cols-3">
            <p className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-gold" />
              Olori Adeola&apos;s Place, Agbara Estate, Agbara, Ogun State
            </p>
            <a
              href="mailto:info@oloriadeolafoundation.org"
              className="flex items-center justify-center gap-2 hover:text-gold"
            >
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              info@oloriadeolafoundation.org
            </a>
            <a
              href="https://wa.me/2348184344442"
              className="flex items-center justify-center gap-2 hover:text-gold"
            >
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              WhatsApp 08184344442
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="rounded-full border border-primary-foreground/25 p-2.5 text-primary-foreground/85 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="mt-10 text-sm text-primary-foreground/75">
            Thanks for your generosity!! All donations are vital in continuing this work.
          </p>

          <Link
            to="/donate"
            className="mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground"
          >
            Support Our Mission
          </Link>
        </div>
      </div>
    </footer>
  );
}
