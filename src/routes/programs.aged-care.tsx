import { createFileRoute } from "@tanstack/react-router";
import { ProgrammeBrief } from "@/components/ProgrammeBrief";
import { agedCareFocus } from "@/lib/aged-care";
import { imagesForFilter } from "@/lib/outreach-photos";

const photos = imagesForFilter("Aged Care");

export const Route = createFileRoute("/programs/aged-care")({
  head: () => ({
    meta: [
      { title: "Aged Care — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        name: "description",
        content:
          "Aged Care with Olori Adeola Relief Foundation: food, health checks, and home visits for older people.",
      },
      { property: "og:title", content: "Aged Care — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        property: "og:description",
        content:
          "Food, health checks, and home visits for older people, including grandparents raising children.",
      },
    ],
  }),
  component: AgedCareProgram,
});

function AgedCareProgram() {
  return (
    <ProgrammeBrief
      title="Aged Care"
      lede="Older people in these communities often carry a household on very little, sometimes alone, sometimes raising grandchildren. Aged Care brings food, a health check, and a visit from someone who knows their name."
      items={agedCareFocus}
      closing="Contributions stock the food parcels and cover the cost of bringing a clinician to the visit."
      photos={photos}
    />
  );
}
