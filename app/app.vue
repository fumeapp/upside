<script lang="ts" setup>
const colorMode = useColorMode();
const color = computed(() => (colorMode.value === "dark" ? "#181d22" : "#f6f7f8"));

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
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
  <UApp class="overlay bg-neutral-50 dark:bg-neutral-950 min-h-screen">
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
