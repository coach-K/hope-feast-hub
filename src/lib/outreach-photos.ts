const modules = import.meta.glob("../assets/images/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
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

const featuredFirst = [
  "3e769d6d-8321-4cf7-9d07-14dc089fc70a",
  "802f169c-7a6a-4b0e-9da0-c97563995f3b",
  "75f62dff-d934-4b5f-8665-88fb9f58d0be",
];

const defaultCaption = "Outreach photograph from the Olori Adeola Relief Foundation";

const knownCategories: Record<string, string> = {
  "24908c36-3363-416e-b3c2-60c2bc2d1322": "Feed the Widow",
  "3c8cbb2b-cd58-4be7-bdfa-d48a930a02d9": "Dignity and inclusion",
  "3e769d6d-8321-4cf7-9d07-14dc089fc70a": "Feed the Widow",
  "5abbe135-0b1d-4ff4-a752-aa090c7026ce": "Community outreach",
  "5de07678-79b9-4c14-ae10-804faa8e4c4c": "Food distribution",
  "75f62dff-d934-4b5f-8665-88fb9f58d0be": "Food distribution",
  "802f169c-7a6a-4b0e-9da0-c97563995f3b": "Community outreach",
};

function asSrc(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function categoryFor(id: string, caption: string | undefined): string {
  if (knownCategories[id]) return knownCategories[id];
  if (!caption) return "Outreach";
  const text = caption.toLowerCase();
  if (/food|parcel|staple|rice|distribution/.test(text)) return "Food distribution";
  if (/medical|health|clinic/.test(text)) return "Medical care";
  if (/widow|dignit|famil/.test(text)) return "Dignity and inclusion";
  if (/volunteer|gather|community|team/.test(text)) return "Community outreach";
  return "Outreach";
}

export const ALL_GALLERY_IMAGES: GalleryImage[] = Object.entries(modules)
  .flatMap(([path, value]) => {
    const src = asSrc(value);
    const file = path.split("/").pop() ?? "";
    if (!src || /^logo\./i.test(file)) return [];
    const id = file.replace(/\.(jpe?g|png|webp)$/i, "");
    const caption = captions[id] ?? defaultCaption;
    return [
      {
        id,
        src,
        alt: caption,
        caption,
        category: categoryFor(id, captions[id]),
      },
    ];
  })
  .sort((a, b) => {
    const aRank = featuredFirst.indexOf(a.id);
    const bRank = featuredFirst.indexOf(b.id);
    if (aRank !== -1 || bRank !== -1) {
      if (aRank === -1) return 1;
      if (bRank === -1) return -1;
      return aRank - bRank;
    }
    return a.id.localeCompare(b.id);
  });

export const outreachPhotos: OutreachPhoto[] = ALL_GALLERY_IMAGES;
