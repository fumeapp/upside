<template>
  <span class="inline-flex items-center gap-2.5 select-none">
    <!-- Dual-Rail Architectural Lift Mark -->
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="upsideLogoGrad"
          x1="4"
          y1="25"
          x2="24"
          y2="3"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stop-color="var(--ui-color-secondary-600)" />
          <stop offset="55%" stop-color="var(--ui-color-primary-500)" />
          <stop offset="100%" stop-color="var(--ui-color-primary-600)" />
        </linearGradient>
      </defs>
      <!-- Twin vertical self-supporting rails -->
      <line
        x1="5.5"
        y1="3.5"
        x2="5.5"
        y2="24.5"
        stroke="url(#upsideLogoGrad)"
        stroke-width="2.1"
        stroke-linecap="round"
      />
      <line
        x1="22.5"
        y1="3.5"
        x2="22.5"
        y2="24.5"
        stroke="url(#upsideLogoGrad)"
        stroke-width="2.1"
        stroke-linecap="round"
      />
      <!-- Curved glass cabin arch -->
      <rect
        x="8.5"
        y="7.5"
        width="11"
        height="15"
        rx="5.5"
        stroke="url(#upsideLogoGrad)"
        stroke-width="2"
      />
      <!-- Upward lift chevron -->
      <path
        d="M11.75 15.75L14 13.25L16.25 15.75"
        stroke="url(#upsideLogoGrad)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <span class="inline-flex items-baseline gap-1 text-lg leading-none">
      <span class="text-highlighted font-bold tracking-tight">Upside</span>
      <span
        class="text-secondary-600 dark:text-secondary-400 font-serif text-[1.15em] font-normal italic"
      >
        Lifts
      </span>
    </span>
  </span>
</template>
