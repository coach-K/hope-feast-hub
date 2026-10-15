import { girlChildCaptionFromPath, girlChildPhotoId, girlChildSchools } from "@/lib/girl-child";

const modules = import.meta.glob("../assets/images/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const GALLERY_CATEGORIES = [
  "Girl Child Day",
  "Widows Relief",
  "Community Outreaches",
  "Back to School",
  "Aged Care",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];
export type GalleryFilter = "All" | GalleryCategory;

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
};

export type OutreachPhoto = GalleryImage;

const captions: Record<string, string> = {
  "24908c36-3363-416e-b3c2-60c2bc2d1322":
    "Event setup and venue prepared for the Feed the Widow outreach",
  "3c8cbb2b-cd58-4be7-bdfa-d48a930a02d9":
    "Widows and families receiving support from the foundation",
  "5abbe135-0b1d-4ff4-a752-aa090c7026ce":
    "Outreach team and assistants serving at a community distribution",
  "5de07678-79b9-4c14-ae10-804faa8e4c4c":
    "Food packages and staple supplies prepared for widow households",
  "3e769d6d-8321-4cf7-9d07-14dc089fc70a":
    "Olori Adeola Relief Foundation poster for the annual widows programme",
  "802f169c-7a6a-4b0e-9da0-c97563995f3b":
    "Olori Adeola speaking with the community during an outreach gathering",
  "75f62dff-d934-4b5f-8665-88fb9f58d0be":
    "Beneficiaries and volunteers gathered with food parcels outside Agbara town hall",
};

const featuredSchool = girlChildSchools[0];
const featuredFirst = [
  featuredSchool ? girlChildPhotoId(featuredSchool.slug, "13.jpg") : "",
  featuredSchool ? girlChildPhotoId(featuredSchool.slug, "07.jpg") : "",
  featuredSchool ? girlChildPhotoId(featuredSchool.slug, "18.jpg") : "",
  "3e769d6d-8321-4cf7-9d07-14dc089fc70a",
  "802f169c-7a6a-4b0e-9da0-c97563995f3b",
  "75f62dff-d934-4b5f-8665-88fb9f58d0be",
].filter(Boolean);

const defaultCaption = "Outreach photograph from the Olori Adeola Relief Foundation";

const communityIds = new Set([
  "5abbe135-0b1d-4ff4-a752-aa090c7026ce",
  "802f169c-7a6a-4b0e-9da0-c97563995f3b",
]);

function asSrc(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function categoryFor(path: string, id: string): GalleryImage["category"] {
  if (path.includes("/girl-child/")) return "Girl Child Day";
  if (path.includes("/back-to-school/")) return "Back to School";
  if (path.includes("/aged-care/")) return "Aged Care";
  if (communityIds.has(id)) return "Community Outreaches";
  return "Widows Relief";
}

function captionFor(path: string, id: string): string {
  if (path.includes("/girl-child/")) return girlChildCaptionFromPath(path);
  if (path.includes("/back-to-school/")) return "Back to School outreach photograph";
  if (path.includes("/aged-care/")) return "Aged Care outreach photograph";
  return captions[id] ?? defaultCaption;
}

const categoryOrder: GalleryImage["category"][] = [...GALLERY_CATEGORIES];

export const ALL_GALLERY_IMAGES: GalleryImage[] = (() => {
  const images = Object.entries(modules).flatMap(([path, value]) => {
    const src = asSrc(value);
    const file = path.split("/").pop() ?? "";
    if (!src || /^(logo|founder)\./i.test(file)) return [];
    const id = path.includes("/girl-child/")
      ? girlChildPhotoId(
          path.split("/girl-child/")[1]?.split("/")[0] ?? "",
          file,
        )
      : file.replace(/\.(jpe?g|png|webp)$/i, "");
    const caption = captionFor(path, id);
    return [
      {
        id,
        src,
        alt: caption,
        caption,
        category: categoryFor(path, id),
      },
    ];
  });

  const featured: GalleryImage[] = [];
  const buckets = new Map<GalleryImage["category"], GalleryImage[]>();

  for (const image of images) {
    const rank = featuredFirst.indexOf(image.id);
    if (rank !== -1) {
      featured[rank] = image;
      continue;
    }
    const list = buckets.get(image.category) ?? [];
    list.push(image);
    buckets.set(image.category, list);
  }

  for (const list of buckets.values()) {
    list.sort((a, b) => a.id.localeCompare(b.id));
  }

  const mixed: GalleryImage[] = [];
  let pending = true;
  while (pending) {
    pending = false;
    for (const category of categoryOrder) {
      const next = buckets.get(category)?.shift();
      if (next) {
        mixed.push(next);
        pending = true;
      }
    }
  }

  return [...featured.filter(Boolean), ...mixed];
})();

export const GALLERY_FILTERS: GalleryFilter[] = [
  "All",
  ...GALLERY_CATEGORIES.filter((category) =>
    ALL_GALLERY_IMAGES.some((photo) => photo.category === category),
  ),
];

export function imagesForFilter(filter: GalleryFilter): GalleryImage[] {
  if (filter === "All") return ALL_GALLERY_IMAGES;
  return ALL_GALLERY_IMAGES.filter((photo) => photo.category === filter);
}

export const outreachPhotos: OutreachPhoto[] = ALL_GALLERY_IMAGES;
