import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { DonatePathways } from "@/components/DonatePathways";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Olori Adeola Relief Foundation" },
      {
        name: "description",
        content:
          "Give financially via Wema Bank 0126951057, or donate food items directly via WhatsApp 08184344442.",
      },
      { property: "og:title", content: "How You Can Be Part of the Solution" },
      {
        property: "og:description",
        content: "Support the Widows Food Bank with funds or food items.",
      },
    ],
  }),
  component: Donate,
});

function Donate() {
  return (
    <>
      <section className="surface-deep">
        <div className="adire-pattern">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h1 className="max-w-3xl font-display text-5xl text-gold">
              How You Can Be Part of the Solution.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">
              Two clear pathways to stand with a widow this month.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <DonatePathways />

        <div className="mt-12 grid gap-6 rounded-3xl border border-border bg-card p-8 shadow-soft sm:grid-cols-3">
          {[
            { amount: "₦10,000", body: "Provides staples for one widow's household for a week." },
            { amount: "₦35,000", body: "A full monthly parcel: rice, semovita, oil and beverages." },
            { amount: "₦150,000", body: "Sponsors five households through a distribution cycle." },
          ].map((t) => (
            <div key={t.amount}>
              <p className="font-display text-3xl text-primary-deep">{t.amount}</p>
              <p className="mt-2 text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 flex items-start gap-2 text-muted-foreground">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
          Drop off food items at Olori Adeola&apos;s Place, Agbara Estate, Agbara, Ogun State,
          Nigeria — please message on WhatsApp first so a coordinator can receive you.
        </p>
      </section>
    </>
  );
}
