<script setup lang="ts">
import type { AccordionItem, ButtonProps, PageFeatureProps } from "@nuxt/ui";

const { openConsultation } = useConsultationModal();

useSeoMeta({
  title: "Stiltz Duo Alta Home Elevator in Orange County",
  ogTitle: "Stiltz Duo Alta — Compact 2-Person Home Elevator | Upside Home Lifts",
  description:
    "Explore the Stiltz Duo Alta compact 2-person shaftless home elevator in Orange County. 8.5 sq ft footprint, 375 lb capacity, up to 14 ft travel, and 1–2 day install. Visit our Irvine showroom.",
  ogImage: "https://upsidelifts.com/images/home/duo-alta-v2.jpg",
});

const heroLinks: ButtonProps[] = [
  {
    label: "Get Free Duo Alta Estimate",
    size: "xl",
    color: "primary",
    trailingIcon: "i-lucide-arrow-right",
    onClick: () => openConsultation({ product: "Stiltz Duo Alta (Compact 2-Person)" }),
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

const quickSpecs = [
  { label: "Footprint", value: "8.5 sq ft (31 7/8″ × 41 1/4″)" },
  { label: "Weight Limit", value: "375 lbs / 170 kg (2 passengers)" },
  { label: "Max Travel Height", value: "Up to 14 ft (2 floors)" },
  { label: "Internal Cabin", value: "26 1/2″ deep × 30 11/16″ wide" },
  { label: "Entrance Width", value: "23 1/8″ (587 mm)" },
  { label: "Min Upstairs Ceiling", value: "93″ (2360 mm) · 4″ reduced cab available" },
  { label: "Drive & Power", value: "Whisper-quiet self-contained electric · 220V" },
  { label: "Typical Lift Install", value: "1–2 days after aperture framing" },
];

const duoHighlights: PageFeatureProps[] = [
  {
    title: "Fits Where Traditional Elevators Can't",
    description:
      "At 8.5 sq ft with a softly curved D-shaped footprint, the Duo Alta tucks cleanly beside a staircase, inside stacked closets, or in a living room alcove.",
    icon: "i-lucide-maximize-2",
  },
  {
    title: "No Shaft, No Pit, No Load-Bearing Walls",
    description:
      "Twin self-supporting vertical rails carry the entire load directly into the floor below—eliminating masonry shafts and machine rooms.",
    icon: "i-lucide-columns-2",
  },
  {
    title: "Clear Panoramic Glazing & LED Canopy",
    description:
      "Transparent curved polycarbonate walls preserve daylight and sightlines while recessed ceiling LEDs softly illuminate every ride.",
    icon: "i-lucide-sun",
  },
  {
    title: "Battery Backup & Full Safety Sensors",
    description:
      "Top-and-bottom obstruction sensors pause travel instantly if anything touches the cabin, and battery backup lowers you safely during power outages.",
    icon: "i-lucide-shield-check",
  },
];

const duoFaq: AccordionItem[] = [
  {
    label: "Will the Stiltz Duo Alta fit in a typical Orange County 2-story home?",
    icon: "i-lucide-home",
    content:
      "Yes. With an external footprint of 31 7/8″ × 41 1/4″ (8.5 sq ft) and up to 14 ft of travel, the Duo Alta fits comfortably in most two-story residences across Irvine, Newport Beach, Laguna Woods, and Mission Viejo—without sacrificing a full room.",
  },
  {
    label: "What if my upstairs ceiling is slightly under 93 inches?",
    icon: "i-lucide-ruler",
    content:
      "All Stiltz Homelift cars can be special-ordered with a cab height reduced by 4″ (100 mm) to accommodate lower upstairs ceilings. Jeff will measure exact floor-to-floor and ceiling heights during your free home survey.",
  },
  {
    label: "Should I choose the Duo Alta or Trio Alta?",
    icon: "i-lucide-arrow-left-right",
    content:
      "Choose the Duo Alta if you want the smallest footprint for 1–2 standing passengers (or a small folding seat/walker). If you want space for a full-size wheelchair, a Thru-Car pass-through door, or travel height above 14 ft (up to 19.5 ft), choose the Stiltz Trio Alta.",
  },
];
</script>

<template>
  <UPage>
    <UPageHero
      headline="Stiltz Homelifts · Compact 2-Person Model"
      title="Stiltz Duo Alta"
      description="The sleek, curved shaftless home elevator engineered to fit almost anywhere—8.5 sq ft footprint, 375 lb capacity, and up to 14 feet of whisper-quiet travel."
      orientation="horizontal"
      :links="heroLinks"
      :ui="{
        container: 'min-w-0 py-12 sm:py-16 lg:py-20',
        wrapper: 'min-w-0',
      }"
    >
      <template #top>
        <HeroBackground />
      </template>

      <UPageCard
        variant="subtle"
        class="w-full min-w-0 overflow-hidden shadow-xl"
        :ui="{ container: 'w-full min-w-0 p-3 sm:p-4', wrapper: 'w-full min-w-0 items-stretch' }"
      >
        <div class="space-y-3">
          <div class="overflow-hidden rounded-lg">
            <img
              src="/images/home/duo-alta-v2.jpg"
              alt="Stiltz Duo Alta compact 2-person home elevator beside a sunlit oak staircase"
              class="aspect-4/3 w-full object-cover"
              loading="eager"
            />
          </div>
          <div class="flex flex-wrap gap-2">
            <UBadge label="8.5 sq ft Footprint" color="primary" variant="subtle" size="sm" />
            <UBadge label="375 lb Limit" color="neutral" variant="outline" size="sm" />
            <UBadge label="Up to 14 ft Travel" color="neutral" variant="outline" size="sm" />
            <UBadge label="Veteran Special Eligible" color="secondary" variant="subtle" size="sm" />
          </div>
        </div>
      </UPageCard>
    </UPageHero>

    <UPageSection
      headline="Why Homeowners Choose Duo Alta"
      title="Architectural elegance in our smallest footprint"
      description="Designed to blend quietly into hallways, foyers, closets, and open living spaces."
      :features="duoHighlights"
    />

    <USeparator />

    <UPageSection
      id="dimensions"
      headline="Official Dimensions & Specifications"
      title="Stiltz Duo Alta Footprint & Technical Specs"
      description="Review exact external and internal cabin measurements before your complimentary in-home assessment."
    >
      <div class="grid gap-6 lg:grid-cols-12">
        <UPageCard variant="subtle" class="lg:col-span-6">
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-2">
              <h3 class="text-highlighted text-lg font-bold">Duo Alta Footprint Diagram</h3>
              <UBadge label="8.5 sq ft · 375 lb" color="primary" variant="subtle" size="sm" />
            </div>
            <div
              class="flex min-h-72 items-center justify-center rounded-xl border border-neutral-200 bg-white p-4 sm:p-6"
            >
              <img
                src="/images/specs/duo-alta-footprint.jpg"
                alt="Stiltz Duo Alta official footprint dimension diagram"
                class="max-h-80 w-auto object-contain"
              />
            </div>
            <p class="text-muted text-xs leading-relaxed">
              Dimensions are for general reference and are not to be used for construction purposes.
              4″ reduced cab height available by special order.
            </p>
          </div>
        </UPageCard>

        <UPageCard variant="subtle" class="lg:col-span-6">
          <div class="flex h-full flex-col justify-between space-y-6">
            <div class="space-y-4">
              <h3 class="text-highlighted text-lg font-bold">Technical Specifications</h3>
              <dl class="divide-default divide-y text-sm">
                <div
                  v-for="row in quickSpecs"
                  :key="row.label"
                  class="flex items-baseline justify-between gap-4 py-2.5"
                >
                  <dt class="text-muted shrink-0 font-medium">{{ row.label }}</dt>
                  <dd class="text-highlighted text-right font-medium">{{ row.value }}</dd>
                </div>
              </dl>
            </div>

            <div class="flex flex-wrap gap-3">
              <UButton
                label="Compare With Trio Alta"
                to="/trio-alta"
                color="neutral"
                variant="outline"
                trailing-icon="i-lucide-arrow-right"
              />
              <UButton
                label="Read OC Pricing Guide"
                to="/cost"
                color="primary"
                variant="subtle"
                trailing-icon="i-lucide-arrow-right"
              />
            </div>
          </div>
        </UPageCard>
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection
      headline="Duo Alta FAQ"
      title="Common questions about the Stiltz Duo Alta"
    >
      <div class="mx-auto w-full max-w-3xl">
        <UAccordion :items="duoFaq" />
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection>
      <UPageCTA
        title="See the Stiltz Duo Alta in person at our Irvine showroom"
        description="Call Jeff Cullen at 949.418.9517 or request a free, no-obligation in-home survey anywhere in Orange County."
        variant="subtle"
        :links="[
          {
            label: 'Get Free Duo Alta Estimate',
            color: 'primary',
            variant: 'solid',
            size: 'xl',
            trailingIcon: 'i-lucide-arrow-right',
            onClick: () => openConsultation({ product: 'Stiltz Duo Alta (Compact 2-Person)' }),
          },
          {
            label: 'Call 949.418.9517',
            to: 'tel:+19494189517',
            color: 'neutral',
            variant: 'subtle',
            size: 'xl',
            icon: 'i-lucide-phone',
          },
        ]"
      />
    </UPageSection>
  </UPage>
</template>
