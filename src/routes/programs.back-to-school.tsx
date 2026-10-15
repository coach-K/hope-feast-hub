import { createFileRoute } from "@tanstack/react-router";
import { ProgrammeBrief } from "@/components/ProgrammeBrief";
import { backToSchoolFocus } from "@/lib/back-to-school";
import { imagesForFilter } from "@/lib/outreach-photos";

const photos = imagesForFilter("Back to School");

export const Route = createFileRoute("/programs/back-to-school")({
  head: () => ({
    meta: [
      { title: "Back to School — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        name: "description",
        content:
          "Back to School with Olori Adeola Relief Foundation: books, uniforms, fees, and a check-in so children stay in class.",
      },
      { property: "og:title", content: "Back to School — OLORI ADEOLA RELIEF FOUNDATION" },
      {
        property: "og:description",
        content:
          "Books, uniforms, school fees, and follow-up so children in the foundation's communities can resume and stay in school.",
      },
    ],
  }),
  component: BackToSchoolProgram,
});

function BackToSchoolProgram() {
  return (
    <ProgrammeBrief
      title="Back to School"
      lede="A new term starts with a list: books, a uniform, shoes, and the fee. For many children in the households this foundation already knows, that list is the reason they stay home. Back to School clears it."
      items={backToSchoolFocus}
      closing="Contributions buy the kits and uniforms, and cover fees for households that cannot meet the bill alone."
      photos={photos}
    />
  );
}
