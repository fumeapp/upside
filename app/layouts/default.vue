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
    label: "Why Stiltz",
    icon: "i-lucide-sparkles",
    to: "/#why-stiltz",
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
    label: "Showroom",
    icon: "i-lucide-map-pin",
    to: "/#showroom",
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
    label: "Stiltz Models",
    children: [
      { label: "Stiltz Duo+", to: "/#models", active: false },
      { label: "Stiltz Trio+", to: "/#models", active: false },
      { label: "Stiltz Vista", to: "/#models", active: false },
      { label: "Compare Specifications", to: "/#specs", active: false },
    ],
  },
  {
    label: "Why Upside",
    children: [
      { label: "Future-Proof Your Home", to: "/#why-stiltz", active: false },
      { label: "For Architects & Builders", to: "/#process", active: false },
      { label: "Irvine Showroom", to: "/#showroom", active: false },
      { label: "Homeowner FAQ", to: "/#faq", active: false },
    ],
  },
  {
    label: "Contact Jeff Cullen",
    children: [
      { label: "Call 949.235.4536", to: "tel:+19492354536", active: false },
      { label: "Jeff@UpsideLifts.com", to: "mailto:Jeff@UpsideLifts.com", active: false },
      {
        label: "17155 Von Karman Ave #101, Irvine, CA",
        to: "https://maps.google.com/?q=17155+Von+Karman+Ave+%23101,+Irvine,+CA+92614",
        target: "_blank",
        active: false,
      },
      { label: "OC 55+ Showroom Special", to: "/#showroom", active: false },
    ],
  },
];
</script>

<template>
  <UHeader v-model:open="open" title="Upside Home Lifts">
    <template #title>
      <Logo />
    </template>

    <UNavigationMenu :items="navItems" variant="link" />

    <template #right>
      <UColorModeButton />
      <UButton
        label="949.235.4536"
        icon="i-lucide-phone"
        color="neutral"
        variant="outline"
        to="tel:+19492354536"
        class="hidden xl:inline-flex"
      />
      <UButton
        label="Book Showroom Visit"
        color="primary"
        variant="solid"
        trailing-icon="i-lucide-arrow-right"
        to="/#showroom"
        class="hidden lg:inline-flex"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="navItems" orientation="vertical" class="-mx-2.5" />
      <USeparator class="my-6" />
      <div class="space-y-3">
        <UButton
          label="Call 949.235.4536"
          icon="i-lucide-phone"
          color="neutral"
          variant="subtle"
          to="tel:+19492354536"
          block
        />
        <UButton
          label="Book Showroom Visit"
          color="primary"
          variant="solid"
          trailing-icon="i-lucide-arrow-right"
          to="/#showroom"
          block
        />
      </div>
    </template>
  </UHeader>

  <UMain>
    <slot />
  </UMain>

  <div class="bg-neutral-700 text-white dark:bg-neutral-900">
    <UContainer class="py-6">
      <div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p class="text-xl font-bold tracking-tight sm:text-2xl">
            <span class="text-primary-400">Call</span>
            <a href="tel:+19492354536" class="ml-2 hover:underline">949 235 4536</a>
          </p>
          <p class="mt-0.5 text-sm text-neutral-200">
            <span class="text-primary-400 font-medium">Irvine Showroom:</span>
            17155 Von Karman Ave #101, Irvine, CA 92614 ·
            <a href="mailto:Jeff@UpsideLifts.com" class="underline-offset-2 hover:underline">
              Jeff@UpsideLifts.com
            </a>
          </p>
        </div>
        <Logo inverted />
      </div>
    </UContainer>
  </div>

  <UFooter>
    <template #top>
      <UContainer>
        <UFooterColumns :columns="footerColumns">
          <template #left>
            <div class="max-w-xs space-y-3">
              <Logo />
              <p class="text-muted text-sm leading-relaxed">
                Authorized Stiltz Homelifts dealer serving Orange County and Southern California.
                Visit our Irvine showroom or schedule a complimentary in-home assessment with Jeff
                Cullen.
              </p>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        © {{ new Date().getFullYear() }} Upside Home Lifts. All rights reserved.
      </p>
    </template>

    <template #right>
      <UBadge
        label="Authorized Stiltz Homelifts Dealer · Irvine, CA"
        color="primary"
        variant="subtle"
        size="sm"
        icon="i-lucide-badge-check"
      />
    </template>
  </UFooter>
</template>
