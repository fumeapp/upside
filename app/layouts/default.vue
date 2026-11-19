<script setup lang="ts">
import type { FooterColumn, NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();
const open = ref(false);

watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);

const navItems = computed<NavigationMenuItem[]>(() => [
  {
    label: "Why Upside",
    icon: "i-lucide-sparkles",
    to: "/#why-upside",
    active: false,
  },
  {
    label: "Models",
    icon: "i-lucide-layers",
    to: "/#models",
    active: false,
  },
  {
    label: "Process",
    icon: "i-lucide-hammer",
    to: "/#process",
    active: false,
  },
  {
    label: "Specs",
    icon: "i-lucide-ruler",
    to: "/#specs",
    active: false,
  },
  {
    label: "FAQ",
    icon: "i-lucide-circle-help",
    to: "/#faq",
    active: false,
  },
]);

const footerColumns: FooterColumn[] = [
  {
    label: "Home Lifts",
    children: [
      { label: "Upside Duo", to: "/#models", active: false },
      { label: "Upside Trio", to: "/#models", active: false },
      { label: "Upside Vista", to: "/#models", active: false },
      { label: "Compare Specs", to: "/#specs", active: false },
    ],
  },
  {
    label: "Why Shaftless",
    children: [
      { label: "Dual-Rail Engineering", to: "/#why-upside", active: false },
      { label: "Installation Process", to: "/#process", active: false },
      { label: "Safety & Battery Backup", to: "/#why-upside", active: false },
      { label: "Homeowner FAQ", to: "/#faq", active: false },
    ],
  },
  {
    label: "Get Started",
    children: [
      { label: "Book a Free Survey", to: "/#contact", active: false },
      {
        label: "Request a Brochure",
        to: "mailto:hello@upsidelifts.com?subject=Upside%20Lifts%20Brochure%20Request",
        active: false,
      },
      {
        label: "Contact Our Team",
        to: "mailto:hello@upsidelifts.com?subject=Upside%20Lifts%20Inquiry",
        active: false,
      },
    ],
  },
];
</script>

<template>
  <UHeader v-model:open="open" title="Upside Lifts">
    <template #title>
      <Logo />
    </template>

    <UNavigationMenu :items="navItems" variant="link" />

    <template #right>
      <UColorModeButton />
      <UButton
        label="Book Free Survey"
        color="primary"
        variant="solid"
        trailing-icon="i-lucide-arrow-right"
        to="/#contact"
        class="hidden lg:inline-flex"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="navItems" orientation="vertical" class="-mx-2.5" />
      <USeparator class="my-6" />
      <UButton
        label="Book Free Survey"
        color="primary"
        variant="solid"
        trailing-icon="i-lucide-arrow-right"
        to="/#contact"
        block
      />
    </template>
  </UHeader>

  <UMain>
    <slot />
  </UMain>

  <USeparator icon="i-lucide-arrow-up-down" />

  <UFooter>
    <template #top>
      <UContainer>
        <UFooterColumns :columns="footerColumns">
          <template #left>
            <div class="max-w-xs space-y-3">
              <Logo />
              <p class="text-muted text-sm leading-relaxed">
                Thoughtfully engineered shaftless home elevators designed to fit seamlessly into the
                home you already love—no shaft, no pit, and installed in days.
              </p>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        © {{ new Date().getFullYear() }} Upside Lifts. All rights reserved.
      </p>
    </template>

    <template #right>
      <UBadge
        label="No Shaft · No Pit · Standard Power"
        color="secondary"
        variant="subtle"
        size="sm"
        icon="i-lucide-shield-check"
      />
    </template>
  </UFooter>
</template>
