<script setup lang="ts">
import type { AccordionItem, ButtonProps, PageFeatureProps } from "@nuxt/ui";

const { openConsultation } = useConsultationModal();

useSeoMeta({
  title: "Stiltz Trio Alta Wheelchair Home Elevator in Orange County",
  ogTitle: "Stiltz Trio Alta — Wheelchair-Accessible Home Elevator | Upside Home Lifts",
  description:
    "Explore the Stiltz Trio Alta and Trio Alta Thru-Car wheelchair-accessible home elevator in Orange County. 15 sq ft footprint, up to 550 lb limit*, up to 19.5 ft travel. Irvine showroom.",
  ogImage: "https://upsidelifts.com/images/home/trio-alta-studio.jpg",
});

const heroLinks: ButtonProps[] = [
  {
    label: "Get Free Trio Alta Estimate",
    size: "xl",
    color: "primary",
    trailingIcon: "i-lucide-arrow-right",
    onClick: () => openConsultation({ product: "Stiltz Trio Alta (Wheelchair Accessible)" }),
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
  { label: "Footprint", value: "15 sq ft (50 3/8″ × 41 1/4″)" },
  { label: "Weight Limit", value: "550 lbs / 250 kg* (500 lbs per local code)" },
  { label: "Max Travel Height", value: "Up to 19.5 ft (high ceilings OK)" },
  { label: "Internal Cabin", value: "45 3/16″ deep × 30 7/16″ wide" },
  { label: "Entrance Width", value: "31 1/2″ (800 mm) zero-threshold" },
  { label: "Door Options", value: "Standard single entry or Thru-Car (dual entry)" },
  { label: "Min Upstairs Ceiling", value: "96″ (2438 mm) · 4″ reduced cab available" },
  { label: "Drive & Power", value: "Whisper-quiet self-contained electric · 220V" },
  { label: "Typical Lift Install", value: "1–2 days after aperture framing" },
];

const trioHighlights: PageFeatureProps[] = [
  {
    title: "Full-Size Wheelchair & Walker Ready",
    description:
      "A generous 31 1/2″ wide entrance and 45 3/16″ interior depth comfortably fit a standard wheelchair, rollator, or up to three standing passengers.",
    icon: "i-lucide-accessibility",
  },
  {
    title: "Optional Thru-Car Entry & Exit",
    description:
      "Configure doors on both ends so a wheelchair user can roll straight in on the ground floor and straight out upstairs without turning around.",
    icon: "i-lucide-arrow-left-right",
  },
  {
    title: "Up to 19.5 Feet of Travel for High Ceilings",
    description:
      "Engineered for double-height Southern California living rooms, vaulted foyers, and high-ceiling custom residences.",
    icon: "i-lucide-arrow-up-down",
  },
  {
    title: "Self-Supporting Dual-Rail Safety",
    description:
      "No masonry shaft or pit needed—with full-surface obstruction sensors, battery descent backup, and interior LED lighting built in.",
    icon: "i-lucide-shield-check",
  },
];

const trioFaq: AccordionItem[] = [
  {
    label: "Does the Stiltz Trio Alta fit a full-size wheelchair?",
    icon: "i-lucide-accessibility",
    content:
      "Yes. With a 31 1/2″ (800 mm) flush zero-threshold entrance and 45 3/16″ × 30 7/16″ interior cabin, the Trio Alta is purpose-built for a standard full-sized wheelchair—and can be ordered as a Thru-Car with doors on both ends.",
  },
  {
    label: "Why does the weight limit note 550 lbs / 500 lbs per local code?",
    icon: "i-lucide-scale",
    content:
      "Stiltz engineers the Trio Alta to 550 lbs (250 kg) globally; certain local US building codes rate residential thru-floor elevators at 500 lbs (227 kg). Jeff handles local California code guidance during your consultation.",
  },
  {
    label: "Can the Trio Alta be retrofitted into an existing Orange County home?",
    icon: "i-lucide-home",
    content:
      "Yes! Because the Trio Alta rides on twin self-supporting rails with no shaft or concrete pit, we routinely retrofit it into existing homes as well as coordinating with architects on remodels and custom new builds.",
  },
];
</script>

<template>
  <UPage>
    <UPageHero
      headline="Stiltz Homelifts · Wheelchair-Accessible & Thru-Car Model"
      title="Stiltz Trio Alta"
      description="Spacious, zero-threshold vertical mobility for up to three passengers or a full-size wheelchair—15 sq ft footprint, up to 19.5 ft travel, and optional Thru-Car entry."
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
              src="/images/home/trio-alta-studio.jpg"
              alt="Stiltz Trio Alta wheelchair-accessible home elevator in a sunlit living room"
              class="aspect-4/3 w-full object-cover"
              loading="eager"
            />
          </div>
          <div class="flex flex-wrap gap-2">
            <UBadge label="15 sq ft Footprint" color="secondary" variant="subtle" size="sm" />
            <UBadge label="Full Wheelchair Ready" color="primary" variant="subtle" size="sm" />
            <UBadge label="Up to 19.5 ft Travel" color="neutral" variant="outline" size="sm" />
            <UBadge label="Thru-Car Option" color="neutral" variant="outline" size="sm" />
          </div>
        </div>
      </UPageCard>
    </UPageHero>

    <UPageSection
      headline="Built for Forever Homes"
      title="Effortless accessibility without renovating your whole house"
      description="Designed to future-proof multi-story Orange County homes with zero-threshold entry and clean panoramic lines."
      :features="trioHighlights"
    />

    <USeparator />

    <UPageSection
      id="dimensions"
      headline="Official Dimensions & Specifications"
      title="Stiltz Trio Alta & Thru-Car Footprint"
      description="Exact exterior and interior dimensions for homeowners, builders, and architects."
    >
      <div class="grid gap-6 lg:grid-cols-12">
        <UPageCard variant="subtle" class="lg:col-span-6">
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-2">
              <h3 class="text-highlighted text-lg font-bold">Trio Alta / Thru-Car Diagram</h3>
              <UBadge label="15 sq ft · 550 lb*" color="secondary" variant="subtle" size="sm" />
            </div>
            <div
              class="flex min-h-80 items-center justify-center rounded-xl border border-neutral-200 bg-white p-4 sm:p-6"
            >
              <img
                src="/images/specs/trio-alta-footprint.jpg"
                alt="Stiltz Trio Alta and Thru-Car official footprint dimension diagram"
                class="max-h-96 w-auto object-contain"
              />
            </div>
            <p class="text-muted text-xs leading-relaxed">
              * Dimensions are for general reference and are not to be used for construction
              purposes. Local code requirements may limit weight to 500 lbs (227 kg). 4″ reduced cab
              height available by special order.
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
                label="Compare With Duo Alta"
                to="/duo-alta"
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
      headline="Trio Alta FAQ"
      title="Common questions about the Stiltz Trio Alta"
    >
      <div class="mx-auto w-full max-w-3xl">
        <UAccordion :items="trioFaq" />
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection>
      <UPageCTA
        title="Ready to plan a Stiltz Trio Alta for your home?"
        description="Book a free in-home assessment with Jeff Cullen or test-ride a working Stiltz Homelift at our Irvine showroom."
        variant="subtle"
        :links="[
          {
            label: 'Get Free Trio Alta Estimate',
            color: 'primary',
            variant: 'solid',
            size: 'xl',
            trailingIcon: 'i-lucide-arrow-right',
            onClick: () => openConsultation({ product: 'Stiltz Trio Alta (Wheelchair Accessible)' }),
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
