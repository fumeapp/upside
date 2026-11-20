<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const { openConsultation } = useConsultationModal();

useSeoMeta({
  title: "Stiltz Home Elevators Across Orange County, CA",
  ogTitle: "Orange County Stiltz Home Elevator Dealer & Irvine Showroom | Upside Home Lifts",
  description:
    "Authorized Stiltz Homelifts dealer serving Irvine, Newport Beach, Laguna Woods, Mission Viejo, Laguna Niguel, Dana Point, San Clemente, Yorba Linda, Huntington Beach, and all of Orange County.",
});

const heroLinks: ButtonProps[] = [
  {
    label: "Book Free OC Home Survey",
    size: "xl",
    color: "primary",
    trailingIcon: "i-lucide-arrow-right",
    onClick: () => openConsultation(),
  },
  {
    label: "Call 949.418.9517",
    to: "tel:+19494189517",
    size: "xl",
    color: "neutral",
    variant: "subtle",
    icon: "i-lucide-phone",
  },
];

const ocRegions = [
  {
    region: "Central OC & Irvine Showroom",
    badge: "Showroom HQ",
    badgeColor: "primary" as const,
    description:
      "Visit our showroom at 17155 Von Karman Ave #101 in Irvine to test-ride a working Stiltz Homelift in person.",
    cities: ["Irvine", "Tustin", "Costa Mesa", "Santa Ana", "Orange", "Villa Park"],
  },
  {
    region: "Coastal Orange County",
    badge: "Multi-Story & View Homes",
    badgeColor: "secondary" as const,
    description:
      "Clear panoramic Stiltz lifts preserve ocean light and coastal sightlines while connecting living levels effortlessly.",
    cities: [
      "Newport Beach",
      "Corona del Mar",
      "Laguna Beach",
      "Dana Point",
      "San Clemente",
      "Huntington Beach",
    ],
  },
  {
    region: "South County & 55+ Communities",
    badge: "Aging in Place",
    badgeColor: "primary" as const,
    description:
      "Helping homeowners across South OC and active adult communities stay comfortably in the multi-story homes they love.",
    cities: [
      "Laguna Woods",
      "Mission Viejo",
      "Laguna Niguel",
      "Aliso Viejo",
      "Lake Forest",
      "Rancho Santa Margarita",
      "San Juan Capistrano",
    ],
  },
  {
    region: "North Orange County",
    badge: "Retrofits & Custom Builds",
    badgeColor: "secondary" as const,
    description:
      "Retrofitting existing family homes and collaborating with custom builders and architects across North OC.",
    cities: ["Yorba Linda", "Anaheim Hills", "Fullerton", "Brea", "Placentia", "Fountain Valley"],
  },
];
</script>

<template>
  <UPage>
    <UPageHero
      headline="Local Orange County Dealer · CA License #1164819"
      title="Stiltz Home Elevators Installed Across Orange County"
      description="Based right in Irvine, Upside Home Lifts provides free in-home surveys, private showroom test rides, and local installation and warranty support throughout Orange County."
      :links="heroLinks"
      :ui="{
        container: 'min-w-0 py-12 sm:py-16 lg:py-20',
      }"
    >
      <template #top>
        <HeroBackground />
      </template>
    </UPageHero>

    <UPageSection
      headline="Communities We Serve"
      title="Local service from Newport Beach to Yorba Linda"
      description="Work directly with local owner Jeff Cullen—never an out-of-state call center."
    >
      <div class="grid gap-6 md:grid-cols-2">
        <UPageCard
          v-for="area in ocRegions"
          :key="area.region"
          variant="subtle"
          :ui="{ container: 'h-full', wrapper: 'h-full items-stretch' }"
        >
          <div class="flex h-full flex-col justify-between space-y-4">
            <div class="space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="text-highlighted text-lg font-bold tracking-tight">{{ area.region }}</h3>
                <UBadge :label="area.badge" :color="area.badgeColor" variant="subtle" size="sm" />
              </div>
              <p class="text-muted text-sm leading-relaxed">{{ area.description }}</p>
            </div>

            <div class="flex flex-wrap gap-1.5 pt-2">
              <UBadge
                v-for="city in area.cities"
                :key="city"
                :label="city"
                color="neutral"
                variant="outline"
                size="sm"
                icon="i-lucide-map-pin"
              />
            </div>
          </div>
        </UPageCard>
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection id="consultation">
      <div
        class="border-default bg-default grid overflow-hidden rounded-2xl border shadow-xl lg:grid-cols-12"
      >
        <div
          class="bg-neutral-100/90 dark:bg-neutral-900/90 flex flex-col justify-between space-y-6 p-5 sm:p-8 lg:col-span-5 lg:p-10"
        >
          <div class="space-y-4">
            <UBadge
              label="Irvine Showroom · By Appointment"
              color="primary"
              variant="subtle"
              size="md"
              icon="i-lucide-map-pin"
            />
            <h2 class="text-highlighted text-2xl font-bold tracking-tight sm:text-3xl">
              Schedule Your Free Orange County Survey
            </h2>
            <p class="text-muted text-sm leading-relaxed sm:text-base">
              Whether you're in Irvine, Newport Beach, Laguna Woods, Mission Viejo, or anywhere
              nearby, Jeff Cullen will visit your home or welcome you to our Irvine showroom.
            </p>
            <div class="flex flex-wrap gap-2 pt-1">
              <UButton label="Stiltz Duo Alta" to="/duo-alta" color="neutral" variant="outline" size="sm" />
              <UButton label="Stiltz Trio Alta" to="/trio-alta" color="neutral" variant="outline" size="sm" />
              <UButton label="OC Pricing Guide" to="/cost" color="neutral" variant="outline" size="sm" />
            </div>
          </div>
          <div class="border-default space-y-2 border-t pt-5 text-sm">
            <a
              href="tel:+19494189517"
              class="text-primary inline-flex items-center gap-1.5 font-semibold hover:underline"
            >
              <UIcon name="i-lucide-phone" class="size-4" />
              949.418.9517
            </a>
            <p class="text-muted text-xs">
              17155 Von Karman Ave #101, Irvine, CA 92614 · License #1164819
            </p>
          </div>
        </div>

        <div class="p-5 sm:p-8 lg:col-span-7 lg:p-10">
          <ConsultationForm />
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
