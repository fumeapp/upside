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
      content: 'w-[calc(100vw-1.5rem)] sm:max-w-xl max-h-[90dvh]',
      header: 'p-4 sm:px-6 sm:py-5',
      body: 'overflow-y-auto p-4 sm:p-6',
    }"
  >
    <template #body>
      <div class="space-y-4 sm:space-y-5">
        <div
          class="border-default bg-elevated/60 flex flex-wrap items-center gap-x-4 gap-y-1.5 rounded-lg border px-3 py-2 text-xs font-medium sm:px-3.5 sm:py-2.5"
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
