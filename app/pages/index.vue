<script setup lang="ts">
import type {
  AccordionItem,
  ButtonProps,
  PageCardProps,
  PageFeatureProps,
  TableColumn,
} from "@nuxt/ui";

useSeoMeta({
  title: "Shaftless In-Home Elevators",
  ogTitle: "Upside Lifts — Stay in the home you love. Move effortlessly between floors.",
  description:
    "Architectural shaftless residential home elevators that ride on twin self-supporting rails. No shaft, no pit, standard outlet power, and 1–2 day installation.",
  ogDescription:
    "Discover Upside Duo, Trio, and Vista home lifts—compact, whisper-quiet through-the-floor elevators designed for modern living and aging in place.",
});

const heroLinks: ButtonProps[] = [
  {
    label: "Explore Lift Models",
    to: "/#models",
    size: "xl",
    color: "primary",
    icon: "i-lucide-layers",
  },
  {
    label: "Book a Free Home Survey",
    to: "/#contact",
    size: "xl",
    color: "secondary",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
  },
];

const heroHighlights = [
  { label: "No Shaft or Pit", icon: "i-lucide-columns-2" },
  { label: "1–2 Day Install", icon: "i-lucide-clock" },
  { label: "Standard Outlet", icon: "i-lucide-plug" },
  { label: "From 6.8 sq ft", icon: "i-lucide-maximize-2" },
];

const whyFeatures: PageFeatureProps[] = [
  {
    title: "Self-Supporting Dual-Rail Structure",
    description:
      "Twin architectural rails carry the entire weight down to the floor—eliminating the need for a structural shaft, pit, or load-bearing walls.",
    icon: "i-lucide-columns-2",
  },
  {
    title: "Plugs Into a Standard Home Outlet",
    description:
      "A whisper-quiet, self-contained electric drive sits cleanly inside the roof of the cabin. No hydraulics, no noisy pumps, and no machine room.",
    icon: "i-lucide-plug",
  },
  {
    title: "Fits Almost Anywhere",
    description:
      "With footprints starting at just 6.8 sq ft, an Upside lift tucks neatly into a hallway corner, stairwell void, bedroom closet, or open living room.",
    icon: "i-lucide-maximize-2",
  },
  {
    title: "Installed in 1 to 2 Days",
    description:
      "After a clean floor aperture is prepared, our certified technicians assemble and test your lift in days—at a fraction of conventional elevator disruption.",
    icon: "i-lucide-calendar-check",
  },
  {
    title: "Built-In Safety & Battery Backup",
    description:
      "Full top-and-bottom obstruction sensors automatically pause movement if anything touches the cabin, while integrated battery backup lowers you safely during outages.",
    icon: "i-lucide-shield-check",
  },
  {
    title: "Light-Filled Architectural Design",
    description:
      "Clear curved panoramic walls and warm LED canopy lighting preserve natural daylight and sightlines so the lift feels like custom interior architecture.",
    icon: "i-lucide-sun",
  },
];

const liftModels: (PageCardProps & {
  badge: string;
  badgeColor: "primary" | "secondary";
  image: string;
  imageAlt: string;
  specs: string[];
  to: string;
})[] = [
  {
    badge: "01 · Compact 2-Person",
    badgeColor: "secondary",
    title: "Upside Duo",
    description:
      "Our smallest-footprint residential lift. Engineered to fit effortlessly beside a staircase, inside a closet, or in a quiet living room corner.",
    image: "/images/home/duo-lift.jpg",
    imageAlt: "Upside Duo compact 2-person shaftless glass home lift beside a white oak staircase",
    specs: ["6.8 sq ft footprint", "375 lb capacity", "2 passengers"],
    variant: "subtle",
    spotlight: true,
    spotlightColor: "secondary",
    to: "/#contact",
  },
  {
    badge: "02 · Wheelchair Accessible",
    badgeColor: "primary",
    title: "Upside Trio",
    description:
      "A wider, flush-entry panoramic cabin with space for a full-sized wheelchair, walker, or up to three passengers—ideal for effortless aging in place.",
    image: "/images/home/trio-lift.jpg",
    imageAlt: "Upside Trio spacious wheelchair-accessible panoramic home elevator in a modern room",
    specs: ["13.6 sq ft footprint", "500 lb capacity", "Zero-threshold entry"],
    variant: "subtle",
    spotlight: true,
    spotlightColor: "primary",
    to: "/#contact",
  },
  {
    badge: "03 · Panoramic Edition",
    badgeColor: "secondary",
    title: "Upside Vista",
    description:
      "Ultra-clear curved glazing paired with brushed champagne-bronze or deep forest rails—designed to vanish into bright, open-plan interiors.",
    image: "/images/home/hero-lift.jpg",
    imageAlt: "Upside Vista clear panoramic glass residential home lift in a sunlit living room",
    specs: ["360° light flow", "Custom rail finishes", "Warm LED canopy"],
    variant: "subtle",
    spotlight: true,
    spotlightColor: "secondary",
    to: "/#contact",
  },
];

const installSteps = [
  {
    step: "Step 01",
    title: "Free In-Home Survey",
    description:
      "A lift specialist visits your home to evaluate floor joists, ceiling heights, and ideal placement options—with zero obligation.",
    icon: "i-lucide-compass",
  },
  {
    step: "Step 02",
    title: "Custom Specification",
    description:
      "Choose your cabin size, glazing style, rail finish, door orientation (including thru-car entry), and interior lighting.",
    icon: "i-lucide-sliders-horizontal",
  },
  {
    step: "Step 03",
    title: "Clean 1–2 Day Install",
    description:
      "Once the floor aperture is framed, our team installs the twin rails, cabin, and controls cleanly—leaving your home spotless.",
    icon: "i-lucide-wrench",
  },
  {
    step: "Step 04",
    title: "Walkthrough & Warranty",
    description:
      "We test every safety sensor with you, walk through controls and remote fobs, and back your lift with comprehensive support.",
    icon: "i-lucide-badge-check",
  },
];

interface SpecRow {
  feature: string;
  duo: string;
  vista: string;
  trio: string;
}

const specColumns: TableColumn<SpecRow>[] = [
  { accessorKey: "feature", header: "Specification" },
  { accessorKey: "duo", header: "Upside Duo" },
  { accessorKey: "vista", header: "Upside Vista" },
  { accessorKey: "trio", header: "Upside Trio" },
];

const specRows: SpecRow[] = [
  {
    feature: "Footprint",
    duo: "6.8 sq ft (31.5″ × 41″)",
    vista: "6.8 – 13.6 sq ft",
    trio: "13.6 sq ft (41.5″ × 52.5″)",
  },
  {
    feature: "Max Capacity",
    duo: "375 lbs (2 people)",
    vista: "375 – 500 lbs",
    trio: "500 lbs (3 people / wheelchair)",
  },
  {
    feature: "Wheelchair / Walker Ready",
    duo: "Compact walker",
    vista: "Available on Trio Vista",
    trio: "Full-size standard wheelchair",
  },
  {
    feature: "Max Travel Height",
    duo: "Up to 15 ft (2 floors)",
    vista: "Up to 15 ft (2 floors)",
    trio: "Up to 15 ft (2 floors)",
  },
  {
    feature: "Drive & Power",
    duo: "Quiet self-contained electric · 220V",
    vista: "Quiet self-contained electric · 220V",
    trio: "Quiet self-contained electric · 220V",
  },
  {
    feature: "Typical Installation",
    duo: "1–2 days",
    vista: "1–2 days",
    trio: "1–2 days",
  },
];

const faqItems: AccordionItem[] = [
  {
    label: "How much space does an Upside home lift require?",
    icon: "i-lucide-maximize-2",
    content:
      "Our compact Upside Duo takes up roughly 6.8 square feet—about the size of a living room armchair. Because there is no shaft or machine room, it can be placed in a hallway, beside an existing staircase, inside stacked closets, or directly in an open room.",
  },
  {
    label: "Do I need load-bearing walls or a concrete pit?",
    icon: "i-lucide-columns-2",
    content:
      "No. Upside lifts run on a patented self-supporting dual-rail system that transfers the entire structural load straight down into the ground floor. No masonry shaft, no pit excavation, and no separate machine room are needed.",
  },
  {
    label: "What happens if the power goes out while I'm inside?",
    icon: "i-lucide-battery-charging",
    content:
      "Every Upside lift includes an integrated battery backup system. If your home loses power mid-trip, the lift smoothly and safely lowers you to the ground floor, keeps cabin lighting illuminated, and allows the door to open normally.",
  },
  {
    label: "How long does installation take?",
    icon: "i-lucide-clock",
    content:
      "After the modest floor aperture is prepared and framed (typically 1–2 days of light carpentry), the lift itself is assembled, calibrated, and safety-tested in just 1 to 2 days—compared to weeks of construction for a traditional shaft elevator.",
  },
  {
    label: "How does safety work when traveling through the ceiling?",
    icon: "i-lucide-shield-check",
    content:
      "When the lift travels downstairs, an automatic matching floor panel (lid) smoothly closes the upper aperture so you can walk right over it. Full-surface top and bottom sensors immediately stop the lift if a pet, child, or object touches the cabin or ceiling opening.",
  },
];
</script>

<template>
  <UPage>
    <UPageHero
      headline="Shaftless Residential Home Lifts"
      description="Thoughtfully designed through-the-floor home elevators that glide on twin self-supporting rails—no shaft, no pit, standard power, and installed in as little as 1 to 2 days."
      orientation="horizontal"
      :links="heroLinks"
      :ui="{
        container: 'min-w-0',
        wrapper: 'min-w-0',
      }"
    >
      <template #top>
        <HeroBackground />
      </template>

      <template #title>
        Stay in the home you love. Move <span class="text-primary">effortlessly</span> between
        floors.
      </template>

      <UPageCard
        variant="subtle"
        class="w-full min-w-0 overflow-hidden shadow-xl"
        :ui="{
          container: 'w-full min-w-0 p-3 sm:p-4',
          wrapper: 'w-full min-w-0 items-stretch',
        }"
      >
        <div class="w-full min-w-0 space-y-3">
          <div class="relative overflow-hidden rounded-lg">
            <img
              src="/images/home/hero-lift.jpg"
              alt="Upside shaftless panoramic glass home elevator in a sunlit contemporary living room"
              class="aspect-4/3 w-full object-cover"
              loading="eager"
            />
            <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
              <UBadge
                label="Upside Vista · Dual-Rail"
                color="secondary"
                variant="solid"
                size="sm"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <div
              v-for="item in heroHighlights"
              :key="item.label"
              class="border-default bg-default/75 flex items-center gap-1.5 rounded-md border px-2.5 py-2"
            >
              <UIcon :name="item.icon" class="text-primary size-3.5 shrink-0" />
              <span class="text-highlighted truncate text-[11px] font-medium">
                {{ item.label }}
              </span>
            </div>
          </div>
        </div>
      </UPageCard>
    </UPageHero>

    <UPageSection
      id="why-upside"
      headline="Why Upside Lifts"
      title="An elevator that fits your architecture—not the other way around."
      description="Traditional home elevators demand shafts, pits, hydraulics, and months of renovation. Upside delivers quiet, architectural vertical mobility without tearing up your home."
      :features="whyFeatures"
    />

    <USeparator />

    <UPageSection
      id="models"
      headline="The Collection"
      title="Three thoughtfully proportioned home lifts"
      description="Whether you want the smallest footprint possible or full wheelchair accessibility, every Upside model blends cleanly into your living space."
    >
      <UPageGrid>
        <UPageCard
          v-for="model in liftModels"
          :key="model.title"
          :title="model.title"
          :description="model.description"
          :variant="model.variant"
          :spotlight="model.spotlight"
          :spotlight-color="model.spotlightColor"
          :to="model.to"
        >
          <template #header>
            <UBadge :label="model.badge" :color="model.badgeColor" variant="subtle" />
          </template>

          <div class="mt-2 space-y-3">
            <div class="overflow-hidden rounded-lg">
              <img
                :src="model.image"
                :alt="model.imageAlt"
                class="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div class="flex flex-wrap gap-1.5">
              <UBadge
                v-for="spec in model.specs"
                :key="spec"
                :label="spec"
                color="neutral"
                variant="outline"
                size="sm"
              />
            </div>
          </div>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="process"
      headline="From First Visit to First Ride"
      title="A remarkably simple 4-step installation"
      description="We handle structural evaluation, finish selection, clean installation, and final walkthrough so upgrading your home feels effortless."
    >
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <UPageCard
          v-for="item in installSteps"
          :key="item.step"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
          variant="subtle"
        >
          <template #header>
            <UBadge :label="item.step" color="primary" variant="subtle" size="sm" />
          </template>
        </UPageCard>
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="specs"
      headline="Compare Specifications"
      title="Built for everyday comfort and lasting peace of mind"
      description="Compare footprint, capacity, and accessibility across the Upside lineup."
    >
      <UPageCard variant="subtle" :ui="{ container: 'p-0 sm:p-2' }">
        <UTable :data="specRows" :columns="specColumns" class="w-full" />
      </UPageCard>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="faq"
      headline="Common Questions"
      title="Everything homeowners ask before installing a lift"
      description="Straightforward answers about space requirements, power outages, safety sensors, and installation timelines."
    >
      <div class="mx-auto w-full max-w-3xl">
        <UAccordion :items="faqItems" />
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection id="contact">
      <UPageCTA
        title="Ready to see where an Upside lift fits in your home?"
        description="Schedule a complimentary, no-obligation in-home survey or request our digital lookbook and pricing guide."
        variant="subtle"
        :links="[
          {
            label: 'Schedule a Free Home Survey',
            to: 'mailto:hello@upsidelifts.com?subject=Free%20In-Home%20Lift%20Survey',
            color: 'primary',
            variant: 'solid',
            size: 'xl',
            icon: 'i-lucide-calendar',
          },
          {
            label: 'Request Brochure & Pricing',
            to: 'mailto:hello@upsidelifts.com?subject=Upside%20Lifts%20Brochure%20%26%20Pricing',
            color: 'secondary',
            variant: 'subtle',
            size: 'xl',
            icon: 'i-lucide-book-open',
            trailingIcon: 'i-lucide-arrow-right',
          },
        ]"
      />
    </UPageSection>
  </UPage>
</template>
