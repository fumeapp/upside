<script setup lang="ts">
const { open, selectedProduct, preselectOcSpecial } = useConsultationModal();

const trustChecks = [
  "Free in-home assessment",
  "Irvine showroom test ride",
  "Full Stiltz warranty",
];
</script>

<template>
  <UModal
    v-model:open="open"
    title="Get Your Free Consultation"
    description="No obligation. Speak directly with Jeff Cullen, Owner of Upside Home Lifts in Orange County."
    :ui="{
      content: 'sm:max-w-xl',
    }"
  >
    <template #body>
      <div class="space-y-5">
        <div
          class="border-default bg-elevated/60 flex flex-wrap items-center gap-x-4 gap-y-1.5 rounded-lg border px-3.5 py-2.5 text-xs font-medium"
        >
          <span
            v-for="item in trustChecks"
            :key="item"
            class="text-highlighted inline-flex items-center gap-1.5"
          >
            <UIcon name="i-lucide-check" class="text-primary size-3.5 shrink-0" />
            {{ item }}
          </span>
        </div>

        <ConsultationForm
          :initial-product="selectedProduct"
          :initial-oc-special="preselectOcSpecial"
          compact
          submit-label="Get Your Free Estimate"
        />
      </div>
    </template>
  </UModal>
</template>
