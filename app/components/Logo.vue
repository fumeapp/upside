<script setup lang="ts">
defineProps<{
  inverted?: boolean;
}>();
</script>

<template>
  <span class="inline-flex items-center gap-2.5 select-none">
    <!-- Upside Home Lifts House + Rising Lift Arrow Emblem -->
    <svg
      viewBox="0 0 44 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="h-9 w-auto shrink-0"
      aria-hidden="true"
    >
      <!-- Chimney -->
      <path
        d="M31 6H35.5V14.5L31 10.6V6Z"
        stroke="currentColor"
        stroke-width="2.4"
        stroke-linejoin="miter"
        :class="inverted ? 'text-white' : 'text-neutral-800 dark:text-neutral-100'"
      />
      <!-- Outer roof gable -->
      <path
        d="M4 19L22 4L40 19"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="square"
        stroke-linejoin="miter"
        :class="inverted ? 'text-white' : 'text-neutral-800 dark:text-neutral-100'"
      />
      <!-- Left L-shaped cabin wall -->
      <path
        d="M10 19V35.5H15.5"
        stroke="currentColor"
        stroke-width="2.7"
        stroke-linecap="square"
        stroke-linejoin="miter"
        :class="inverted ? 'text-neutral-200' : 'text-neutral-700 dark:text-neutral-200'"
      />
      <!-- Right mirrored L-shaped cabin wall -->
      <path
        d="M34 19V35.5H28.5"
        stroke="currentColor"
        stroke-width="2.7"
        stroke-linecap="square"
        stroke-linejoin="miter"
        :class="inverted ? 'text-neutral-200' : 'text-neutral-700 dark:text-neutral-200'"
      />
      <!-- Inner twin guide rails -->
      <line
        x1="17"
        y1="21.5"
        x2="17"
        y2="35.5"
        stroke="currentColor"
        stroke-width="2.6"
        stroke-linecap="square"
        :class="inverted ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-300'"
      />
      <line
        x1="27"
        y1="21.5"
        x2="27"
        y2="35.5"
        stroke="currentColor"
        stroke-width="2.6"
        stroke-linecap="square"
        :class="inverted ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-300'"
      />
      <!-- Center rising lift arrow -->
      <path
        d="M14.5 18.5L22 11.5L29.5 18.5"
        stroke="var(--ui-color-primary-500)"
        stroke-width="2.8"
        stroke-linecap="square"
        stroke-linejoin="miter"
      />
      <line
        x1="22"
        y1="14"
        x2="22"
        y2="35.5"
        stroke="var(--ui-color-primary-500)"
        stroke-width="2.8"
        stroke-linecap="square"
      />
    </svg>

    <span class="flex flex-col leading-none">
      <span
        class="text-base font-extrabold tracking-[0.18em] uppercase sm:text-lg"
        :class="inverted ? 'text-white' : 'text-highlighted'"
      >
        UPSIDE
      </span>
      <span
        class="mt-1 text-[9px] font-semibold tracking-[0.28em] uppercase sm:text-[10px]"
        :class="inverted ? 'text-neutral-300' : 'text-muted'"
      >
        HOME LIFTS
      </span>
    </span>
  </span>
</template>
