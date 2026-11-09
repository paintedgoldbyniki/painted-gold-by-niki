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
  printAssetUrl?: string;
  variants: PrintVariant[];
};

const portraitSizes: PrintVariant[] = [
  { id: "small", label: "12 × 16 in", priceCad: 95, prodigiSku: process.env.PRODIGI_SKU_12X16 },
  { id: "medium", label: "18 × 24 in", priceCad: 165, prodigiSku: process.env.PRODIGI_SKU_18X24 },
  { id: "large", label: "24 × 32 in", priceCad: 245, prodigiSku: process.env.PRODIGI_SKU_24X32 },
];

export const printCatalog: PrintArtwork[] = [
  { id: "her-grace", title: "Her Grace", image: "/artworks/her-grace.jpg", printAssetUrl: process.env.PRINT_ASSET_HER_GRACE, variants: portraitSizes },
  { id: "her-legacy", title: "Her Legacy", image: "/artworks/her-legacy.jpg", printAssetUrl: process.env.PRINT_ASSET_HER_LEGACY, variants: portraitSizes },
  { id: "her-allure", title: "Her Allure", image: "/artworks/her-allure.jpg", printAssetUrl: process.env.PRINT_ASSET_HER_ALLURE, variants: portraitSizes },
  { id: "her-sovereignty", title: "Her Sovereignty", image: "/artworks/her-sovereignty.jpg", printAssetUrl: process.env.PRINT_ASSET_HER_SOVEREIGNTY, variants: portraitSizes },
  { id: "her-roots", title: "Her Roots", image: "/artworks/her-roots.jpg", printAssetUrl: process.env.PRINT_ASSET_HER_ROOTS, variants: portraitSizes },
  { id: "her-spirit", title: "Her Spirit", image: "/artworks/her-spirit.jpg", printAssetUrl: process.env.PRINT_ASSET_HER_SPIRIT, variants: portraitSizes },
  { id: "her-courage", title: "Her Courage", image: "/artworks/her-courage.jpg", printAssetUrl: process.env.PRINT_ASSET_HER_COURAGE, variants: portraitSizes },
  { id: "her-reverence", title: "Her Reverence", image: "/artworks/her-reverence.jpg", printAssetUrl: process.env.PRINT_ASSET_HER_REVERENCE, variants: portraitSizes },
  { id: "her-unapologetic", title: "HER, Unapologetic", image: "/artworks/her-unapologetic.jpg", printAssetUrl: process.env.PRINT_ASSET_HER_UNAPOLOGETIC, variants: portraitSizes },
];

export function getPrintSelection(artworkId: string, variantId: string) {
  const artwork = printCatalog.find((item) => item.id === artworkId);
  const variant = artwork?.variants.find((item) => item.id === variantId);
  return artwork && variant ? { artwork, variant } : null;
}
