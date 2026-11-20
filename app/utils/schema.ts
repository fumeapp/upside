import type { AccordionItem } from "@nuxt/ui";

export const buildFaqSchema = (items: AccordionItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items
    .filter((item) => Boolean(item.label && item.content))
    .map((item) => ({
      "@type": "Question",
      name: item.label,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.content,
      },
    })),
});

export const buildProductSchema = (options: {
  name: string;
  description: string;
  image: string;
  url: string;
  sku: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: options.name,
  description: options.description,
  image: options.image,
  url: options.url,
  sku: options.sku,
  brand: {
    "@type": "Brand",
    name: "Stiltz",
  },
  seller: {
    "@type": "HomeAndConstructionBusiness",
    name: "Upside Home Lifts",
    telephone: "+1-949-418-9517",
    url: "https://upsidelifts.com",
  },
});
