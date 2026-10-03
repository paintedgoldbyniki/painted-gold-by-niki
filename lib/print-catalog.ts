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
  { id: "golden-poise", title: "Golden Poise", image: "/artworks/golden-poise.png", variants: portraitSizes },
  { id: "bridal-legacy", title: "Bridal Legacy", image: "/artworks/bridal-legacy.png", variants: portraitSizes },
  { id: "quiet-elegance", title: "Quiet Elegance", image: "/artworks/quiet-elegance.png", variants: portraitSizes },
  { id: "crown-within", title: "Crown Within", image: "/artworks/crown-within.png", variants: portraitSizes },
];

export function getPrintSelection(artworkId: string, variantId: string) {
  const artwork = printCatalog.find((item) => item.id === artworkId);
  const variant = artwork?.variants.find((item) => item.id === variantId);
  return artwork && variant ? { artwork, variant } : null;
}
