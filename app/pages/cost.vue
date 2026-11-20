<script setup lang="ts">
import type { AccordionItem, ButtonProps, PageFeatureProps, TableColumn } from "@nuxt/ui";

const { openConsultation } = useConsultationModal();

useSeoMeta({
  title: "Stiltz Home Elevator Cost & Pricing Guide (Orange County)",
  ogTitle: "How Much Does a Stiltz Home Elevator Cost in Orange County?",
  description:
    "Transparent guide to Stiltz Duo Alta and Trio Alta home elevator costs in Orange County, CA—what affects turnkey pricing, shaftless vs. traditional elevator savings, and our Veteran Special.",
});

const heroLinks: ButtonProps[] = [
  {
    label: "Request Your Custom Quote",
    size: "xl",
    color: "primary",
    trailingIcon: "i-lucide-arrow-right",
    onClick: () => openConsultation(),
  },
  {
    label: "Ask About Veteran Special",
    size: "xl",
    color: "secondary",
    variant: "subtle",
    icon: "i-lucide-medal",
    onClick: () => openConsultation({ veteranSpecial: true }),
  },
];

const costDrivers: PageFeatureProps[] = [
  {
    title: "Model Selection (Duo Alta vs. Trio Alta)",
    description:
      "The compact 2-person Duo Alta (8.5 sq ft) is the most cost-effective option, while the larger wheelchair-accessible Trio Alta (15 sq ft) and Thru-Car door configuration add capacity and versatility.",
    icon: "i-lucide-layers",
  },
  {
    title: "Floor-to-Floor Travel & Ceiling Height",
    description:
      "Standard two-story installations (up to 14 ft for Duo Alta, up to 19.5 ft for Trio Alta) and optional 4″ reduced-height cabs are tailored to your home's exact dimensions.",
    icon: "i-lucide-arrow-up-down",
  },
  {
    title: "Floor Aperture Carpentry & Electrical",
    description:
      "Because Stiltz requires no shaft, pit, or machine room, prep work is limited to framing a modest ceiling opening and providing a dedicated 220V circuit—saving tens of thousands over conventional elevators.",
    icon: "i-lucide-hammer",
  },
  {
    title: "Door, Trim & Finish Customizations",
    description:
      "Full-height or half-height doors, Thru-Car dual entry, interior fold-down seating, and matching flooring inserts can all be configured to blend seamlessly with your interior.",
    icon: "i-lucide-sliders-horizontal",
  },
];

interface CompareRow {
  factor: string;
  stiltz: string;
  traditional: string;
}

const compareColumns: TableColumn<CompareRow>[] = [
  { accessorKey: "factor", header: "Cost & Construction Factor" },
  { accessorKey: "stiltz", header: "Stiltz Shaftless Homelift" },
  { accessorKey: "traditional", header: "Traditional Shaft Elevator" },
];

const compareRows: CompareRow[] = [
  {
    factor: "Structural Shaft & Concrete Pit",
    stiltz: "None required — self-supporting dual rails",
    traditional: "Full multi-story shaft & concrete pit excavation",
  },
  {
    factor: "Machine Room",
    stiltz: "None — drive is concealed in cabin roof",
    traditional: "Dedicated closet/machine room required",
  },
  {
    factor: "Construction Timeline",
    stiltz: "1–2 days aperture prep + 1–2 days lift install",
    traditional: "4–12+ weeks of heavy framing & remodel",
  },
  {
    factor: "Space Consumed",
    stiltz: "8.5 sq ft (Duo Alta) or 15 sq ft (Trio Alta)",
    traditional: "25–40+ sq ft including framed shaft walls",
  },
  {
    factor: "Moving & Relocation Alternative",
    stiltz: "Often a fraction of OC realtor fees & moving costs",
    traditional: "Major capital remodel ($65k–$120k+ installed)",
  },
];

const costFaq: AccordionItem[] = [
  {
    label: "Why do I need an in-home survey for an exact turnkey quote?",
    icon: "i-lucide-compass",
    content:
      "Every Orange County home has different floor joist layouts, ceiling heights, and preferred lift locations. A free 30–45 minute visit from Jeff Cullen lets us confirm joist direction, placement, carpentry scope, and give you a clear, no-surprise written estimate.",
  },
  {
    label: "Do you offer a Veteran Special?",
    icon: "i-lucide-medal",
    content:
      "Yes! Upside Home Lifts proudly offers a Veteran Special for military veterans and their families in Orange County. Check the Veteran Special box on our consultation form or mention it when you call 949.418.9517.",
  },
  {
    label: "How does installing a Stiltz lift compare to moving to a single-story home in OC?",
    icon: "i-lucide-home",
    content:
      "In Orange County, selling and downsizing to a single-story home often costs far more in realtor commissions, closing costs, moving expenses, and California property tax reassessment than adding a Stiltz Homelift to stay in the home and neighborhood you already love.",
  },
];
</script>

<template>
  <UPage>
    <UPageHero
      headline="Orange County Home Elevator Pricing Guide"
      title="How much does a Stiltz Homelift cost?"
      description="Because Stiltz elevators require no shaft, no concrete pit, and no machine room, total installed cost is dramatically lower—and far faster—than a conventional residential elevator."
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
      headline="What Goes Into a Turnkey Quote"
      title="Four factors that shape your total investment"
      description="We walk through every line item transparently during your complimentary home survey."
      :features="costDrivers"
    />

    <USeparator />

    <UPageSection
      headline="Why Shaftless Saves Tens of Thousands"
      title="Stiltz Homelift vs. Traditional Shaft Elevator"
      description="Most of the sticker shock in residential elevators comes from building a shaft, digging a pit, and losing a closet to a machine room—none of which Stiltz requires."
    >
      <!-- Mobile stacked cards -->
      <div class="grid gap-4 lg:hidden">
        <UPageCard v-for="row in compareRows" :key="row.factor" variant="subtle">
          <div class="space-y-3 text-sm">
            <h3 class="text-highlighted font-bold">{{ row.factor }}</h3>
            <div class="border-default bg-primary-50/70 dark:bg-primary-950/30 rounded-lg border p-3">
              <p class="text-primary text-xs font-semibold uppercase">Stiltz Shaftless Homelift</p>
              <p class="text-highlighted mt-1 font-medium">{{ row.stiltz }}</p>
            </div>
            <div class="border-default bg-default/60 rounded-lg border p-3">
              <p class="text-muted text-xs font-semibold uppercase">Traditional Shaft Elevator</p>
              <p class="text-muted mt-1">{{ row.traditional }}</p>
            </div>
          </div>
        </UPageCard>
      </div>

      <!-- Desktop comparison table -->
      <UPageCard
        variant="subtle"
        class="hidden overflow-hidden lg:block"
        :ui="{ container: 'min-w-0 p-2', wrapper: 'min-w-0 w-full' }"
      >
        <div class="w-full min-w-0 overflow-x-auto">
          <UTable
            :data="compareRows"
            :columns="compareColumns"
            class="w-full"
            :ui="{ th: 'whitespace-normal', td: 'whitespace-normal' }"
          />
        </div>
      </UPageCard>
    </UPageSection>

    <USeparator />

    <UPageSection
      headline="Pricing & Planning FAQ"
      title="Answers to common cost questions"
    >
      <div class="mx-auto w-full max-w-3xl">
        <UAccordion :items="costFaq" />
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection id="quote">
      <div
        class="border-default bg-default grid overflow-hidden rounded-2xl border shadow-xl lg:grid-cols-12"
      >
        <div
          class="bg-neutral-100/90 dark:bg-neutral-900/90 flex flex-col justify-between space-y-6 p-5 sm:p-8 lg:col-span-5 lg:p-10"
        >
          <div class="space-y-4">
            <UBadge
              label="Free Written Estimate"
              color="primary"
              variant="subtle"
              size="md"
              icon="i-lucide-file-text"
            />
            <h2 class="text-highlighted text-2xl font-bold tracking-tight sm:text-3xl">
              Get an Exact Quote for Your Home
            </h2>
            <p class="text-muted text-sm leading-relaxed sm:text-base">
              Share your ZIP code and preferred model to schedule a complimentary Orange County home
              survey or Irvine showroom visit with Jeff Cullen—with zero obligation.
            </p>
          </div>
          <div class="border-default space-y-2 border-t pt-5 text-sm">
            <p class="text-highlighted font-semibold">Call Jeff Cullen directly:</p>
            <a
              href="tel:+19494189517"
              class="text-primary inline-flex items-center gap-1.5 font-semibold hover:underline"
            >
              <UIcon name="i-lucide-phone" class="size-4" />
              949.418.9517
            </a>
            <p class="text-muted text-xs">
              Irvine Showroom: 17155 Von Karman Ave #101, Irvine, CA 92614 · License #1164819
            </p>
          </div>
        </div>

        <div class="p-5 sm:p-8 lg:col-span-7 lg:p-10">
          <ConsultationForm submit-label="Request Your Free Estimate" />
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
