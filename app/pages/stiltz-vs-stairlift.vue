<script setup lang="ts">
import type { AccordionItem, ButtonProps, TableColumn } from "@nuxt/ui";

const { openConsultation } = useConsultationModal();

useSeoMeta({
  title: "Stiltz Home Elevator vs. Stairlift — Orange County Guide",
  ogTitle: "Stiltz Home Elevator vs. Stairlift: Which Is Better for Aging in Place?",
  description:
    "Comparing a Stiltz shaftless home elevator vs. a stairlift in Orange County—covering wheelchair access, staircase aesthetics, carrying groceries/laundry, home resale value, and installation.",
});

const heroLinks: ButtonProps[] = [
  {
    label: "Schedule a Free Home Assessment",
    size: "xl",
    color: "primary",
    trailingIcon: "i-lucide-arrow-right",
    onClick: () => openConsultation(),
  },
  {
    label: "See OC Pricing Guide",
    to: "/cost",
    size: "xl",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
  },
];

interface CompareRow {
  category: string;
  stiltz: string;
  stairlift: string;
}

const columns: TableColumn<CompareRow>[] = [
  { accessorKey: "category", header: "Everyday Factor" },
  { accessorKey: "stiltz", header: "Stiltz Homelift" },
  { accessorKey: "stairlift", header: "Stairlift" },
];

const rows: CompareRow[] = [
  {
    category: "Staircase Appearance & Flow",
    stiltz: "Keeps your stairs 100% clear, wide, and untouched",
    stairlift: "Bolts a metal track and folded chair onto your staircase",
  },
  {
    category: "Wheelchair & Walker Support",
    stiltz: "Roll straight into Trio Alta with zero transfer required",
    stairlift: "Requires standing/transferring out of wheelchair at both ends",
  },
  {
    category: "Passengers & Cargo",
    stiltz: "2–3 people at once, plus laundry baskets, luggage, pets, or groceries",
    stairlift: "1 seated person only; limited lap space for items",
  },
  {
    category: "Curved or Multi-Landing Stairs",
    stiltz: "Travels straight through the floor—stair shape never matters",
    stairlift: "Custom curved rails are expensive and slow to manufacture",
  },
  {
    category: "Home Value & Architectural Appeal",
    stiltz: "Modern luxury amenity that adds broad appeal to OC homes",
    stairlift: "Often removed prior to selling a home",
  },
  {
    category: "Upfront Cost & Install",
    stiltz: "Higher investment, installed in 1–2 days after light aperture prep",
    stairlift: "Lower upfront cost; mounts directly to stair treads",
  },
];

const faqItems: AccordionItem[] = [
  {
    label: "When is a Stiltz Homelift a better investment than a stairlift?",
    icon: "i-lucide-sparkles",
    content:
      "A Stiltz Homelift shines when you want to keep your staircase open and clutter-free, need to carry laundry, suitcases, or groceries between floors, want two people to ride together, have curved stairs, or want future-proof wheelchair access without transferring in and out of a chair.",
  },
  {
    label: "Does a Stiltz elevator feel clinical like medical equipment?",
    icon: "i-lucide-sun",
    content:
      "Not at all. With clear panoramic polycarbonate walls, warm LED canopy lighting, and slim neutral rails, Stiltz Homelifts are designed to feel like custom contemporary architecture—not medical hardware.",
  },
  {
    label: "Does installing a Stiltz Homelift help Orange County home resale value?",
    icon: "i-lucide-trending-up",
    content:
      "While stairlifts are frequently removed before listing a house, a sleek residential home elevator appeals directly to multi-generational families and 55+ buyers across Irvine, Newport Beach, Laguna Woods, and South Orange County.",
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
      headline="Aging-in-Place Decision Guide"
      title="Stiltz Home Elevator vs. Stairlift"
      description="Trying to decide between a stairlift and a Stiltz shaftless home elevator? Compare everyday comfort, staircase aesthetics, wheelchair access, and long-term home value."
      :links="heroLinks"
      :ui="{ container: 'min-w-0 py-12 sm:py-16 lg:py-20' }"
    >
      <template #top>
        <HeroBackground />
      </template>
    </UPageHero>

    <UPageSection
      headline="Head-to-Head Comparison"
      title="How a Stiltz Homelift compares to a traditional stairlift"
      description="An honest look at how each option works in real daily life inside a two-story California home."
    >
      <!-- Mobile cards -->
      <div class="grid gap-4 lg:hidden">
        <UPageCard v-for="row in rows" :key="row.category" variant="subtle">
          <div class="space-y-3 text-sm">
            <h3 class="text-highlighted font-bold">{{ row.category }}</h3>
            <div class="border-default bg-primary-50/70 dark:bg-primary-950/30 rounded-lg border p-3">
              <p class="text-primary text-xs font-semibold uppercase">Stiltz Homelift</p>
              <p class="text-highlighted mt-1 font-medium">{{ row.stiltz }}</p>
            </div>
            <div class="border-default bg-default/60 rounded-lg border p-3">
              <p class="text-muted text-xs font-semibold uppercase">Stairlift</p>
              <p class="text-muted mt-1">{{ row.stairlift }}</p>
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
    </UPageSection>

    <USeparator />

    <UPageSection headline="Common Questions" title="Stiltz vs. Stairlift FAQ">
      <div class="mx-auto w-full max-w-3xl">
        <UAccordion :items="faqItems" />
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
              label="Test Ride in Irvine"
              color="primary"
              variant="subtle"
              size="md"
              icon="i-lucide-map-pin"
            />
            <h2 class="text-highlighted text-2xl font-bold tracking-tight sm:text-3xl">
              Experience the difference in person
            </h2>
            <p class="text-muted text-sm leading-relaxed sm:text-base">
              Book a private appointment at our Irvine showroom or invite Jeff Cullen for a free
              in-home assessment anywhere in Orange County to see where a Stiltz lift fits cleanly
              in your home.
            </p>
            <div class="flex flex-wrap gap-2">
              <UButton label="Duo Alta vs. Trio Alta" to="/duo-alta-vs-trio-alta" color="neutral" variant="outline" size="sm" />
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
