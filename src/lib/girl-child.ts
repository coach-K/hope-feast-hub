/**
 * School visits shown under the School Outreach programme.
 * World Girl Child Day is one of these visits.
 * To add a school: append an entry here and put its photographs in
 * src/assets/images/girl-child/<slug>/.
 * highlightFiles picks the photos shown on the programme card.
 * Any other file in that folder joins the gallery on its own.
 * captions is optional; a missing caption uses the school name and date.
 */

export const GIRL_CHILD_EVENT = "World Girl Child Day";

export const girlChildFocus = [
  "Educational support and school supply kits",
  "Hygiene and health awareness workshops",
  "Mentorship with female leaders and role models",
  "Room for girls to excel in STEM, leadership, and entrepreneurship",
] as const;

export type GirlChildSchool = {
  slug: string;
  name: string;
  area: string;
  dateLabel: string;
  summary: string;
  heroFile: string;
  highlightFiles: { file: string; caption: string }[];
  captions?: Record<string, string>;
};

export const girlChildSchools: GirlChildSchool[] = [
  {
    slug: "agbara-grammar-school",
    name: "Agbara Grammar School",
    area: "Agbara",
    dateLabel: "12th October 2026",
    summary:
      "Students gathered in the school hall for education, hygiene, health, and a chance to speak for themselves. Mentors and the outreach team sat with them through the programme.",
    heroFile: "13.jpg",
    highlightFiles: [
      { file: "13.jpg", caption: "The school hall" },
      { file: "07.jpg", caption: "Students speaking" },
      { file: "15.jpg", caption: "Hygiene and gifts" },
    ],
    captions: {
      "01":
        "A volunteer photographs students seated for World Girl Child Day at Agbara Grammar School",
      "04": "Students standing together during the programme in the school hall",
      "06": "A student speaks to her classmates at World Girl Child Day 2026",
      "07": "A student takes the microphone during World Girl Child Day at Agbara Grammar School",
      "10": "Students join in together during the World Girl Child Day gathering",
      "13": "Girls of Agbara Grammar School gathered for World Girl Child Day on 12 October 2026",
      "15": "Hygiene packs and gifts prepared for the girls at Agbara Grammar School",
      "18": "International Day of the Girl Child frames and reading messages from the school visit",
      "20": "Hygiene supplies and gifts set out for students, with the school chalkboard behind them",
      "23": "Olori Adeola with the World Girl Child Day messages at Agbara Grammar School",
      "25": "A facilitator leads students during the World Girl Child Day session",
      "28": "The outreach team moves through students seated in the Agbara Grammar School hall",
    },
  },
];

export const featuredGirlChildSchool = girlChildSchools[0];

export function girlChildPhotoId(slug: string, file: string): string {
  const stem = file.replace(/\.(jpe?g|png|webp)$/i, "");
  return `${slug}/${stem}`;
}

export function girlChildCaptionFromPath(path: string): string {
  const relative = path.split("/girl-child/")[1] ?? "";
  const [slug, filename = ""] = relative.split("/");
  const stem = filename.replace(/\.(jpe?g|png|webp)$/i, "");
  const school = girlChildSchools.find((item) => item.slug === slug);
  if (!school) return "World Girl Child Day outreach photograph";
  return (
    school.captions?.[stem] ??
    `${GIRL_CHILD_EVENT} at ${school.name}, ${school.area}, ${school.dateLabel}`
  );
}
