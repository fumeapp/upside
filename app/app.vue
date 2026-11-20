<script lang="ts" setup>
const colorMode = useColorMode();
const color = computed(() => (colorMode.value === "dark" ? "#181d22" : "#f6f7f8"));
const siteUrl = "https://upsidelifts.com";
const ogImageUrl = `${siteUrl}/images/home/hero-alta.jpg`;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Upside Home Lifts",
  url: siteUrl,
  image: ogImageUrl,
  telephone: "+1-949-418-9517",
  email: "Jeff@UpsideLifts.com",
  description:
    "Authorized Stiltz Homelifts dealer in Irvine, CA serving Orange County and Southern California. Shaftless Stiltz Duo Alta and Trio Alta home elevators.",
  founder: {
    "@type": "Person",
    name: "Jeff Cullen",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "17155 Von Karman Ave #101",
    addressLocality: "Irvine",
    addressRegion: "CA",
    postalCode: "92614",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Orange County, CA",
  },
  identifier: "CA License #1164819",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Stiltz Homelifts",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Stiltz Duo Alta Home Elevator",
          brand: { "@type": "Brand", name: "Stiltz" },
          description:
            "Compact 2-person shaftless home elevator with 8.5 sq ft footprint, 375 lb weight limit, and up to 14 ft travel.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Stiltz Trio Alta Home Elevator",
          brand: { "@type": "Brand", name: "Stiltz" },
          description:
            "Wheelchair-accessible shaftless home elevator with 15 sq ft footprint, up to 550 lb weight limit, and up to 19.5 ft travel.",
        },
      },
    ],
  },
};

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "canonical", href: siteUrl },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(localBusinessSchema),
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} — Upside Home Lifts`
      : "Upside Home Lifts — Authorized Stiltz Homelifts Dealer in Orange County";
  },
  ogSiteName: "Upside Home Lifts",
  ogType: "website",
  ogUrl: siteUrl,
  ogImage: ogImageUrl,
  ogImageWidth: 1200,
  ogImageHeight: 896,
  ogImageAlt: "Stiltz Alta home elevator installed in a sunlit Orange County living room",
  twitterCard: "summary_large_image",
  twitterImage: ogImageUrl,
});
</script>

<template>
  <NuxtLoadingIndicator
    color="
      repeating-linear-gradient(
        to right,
        var(--ui-color-primary-500) 0%,
        var(--ui-color-secondary-500) 50%,
        var(--ui-color-primary-600) 100%
      )
    "
  />
  <UApp class="overlay bg-neutral-50 dark:bg-neutral-950 min-h-screen overflow-x-clip">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
.overlay {
  background-size: 100px 100px;
  background-image:
    linear-gradient(to right, var(--ui-color-neutral-200) 0.5px, transparent 0.5px),
    linear-gradient(to bottom, var(--ui-color-neutral-200) 0.5px, transparent 0.5px);
}

.dark {
  .overlay {
    background-image:
      linear-gradient(to right, var(--ui-color-neutral-900) 0.5px, transparent 0.5px),
      linear-gradient(to bottom, var(--ui-color-neutral-900) 0.5px, transparent 0.5px);
  }
}
</style>
