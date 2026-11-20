<script setup lang="ts">
import type { AccordionItem, ButtonProps, TableColumn } from "@nuxt/ui";

const { openConsultation } = useConsultationModal();

useSeoMeta({
  title: "Stiltz Duo Alta vs. Trio Alta — Side-by-Side Comparison",
  ogTitle: "Stiltz Duo Alta vs. Trio Alta: Which Home Elevator Fits Your Home?",
  description:
    "Compare Stiltz Duo Alta (8.5 sq ft, 375 lb, 14 ft max travel) vs. Stiltz Trio Alta (15 sq ft, up to 550 lb*, 19.5 ft max travel, wheelchair & Thru-Car) with official footprint diagrams.",
});

const heroLinks: ButtonProps[] = [
  {
    label: "Help Me Choose (Free Survey)",
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

interface ComparisonRow {
  spec: string;
  duo: string;
  trio: string;
}

const columns: TableColumn<ComparisonRow>[] = [
  { accessorKey: "spec", header: "Specification" },
  { accessorKey: "duo", header: "Stiltz Duo Alta" },
  { accessorKey: "trio", header: "Stiltz Trio Alta / Thru-Car" },
];

const rows: ComparisonRow[] = [
  { spec: "Best For", duo: "Tightest spaces · 1–2 passengers", trio: "Wheelchairs, walkers & up to 3 passengers" },
  { spec: "Footprint", duo: "8.5 sq ft (31 7/8″ × 41 1/4″)", trio: "15 sq ft (50 3/8″ × 41 1/4″)" },
  { spec: "Internal Cabin", duo: "26 1/2″ deep × 30 11/16″ wide", trio: "45 3/16″ deep × 30 7/16″ wide" },
  { spec: "Entrance Width", duo: "23 1/8″ (587 mm)", trio: "31 1/2″ (800 mm) zero-threshold" },
  { spec: "Weight Limit", duo: "375 lbs / 170 kg", trio: "550 lbs / 250 kg* (500 lbs local code)" },
  { spec: "Max Travel Height", duo: "Up to 14 ft", trio: "Up to 19.5 ft (high ceilings OK)" },
  { spec: "Min Upstairs Ceiling", duo: "93″ (2360 mm)", trio: "96″ (2438 mm)" },
  { spec: "Thru-Car (Dual Entry)", duo: "Standard single entry", trio: "Available (roll straight in & out)" },
  { spec: "Shaft / Pit / Hydraulics", duo: "None — self-supporting dual rails", trio: "None — self-supporting dual rails" },
  { spec: "Typical Lift Install", duo: "1–2 days after aperture prep", trio: "1–2 days after aperture prep" },
];

const duoReasons = [
  "You want the smallest possible footprint (8.5 sq ft — similar to a single armchair).",
  "You plan to tuck the lift into a hallway alcove, stairwell void, or stacked closets.",
  "Your floor-to-floor travel height is 14 feet or less.",
  "Primary riders are 1–2 standing passengers (or using a compact walker or folding seat).",
];

const trioReasons = [
  "You want full-sized wheelchair or rollator accessibility now—or want maximum future-proofing.",
  "You want a Thru-Car configuration (enter from one side downstairs, exit the opposite side upstairs).",
  "Your home has high ceilings or a double-height foyer requiring travel between 14 ft and 19.5 ft.",
  "You want room for up to 3 passengers, luggage, or heavier loads (up to 550 lbs / 500 lbs local code).",
];

const faqItems: AccordionItem[] = [
  {
    label: "Do both Duo Alta and Trio Alta require a shaft or concrete pit?",
    icon: "i-lucide-columns-2",
    content:
      "No. Both models ride on Stiltz's self-supporting dual-rail system, carrying the structural load straight down into the floor—no masonry shaft, pit excavation, or separate machine room is required.",
  },
  {
    label: "Can I test both models before deciding?",
    icon: "i-lucide-map-pin",
    content:
      "Yes! Call Jeff Cullen at 949.418.9517 to schedule a private appointment at our Irvine showroom (17155 Von Karman Ave #101) and see exact dimensions, door widths, and finishes in person.",
  },
  {
    label: "What if my floor-to-floor height is over 14 feet?",
    icon: "i-lucide-arrow-up-down",
    content:
      "If your home's travel height exceeds 14 feet—common in Orange County homes with 10-foot+ ceilings or vaulted entries—the Stiltz Trio Alta supports travel up to 19.5 feet.",
  },
  {
    label: "What if my upstairs ceiling is slightly shorter than 93″ or 96″?",
    icon: "i-lucide-ruler",
    content:
      "Both Duo Alta and Trio Alta can be special-ordered with a cabin height reduced by 4″ (100 mm) to accommodate lower second-story ceilings.",
  },
];

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(buildFaqSchema(faqItems)),
    },
  ],
});
</script>

<template>
  <UPage>
    <UPageHero
      headline="Stiltz Buyer Comparison Guide"
      title="Stiltz Duo Alta vs. Stiltz Trio Alta"
      description="Both models give you shaftless, whisper-quiet vertical mobility installed in 1–2 days. Here is how they compare on footprint, wheelchair access, travel height, and placement."
      :links="heroLinks"
      :ui="{ container: 'min-w-0 py-12 sm:py-16 lg:py-20' }"
    >
      <template #top>
        <HeroBackground />
      </template>
    </UPageHero>

    <UPageSection
      headline="At a Glance"
      title="Which Stiltz Alta fits your home?"
    >
      <div class="grid gap-6 md:grid-cols-2">
        <UPageCard variant="subtle" :ui="{ container: 'h-full', wrapper: 'h-full items-stretch' }">
          <div class="flex h-full flex-col justify-between gap-5">
            <div class="space-y-4">
              <div class="flex items-center justify-between gap-2">
                <h2 class="text-highlighted text-xl font-bold">Choose Stiltz Duo Alta if…</h2>
                <UBadge label="8.5 sq ft · 14 ft max" color="primary" variant="subtle" size="sm" />
              </div>
              <div class="overflow-hidden rounded-lg">
                <img
                  src="/images/home/duo-alta-v2.jpg"
                  alt="Stiltz Duo Alta compact 2-person home elevator"
                  class="aspect-4/3 w-full object-cover"
                />
              </div>
              <ul class="space-y-2.5 text-sm">
                <li v-for="item in duoReasons" :key="item" class="text-muted flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle-2" class="text-primary mt-0.5 size-4 shrink-0" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <div class="flex flex-wrap gap-2">
              <UButton
                label="Get Duo Alta Estimate"
                color="primary"
                variant="solid"
                class="flex-1 justify-center"
                @click="openConsultation({ product: 'Stiltz Duo Alta (Compact 2-Person)' })"
              />
              <UButton label="Duo Alta Details" to="/duo-alta" color="neutral" variant="outline" />
            </div>
          </div>
        </UPageCard>

        <UPageCard variant="subtle" :ui="{ container: 'h-full', wrapper: 'h-full items-stretch' }">
          <div class="flex h-full flex-col justify-between gap-5">
            <div class="space-y-4">
              <div class="flex items-center justify-between gap-2">
                <h2 class="text-highlighted text-xl font-bold">Choose Stiltz Trio Alta if…</h2>
                <UBadge label="15 sq ft · 19.5 ft max" color="secondary" variant="subtle" size="sm" />
              </div>
              <div class="overflow-hidden rounded-lg">
                <img
                  src="/images/home/trio-alta-studio.jpg"
                  alt="Stiltz Trio Alta wheelchair-accessible home elevator"
                  class="aspect-4/3 w-full object-cover"
                />
              </div>
              <ul class="space-y-2.5 text-sm">
                <li v-for="item in trioReasons" :key="item" class="text-muted flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle-2" class="text-primary mt-0.5 size-4 shrink-0" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <div class="flex flex-wrap gap-2">
              <UButton
                label="Get Trio Alta Estimate"
                color="primary"
                variant="solid"
                class="flex-1 justify-center"
                @click="openConsultation({ product: 'Stiltz Trio Alta (Wheelchair Accessible)' })"
              />
              <UButton label="Trio Alta Details" to="/trio-alta" color="neutral" variant="outline" />
            </div>
          </div>
        </UPageCard>
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection
      headline="Side-by-Side Specs"
      title="Full Duo Alta vs. Trio Alta Specification Comparison"
    >
      <!-- Mobile stacked rows -->
      <div class="grid gap-3 lg:hidden">
        <UPageCard v-for="row in rows" :key="row.spec" variant="subtle">
          <div class="space-y-2 text-sm">
            <p class="text-highlighted font-bold">{{ row.spec }}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="border-default bg-default/70 rounded-md border p-2.5">
                <p class="text-primary font-semibold">Duo Alta</p>
                <p class="text-muted mt-1">{{ row.duo }}</p>
              </div>
              <div class="border-default bg-default/70 rounded-md border p-2.5">
                <p class="text-secondary-700 dark:text-secondary-400 font-semibold">Trio Alta</p>
                <p class="text-muted mt-1">{{ row.trio }}</p>
              </div>
            </div>
          </div>
        </UPageCard>
      </div>

      <!-- Desktop table -->
      <UPageCard
        variant="subtle"
        class="hidden overflow-hidden lg:block"
        :ui="{ container: 'min-w-0 p-2', wrapper: 'min-w-0 w-full' }"
      >
        <div class="w-full min-w-0 overflow-x-auto">
          <UTable
            :data="rows"
            :columns="columns"
            class="w-full"
            :ui="{ th: 'whitespace-normal', td: 'whitespace-normal' }"
          />
        </div>
      </UPageCard>

      <!-- Official footprint diagrams side-by-side -->
      <div class="mt-8 grid gap-6 md:grid-cols-2">
        <UPageCard variant="subtle">
          <div class="space-y-3">
            <div class="flex items-center justify-between gap-2">
              <h3 class="text-highlighted font-bold">Duo Alta Footprint</h3>
              <UBadge label="8.5 sq ft" color="primary" variant="subtle" size="sm" />
            </div>
            <div
              class="flex min-h-72 items-center justify-center rounded-xl border border-neutral-200 bg-white p-4"
            >
              <img
                src="/images/specs/duo-alta-footprint.jpg"
                alt="Stiltz Duo Alta footprint diagram"
                class="max-h-72 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </UPageCard>

        <UPageCard variant="subtle">
          <div class="space-y-3">
            <div class="flex items-center justify-between gap-2">
              <h3 class="text-highlighted font-bold">Trio Alta / Thru-Car Footprint</h3>
              <UBadge label="15 sq ft" color="secondary" variant="subtle" size="sm" />
            </div>
            <div
              class="flex min-h-72 items-center justify-center rounded-xl border border-neutral-200 bg-white p-4"
            >
              <img
                src="/images/specs/trio-alta-footprint.jpg"
                alt="Stiltz Trio Alta and Thru-Car footprint diagram"
                class="max-h-80 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </UPageCard>
      </div>
      <p class="text-muted mx-auto mt-4 max-w-3xl text-center text-xs leading-relaxed">
        * Dimensions are for general reference and not for construction purposes. Local code
        requirements may limit Trio Alta / Thru-Car capacity to 500 lbs (227 kg).
      </p>
    </UPageSection>

    <USeparator />

    <UPageSection headline="Comparison FAQ" title="Questions buyers ask when choosing a model">
      <div class="mx-auto w-full max-w-3xl">
        <UAccordion :items="faqItems" />
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection>
      <UPageCTA
        title="Not sure which model fits your floor plan?"
        description="Book a free Orange County in-home survey with Jeff Cullen—we'll measure joists, ceiling heights, and walk through exact placement options for both models."
        variant="subtle"
        :links="[
          {
            label: 'Get a Free Consultation',
            color: 'primary',
            variant: 'solid',
            size: 'xl',
            trailingIcon: 'i-lucide-arrow-right',
            onClick: () => openConsultation(),
          },
          {
            label: 'Read Stiltz vs. Stairlift',
            to: '/stiltz-vs-stairlift',
            color: 'neutral',
            variant: 'subtle',
            size: 'xl',
            trailingIcon: 'i-lucide-arrow-right',
          },
        ]"
      />
    </UPageSection>
  </UPage>
</template>
