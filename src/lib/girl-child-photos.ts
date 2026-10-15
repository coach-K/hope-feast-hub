import {
  girlChildCaptionFromPath,
  girlChildPhotoId,
  type GirlChildSchool,
} from "@/lib/girl-child";

const modules = import.meta.glob("../assets/images/girl-child/*/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

export type GirlChildPhoto = {
  id: string;
  file: string;
  src: string;
  alt: string;
  caption: string;
};

function asSrc(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

export function photosForSchool(slug: string): GirlChildPhoto[] {
  return Object.entries(modules)
    .flatMap(([path, value]) => {
      const src = asSrc(value);
      if (!src || !path.includes(`/girl-child/${slug}/`)) return [];
      const file = path.split("/").pop() ?? "";
      const caption = girlChildCaptionFromPath(path);
      return [
        {
          id: girlChildPhotoId(slug, file),
          file,
          src,
          alt: caption,
          caption,
        },
      ];
    })
    .sort((a, b) => a.file.localeCompare(b.file));
}

export function highlightsForSchool(school: GirlChildSchool): GirlChildPhoto[] {
  const photos = photosForSchool(school.slug);
  const chosen = school.highlightFiles.flatMap((item) => {
    const photo = photos.find((entry) => entry.file === item.file);
    return photo ? [{ ...photo, caption: item.caption, alt: photo.alt }] : [];
  });
  return chosen.length > 0 ? chosen : photos.slice(0, 3);
}

export function heroPhotoForSchool(school: GirlChildSchool): GirlChildPhoto | undefined {
  const photos = photosForSchool(school.slug);
  return photos.find((photo) => photo.file === school.heroFile) ?? photos[0];
}
