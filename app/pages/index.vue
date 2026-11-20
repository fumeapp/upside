<script setup lang="ts">
import type {
  AccordionItem,
  ButtonProps,
  PageCardProps,
  PageFeatureProps,
  TableColumn,
} from "@nuxt/ui";
import type { LiftInterest } from "~/composables/useConsultationModal";

const { openConsultation } = useConsultationModal();

useSeoMeta({
  title: "Stiltz Homelifts in Orange County",
  ogTitle: "Upside Home Lifts — Stiltz Homelifts turns your new home into a forever home.",
  description:
    "Authorized Stiltz Homelifts dealer in Irvine, CA. Shaftless residential elevators with contemporary styling, small footprint, and travel up to 20 feet. Call Jeff Cullen at 949.235.4536.",
  ogDescription:
    "Whether renovating, extending, or building from the ground up, future-proof with confidence with a Stiltz Homelift. Visit our Irvine showroom.",
});

const heroLinks: ButtonProps[] = [
  {
    label: "Get a Free Consultation",
    size: "xl",
    color: "primary",
    trailingIcon: "i-lucide-arrow-right",
    onClick: () => openConsultation(),
  },
  {
    label: "Call 949.235.4536",
    to: "tel:+19492354536",
    size: "xl",
    color: "neutral",
    variant: "subtle",
    icon: "i-lucide-phone",
  },
];

const heroHighlights = [
  { label: "37,000+ Installed", icon: "i-lucide-award" },
  { label: "Up to 20 ft Travel", icon: "i-lucide-arrow-up-down" },
  { label: "No Shaft or Pit", icon: "i-lucide-columns-2" },
  { label: "1–2 Day Install", icon: "i-lucide-clock" },
];

const whyFeatures: PageFeatureProps[] = [
  {
    title: "Contemporary Styling & Small Footprint",
    description:
      "A neat, discreet solution for moving between floors that blends effortlessly into modern interiors—starting at under 7 square feet with no masonry shaft.",
    icon: "i-lucide-maximize-2",
  },
  {
    title: "Flexible Positioning Almost Anywhere",
    description:
      "Twin self-supporting rails carry the load directly to the floor, allowing placement in hallways, stairwell voids, closets, or open living spaces.",
    icon: "i-lucide-columns-2",
  },
  {
    title: "Retrofits, Renovations & New Builds",
    description:
      "Our consultants work directly with you or your architect at any stage of planning or construction—and we can retrofit into existing homes with minimal fuss.",
    icon: "i-lucide-drafting-compass",
  },
  {
    title: "High Ceilings & Up to 20 Feet of Travel",
    description:
      "Double-height rooms, barn conversions, and high-ceilinged Southern California properties are easily handled—our latest Stiltz models travel up to 20 feet.",
    icon: "i-lucide-arrow-up-down",
  },
  {
    title: "Cost-Effective & Energy Efficient",
    description:
      "A whisper-quiet, self-contained electric drive plugs into a standard domestic circuit with no messy hydraulics, machine room, or expensive shaft construction.",
    icon: "i-lucide-plug",
  },
  {
    title: "Advanced Safety & Fully Guaranteed",
    description:
      "Full top-and-bottom obstruction sensors, integrated battery lowering during power outages, and complete Stiltz warranty protection for lasting peace of mind.",
    icon: "i-lucide-shield-check",
  },
];

const liftModels: (PageCardProps & {
  badge: string;
  badgeColor: "primary" | "secondary";
  image: string;
  imageAlt: string;
  specs: string[];
  interestValue: LiftInterest;
})[] = [
  {
    badge: "01 · Compact 2-Person",
    badgeColor: "primary",
    title: "Stiltz Duo Alta",
    description:
      "The smallest-footprint Stiltz Homelift. Fits neatly beside a staircase, inside stacked closets, or in a quiet living room corner without crowding your space.",
    image: "/images/home/duo-lift.jpg",
    imageAlt: "Stiltz Duo Alta compact 2-person shaftless home lift beside a staircase",
    specs: ["6.8 sq ft footprint", "375 lb capacity", "Up to 20 ft travel"],
    variant: "subtle",
    spotlight: true,
    spotlightColor: "primary",
    interestValue: "Stiltz Duo Alta (Compact 2-Person)",
  },
  {
    badge: "02 · Wheelchair Accessible",
    badgeColor: "secondary",
    title: "Stiltz Trio Alta",
    description:
      "Our spacious 3-person and full-sized wheelchair model with a wide, flush threshold and optional thru-car entry—built for effortless future-proofing.",
    image: "/images/home/trio-lift.jpg",
    imageAlt: "Stiltz Trio Alta wheelchair-accessible panoramic home elevator in a bright living room",
    specs: ["13.6 sq ft footprint", "500 lb capacity", "Full wheelchair ready"],
    variant: "subtle",
    spotlight: true,
    spotlightColor: "secondary",
    interestValue: "Stiltz Trio Alta (Wheelchair Accessible)",
  },
];

const installSteps = [
  {
    step: "Step 01",
    title: "Showroom Visit or Home Survey",
    description:
      "Try a working Stiltz Homelift in our Irvine showroom or invite Jeff Cullen for a complimentary in-home assessment.",
    icon: "i-lucide-compass",
  },
  {
    step: "Step 02",
    title: "Plan With You or Your Architect",
    description:
      "Whether retrofitting an existing home or designing a new build, we finalize placement, rail finishes, and door configuration.",
    icon: "i-lucide-sliders-horizontal",
  },
  {
    step: "Step 03",
    title: "Quick, Clean Installation",
    description:
      "Once the modest floor aperture is prepared, our certified team installs and tests your lift in 1–2 days with minimal disruption.",
    icon: "i-lucide-wrench",
  },
  {
    step: "Step 04",
    title: "Fully Guaranteed Support",
    description:
      "Every Stiltz Homelift includes a full walkthrough, safety check, and local Orange County warranty and maintenance support.",
    icon: "i-lucide-badge-check",
  },
];

interface SpecRow {
  feature: string;
  duo: string;
  trio: string;
}

const specColumns: TableColumn<SpecRow>[] = [
  { accessorKey: "feature", header: "Specification" },
  { accessorKey: "duo", header: "Stiltz Duo Alta" },
  { accessorKey: "trio", header: "Stiltz Trio Alta" },
];

const specRows: SpecRow[] = [
  {
    feature: "Footprint",
    duo: "6.8 sq ft (31.5″ × 41″)",
    trio: "13.6 sq ft (41.5″ × 52.5″)",
  },
  {
    feature: "Max Capacity",
    duo: "375 lbs (2 people)",
    trio: "500 lbs (3 people / wheelchair)",
  },
  {
    feature: "Wheelchair / Walker",
    duo: "Compact walker",
    trio: "Full-size standard wheelchair",
  },
  {
    feature: "Max Travel Height",
    duo: "Up to 20 ft (high ceilings OK)",
    trio: "Up to 20 ft (high ceilings OK)",
  },
  {
    feature: "Drive & Power",
    duo: "Quiet self-contained · 220V",
    trio: "Quiet self-contained · 220V",
  },
  {
    feature: "Typical Lift Install",
    duo: "1–2 days",
    trio: "1–2 days",
  },
];

const mobileSpecModels: {
  name: string;
  badge: string;
  badgeColor: "primary" | "secondary";
  key: "duo" | "trio";
  interestValue: LiftInterest;
}[] = [
  {
    name: "Stiltz Duo Alta",
    badge: "Compact 2-Person",
    badgeColor: "primary",
    key: "duo",
    interestValue: "Stiltz Duo Alta (Compact 2-Person)",
  },
  {
    name: "Stiltz Trio Alta",
    badge: "Wheelchair Accessible",
    badgeColor: "secondary",
    key: "trio",
    interestValue: "Stiltz Trio Alta (Wheelchair Accessible)",
  },
];

const adChecklist = [
  "Contemporary styling",
  "Flexible positioning",
  "Small footprint",
  "Cost-effective",
  "Energy efficient",
  "Suitable for future-proofing",
  "Advanced safety features",
  "Fully guaranteed",
];

const consultationBenefits = [
  "Free, no-obligation in-home assessment across Orange County",
  "Private test-ride appointments at our Irvine showroom",
  "Transparent turnkey pricing including standard carpentry guidance",
  "Direct coordination with homeowners, builders, and architects",
];

const faqItems: AccordionItem[] = [
  {
    label: "Can I see and ride a Stiltz Homelift before buying?",
    icon: "i-lucide-map-pin",
    content:
      "Yes! Upside Home Lifts operates a dedicated showroom in Irvine at 17155 Von Karman Ave #101. Call Jeff Cullen at 949.235.4536 or submit the consultation form below to book a private appointment and ask about our Veteran Special.",
  },
  {
    label: "Can a Stiltz Homelift be retrofitted into my existing home?",
    icon: "i-lucide-home",
    content:
      "Absolutely. Because Stiltz uses a self-supporting dual-rail system with no masonry shaft or pit, we regularly retrofit lifts into existing homes as well as collaborating with architects during renovations, extensions, and new builds.",
  },
  {
    label: "Does it work with high ceilings or double-height rooms?",
    icon: "i-lucide-arrow-up-down",
    content:
      "Yes. Our latest Stiltz Homelifts travel up to 20 feet, making them ideal for high-ceilinged California homes, loft spaces, double-height rooms, and custom conversions.",
  },
  {
    label: "What happens if the power goes out while I'm inside?",
    icon: "i-lucide-battery-charging",
    content:
      "Every Stiltz Homelift includes built-in battery backup. If power is interrupted mid-trip, the lift smoothly lowers you to the ground floor with interior lighting on so you can exit safely.",
  },
  {
    label: "How does safety work when traveling through the ceiling?",
    icon: "i-lucide-shield-check",
    content:
      "When the lift is downstairs, a matching floor lid automatically closes the upper ceiling opening so you can walk across it normally. Full-surface obstruction sensors above and below the cabin stop the lift instantly if anything is in its path.",
  },
];
</script>

<template>
  <UPage>
    <UPageHero
      headline="Authorized Stiltz Homelifts Dealer · Orange County, CA"
      description="Whether renovating, extending, or building from the ground up, future-proof with confidence. Installed cleanly in existing homes or new builds by Upside Home Lifts—with models traveling up to 20 feet."
      orientation="horizontal"
      :links="heroLinks"
      :ui="{
        container: 'min-w-0 py-12 sm:py-16 lg:py-24',
        wrapper: 'min-w-0',
        title: 'text-4xl sm:text-5xl lg:text-5xl xl:text-6xl',
      }"
    >
      <template #top>
        <HeroBackground />
      </template>

      <template #title>
        Stiltz Homelifts turns your home into a
        <span class="text-primary">forever home</span>.
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
              alt="Stiltz shaftless panoramic home lift installed by Upside Home Lifts"
              class="aspect-4/3 w-full object-cover"
              loading="eager"
            />
            <div class="absolute top-2.5 left-2.5 right-2.5 flex flex-wrap gap-1.5 sm:top-3 sm:left-3">
              <UBadge
                label="Over 37,000 Homelifts Installed"
                color="secondary"
                variant="solid"
                size="sm"
                icon="i-lucide-award"
              />
            </div>
            <div class="absolute right-2.5 bottom-2.5 left-2.5 sm:right-auto sm:bottom-3 sm:left-3">
              <UButton
                label="Veteran Special · Irvine Showroom"
                color="primary"
                variant="solid"
                size="xs"
                icon="i-lucide-medal"
                class="max-w-full"
                @click="openConsultation({ veteranSpecial: true })"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <div
              v-for="item in heroHighlights"
              :key="item.label"
              class="border-default bg-default/80 flex min-w-0 items-center gap-2 rounded-md border px-2.5 py-2"
            >
              <UIcon :name="item.icon" class="text-primary size-4 shrink-0" />
              <span class="text-highlighted truncate text-xs font-medium">
                {{ item.label }}
              </span>
            </div>
          </div>
        </div>
      </UPageCard>
    </UPageHero>

    <UPageSection
      id="why-stiltz"
      headline="Future-Proof With Confidence"
      title="A neat, discreet solution for moving between floors."
      description="Stiltz locks in future benefits and helps you embrace a new way of living—positioned almost anywhere and installed quickly with a minimum of fuss."
      :features="whyFeatures"
    >
      <div class="mx-auto mt-2 flex max-w-4xl flex-wrap justify-center gap-2">
        <UBadge
          v-for="point in adChecklist"
          :key="point"
          :label="point"
          color="primary"
          variant="subtle"
          size="md"
          icon="i-lucide-check"
        />
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="models"
      headline="The Stiltz Homelifts Lineup"
      title="Two thoughtfully proportioned home lifts"
      description="Choose between our ultra-compact 2-person Duo Alta and our full wheelchair-accessible Trio Alta—both engineered to travel up to 20 feet."
    >
      <div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        <UPageCard
          v-for="model in liftModels"
          :key="model.title"
          :variant="model.variant"
          :spotlight="model.spotlight"
          :spotlight-color="model.spotlightColor"
          :ui="{
            container: 'h-full',
            wrapper: 'h-full items-stretch',
          }"
        >
          <div class="flex h-full flex-col justify-between gap-4">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-2">
                <UBadge :label="model.badge" :color="model.badgeColor" variant="subtle" />
              </div>

              <div class="overflow-hidden rounded-lg">
                <img
                  :src="model.image"
                  :alt="model.imageAlt"
                  class="aspect-4/3 w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div class="space-y-1.5">
                <h3 class="text-highlighted text-lg font-bold tracking-tight">
                  {{ model.title }}
                </h3>
                <p class="text-muted text-sm leading-relaxed">
                  {{ model.description }}
                </p>
              </div>

              <div class="flex flex-wrap gap-1.5 pt-0.5">
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

            <UButton
              :label="`Get Free ${model.title} Estimate`"
              color="primary"
              variant="subtle"
              size="md"
              trailing-icon="i-lucide-arrow-right"
              block
              @click="openConsultation({ product: model.interestValue })"
            />
          </div>
        </UPageCard>
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="process"
      headline="From First Visit to First Ride"
      title="Simple planning for homeowners & architects"
      description="Our consultants work with you or your architect at any stage of planning, renovation, or construction—handling retrofits and new builds with equal ease."
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
      title="Engineered for comfort, accessibility, and high ceilings"
      description="Compare footprint, capacity, travel height, and accessibility across the Stiltz lineup."
    >
      <!-- Stacked cards on mobile & portrait tablet (< lg) so there is zero horizontal overflow -->
      <div class="grid gap-4 md:grid-cols-2 lg:hidden">
        <UPageCard v-for="model in mobileSpecModels" :key="model.name" variant="subtle">
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-2">
              <h3 class="text-highlighted text-lg font-bold tracking-tight">{{ model.name }}</h3>
              <UBadge :label="model.badge" :color="model.badgeColor" variant="subtle" size="sm" />
            </div>

            <dl class="divide-default divide-y text-sm">
              <div
                v-for="row in specRows"
                :key="row.feature"
                class="flex items-baseline justify-between gap-4 py-2.5"
              >
                <dt class="text-muted shrink-0 font-medium">{{ row.feature }}</dt>
                <dd class="text-highlighted text-right font-medium">{{ row[model.key] }}</dd>
              </div>
            </dl>

            <UButton
              :label="`Request ${model.name} Info`"
              color="primary"
              variant="subtle"
              trailing-icon="i-lucide-arrow-right"
              block
              @click="openConsultation({ product: model.interestValue })"
            />
          </div>
        </UPageCard>
      </div>

      <!-- Full comparison table on desktop / landscape tablet (>= lg) with clean wrapping -->
      <UPageCard
        variant="subtle"
        class="hidden overflow-hidden lg:block"
        :ui="{
          container: 'min-w-0 p-2',
          wrapper: 'min-w-0 w-full',
        }"
      >
        <div class="w-full min-w-0 overflow-x-auto">
          <UTable
            :data="specRows"
            :columns="specColumns"
            class="w-full"
            :ui="{
              th: 'whitespace-normal',
              td: 'whitespace-normal',
            }"
          />
        </div>
      </UPageCard>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="showroom"
      headline="Orange County Showroom"
      title="Experience a Stiltz Homelift in person in Irvine"
      description="Call for a private showroom appointment—and be sure to ask about our Veteran Special."
    >
      <div class="grid gap-6 lg:grid-cols-5">
        <!-- Business-card styled personal contact card for Jeff Cullen -->
        <div
          class="bg-neutral-600 dark:bg-neutral-800 relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 text-white shadow-lg sm:p-8 lg:col-span-2"
        >
          <div class="space-y-6">
            <Logo inverted />

            <div>
              <p
                class="inline-block border-b-2 border-white/80 pb-1.5 text-2xl font-bold tracking-tight italic"
              >
                Jeff Cullen
              </p>
              <p class="mt-2 text-sm font-light tracking-wide text-neutral-200">Owner</p>
            </div>
          </div>

          <div class="mt-8 space-y-2.5 text-sm">
            <a
              href="tel:+19492354536"
              class="flex items-center gap-2.5 font-medium text-white hover:underline"
            >
              <UIcon name="i-lucide-phone" class="text-primary-300 size-4 shrink-0" />
              949.235.4536
            </a>
            <a
              href="mailto:Jeff@UpsideLifts.com"
              class="flex items-center gap-2.5 text-neutral-100 hover:underline"
            >
              <UIcon name="i-lucide-mail" class="text-primary-300 size-4 shrink-0" />
              Jeff@UpsideLifts.com
            </a>
            <a
              href="https://maps.google.com/?q=17155+Von+Karman+Ave+%23101,+Irvine,+CA+92614"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-start gap-2.5 text-neutral-100 hover:underline"
            >
              <UIcon name="i-lucide-map-pin" class="text-primary-300 mt-0.5 size-4 shrink-0" />
              <span>
                17155 Von Karman Ave #101<br />
                Irvine, CA 92614
              </span>
            </a>
          </div>
        </div>

        <!-- Showroom details & Veteran Special card -->
        <UPageCard variant="subtle" class="lg:col-span-3">
          <div class="flex h-full flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="flex flex-wrap items-center gap-2">
                <UBadge
                  label="Veteran Special Available"
                  color="primary"
                  variant="solid"
                  size="md"
                  icon="i-lucide-medal"
                />
                <UBadge
                  label="By Appointment"
                  color="secondary"
                  variant="subtle"
                  size="md"
                  icon="i-lucide-calendar"
                />
              </div>

              <h3 class="text-highlighted text-xl font-bold tracking-tight sm:text-2xl">
                Test-ride a Stiltz Homelift at our Irvine showroom
              </h3>

              <p class="text-muted leading-relaxed">
                See the whisper-quiet dual-rail drive, crystal-clear panoramic glazing, and
                full-perimeter safety sensors up close. Bring your floor plans or photos—Jeff will
                walk you through placement options, pricing, and installation timelines with zero
                pressure.
              </p>

              <div class="grid gap-3 pt-1 sm:grid-cols-2">
                <div class="border-default bg-default/70 rounded-lg border p-3.5">
                  <p class="text-highlighted flex items-center gap-2 text-sm font-semibold">
                    <UIcon name="i-lucide-home" class="text-primary size-4" />
                    Free In-Home Assessment
                  </p>
                  <p class="text-muted mt-1 text-xs leading-relaxed">
                    Serving Irvine, Newport Beach, Laguna Woods, Mission Viejo, and all of Orange
                    County.
                  </p>
                </div>
                <div class="border-default bg-default/70 rounded-lg border p-3.5">
                  <p class="text-highlighted flex items-center gap-2 text-sm font-semibold">
                    <UIcon name="i-lucide-drafting-compass" class="text-primary size-4" />
                    Architect & Builder Ready
                  </p>
                  <p class="text-muted mt-1 text-xs leading-relaxed">
                    CAD specs and on-site coordination for remodels, extensions, and custom builds.
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2.5 pt-2 sm:flex-row sm:flex-wrap sm:gap-3">
              <UButton
                label="Book Showroom Visit"
                icon="i-lucide-calendar"
                color="primary"
                variant="solid"
                size="lg"
                class="justify-center"
                @click="openConsultation({ veteranSpecial: true })"
              />
              <UButton
                label="Call 949.235.4536"
                icon="i-lucide-phone"
                color="neutral"
                variant="outline"
                size="lg"
                class="justify-center"
                to="tel:+19492354536"
              />
              <UButton
                label="Directions"
                icon="i-lucide-navigation"
                color="neutral"
                variant="ghost"
                size="lg"
                class="justify-center"
                to="https://maps.google.com/?q=17155+Von+Karman+Ave+%23101,+Irvine,+CA+92614"
                target="_blank"
              />
            </div>
          </div>
        </UPageCard>
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="faq"
      headline="Common Questions"
      title="Everything homeowners ask before installing a Stiltz lift"
      description="Straightforward answers about showroom visits, retrofits, high ceilings, power outages, and safety."
    >
      <div class="mx-auto w-full max-w-3xl">
        <UAccordion :items="faqItems" />
      </div>
    </UPageSection>

    <USeparator />

    <!-- Split-panel Free Consultation Section (101 Mobility + California Mobility inspired) -->
    <UPageSection id="consultation">
      <div
        class="border-default bg-default grid overflow-hidden rounded-2xl border shadow-xl lg:grid-cols-12"
      >
        <div
          class="bg-neutral-100/90 dark:bg-neutral-900/90 flex flex-col justify-between space-y-6 p-5 sm:space-y-8 sm:p-8 lg:col-span-5 lg:p-10"
        >
          <div class="space-y-4">
            <UBadge
              label="Free · No Obligation"
              color="primary"
              variant="subtle"
              size="md"
              icon="i-lucide-shield-check"
            />

            <h2 class="text-highlighted text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Get a Free Consultation
            </h2>

            <p class="text-muted text-sm leading-relaxed sm:text-base">
              At Upside Home Lifts, we understand that every home and family is unique. That's why
              we offer a free, no-obligation in-home consultation or private Irvine showroom visit
              to help you find the right Stiltz Homelift.
            </p>

            <ul class="space-y-2.5 pt-1 sm:space-y-3 sm:pt-2">
              <li
                v-for="benefit in consultationBenefits"
                :key="benefit"
                class="text-toned flex items-start gap-2.5 text-sm"
              >
                <UIcon name="i-lucide-check-circle-2" class="text-primary mt-0.5 size-4 shrink-0" />
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>

          <div class="border-default space-y-2 border-t pt-5 text-sm sm:pt-6">
            <p class="text-highlighted font-semibold">Prefer to speak directly with Jeff Cullen?</p>
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href="tel:+19492354536"
                class="text-primary inline-flex items-center gap-1.5 font-semibold hover:underline"
              >
                <UIcon name="i-lucide-phone" class="size-4" />
                949.235.4536
              </a>
              <a
                href="mailto:Jeff@UpsideLifts.com"
                class="text-muted hover:text-highlighted inline-flex items-center gap-1.5"
              >
                <UIcon name="i-lucide-mail" class="size-4" />
                Jeff@UpsideLifts.com
              </a>
            </div>
            <p class="text-muted text-xs">
              Irvine Showroom: 17155 Von Karman Ave #101, Irvine, CA 92614
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
