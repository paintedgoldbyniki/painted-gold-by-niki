export type PrintVariant = {
  id: string;
  label: string;
  priceCad: number;
  prodigiSku?: string;
};

export type PrintArtwork = {
  id: string;
  title: string;
  image: string;
  variants: PrintVariant[];
};

const portraitSizes: PrintVariant[] = [
  { id: "small", label: "12 × 16 in", priceCad: 95, prodigiSku: process.env.PRODIGI_SKU_12X16 },
  { id: "medium", label: "18 × 24 in", priceCad: 165, prodigiSku: process.env.PRODIGI_SKU_18X24 },
  { id: "large", label: "24 × 32 in", priceCad: 245, prodigiSku: process.env.PRODIGI_SKU_24X32 },
];

export const printCatalog: PrintArtwork[] = [
  { id: "her-grace", title: "Her Grace", image: "/artworks/her-grace.jpg", variants: portraitSizes },
  { id: "her-legacy", title: "Her Legacy", image: "/artworks/her-legacy.jpg", variants: portraitSizes },
  { id: "her-allure", title: "Her Allure", image: "/artworks/her-allure.jpg", variants: portraitSizes },
  { id: "her-sovereignty", title: "Her Sovereignty", image: "/artworks/her-sovereignty.jpg", variants: portraitSizes },
  { id: "her-roots", title: "Her Roots", image: "/artworks/her-roots.jpg", variants: portraitSizes },
  { id: "her-spirit", title: "Her Spirit", image: "/artworks/her-spirit.jpg", variants: portraitSizes },
  { id: "her-courage", title: "Her Courage", image: "/artworks/her-courage.jpg", variants: portraitSizes },
  { id: "her-reverence", title: "Her Reverence", image: "/artworks/her-reverence.jpg", variants: portraitSizes },
  { id: "her-unapologetic", title: "HER, Unapologetic", image: "/artworks/her-unapologetic.jpg", variants: portraitSizes },
];

export function getPrintSelection(artworkId: string, variantId: string) {
  const artwork = printCatalog.find((item) => item.id === artworkId);
  const variant = artwork?.variants.find((item) => item.id === variantId);
  return artwork && variant ? { artwork, variant } : null;
}
