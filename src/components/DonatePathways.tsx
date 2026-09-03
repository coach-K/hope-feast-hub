import { ShieldCheck, MessageCircle, Wheat } from "lucide-react";

export function DonatePathways() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
      <article className="rounded-3xl border border-primary/15 bg-card p-7 shadow-lift sm:p-9">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-wide text-secondary-foreground uppercase">
          <ShieldCheck className="h-4 w-4 text-primary" /> Secure giving
        </span>
        <h3 className="mt-4 font-display text-3xl text-primary-deep">Make a Donation</h3>
        <p className="mt-3 text-muted-foreground">
          Your financial contributions allow us to purchase essential food staples in bulk and
          support other foundation initiatives.
        </p>

        <dl className="mt-6 space-y-3 rounded-2xl bg-secondary/70 p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Bank Name
            </dt>
            <dd className="font-display text-lg text-primary-deep">Wema Bank</dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-border pt-3">
            <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Account Number
            </dt>
            <dd className="font-display text-lg tracking-wider text-primary-deep">0126951057</dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-border pt-3">
            <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Account Name
            </dt>
            <dd className="text-right font-display text-lg text-primary-deep">
              Olori Adeola Relief Foundation
            </dd>
          </div>
        </dl>
      </article>

      <article className="rounded-3xl border border-gold/40 bg-accent/50 p-7 sm:p-9">
        <span className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-xs font-semibold tracking-wide text-secondary-foreground uppercase">
          <Wheat className="h-4 w-4 text-gold" /> Direct giving
        </span>
        <h3 className="mt-4 font-display text-3xl text-primary-deep">Donate Food Items</h3>
        <p className="mt-3 text-muted-foreground">
          Coordinate direct food donations (Rice, Grains, Semovita, etc.) by contacting our team via
          WhatsApp.
        </p>

        <div className="mt-6 rounded-2xl bg-background p-6">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            WhatsApp contact only
          </p>
          <a
            href="https://wa.me/2348184344442"
            className="mt-2 inline-flex items-center gap-2 font-display text-2xl text-primary-deep hover:text-primary"
          >
            <MessageCircle className="h-5 w-5 text-primary" /> 08184344442
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Rice &middot; Beans &middot; Semovita &middot; Garri &middot; Cooking oil &middot; Milk
            &amp; beverages
          </p>
        </div>
      </article>
    </div>
  );
}
