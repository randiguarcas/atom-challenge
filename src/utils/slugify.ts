import slugify from "slugify";

export default function createSlug(label: string) {
  return slugify(label, {
    replacement: "-",
    remove: undefined,
    lower: false,
    strict: false,
    locale: "vi",
    trim: true,
  });
}
