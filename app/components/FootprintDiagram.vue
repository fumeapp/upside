<script setup lang="ts">
defineProps<{
  model: "duo" | "trio";
}>();
</script>

<template>
  <div
    class="footprint-grid border-default bg-default/90 dark:bg-neutral-900/90 flex w-full items-center justify-center rounded-xl border px-3 py-4 sm:px-5 sm:py-5"
  >
    <!-- STILTZ DUO ALTA — Vector Architectural Footprint -->
    <svg
      v-if="model === 'duo'"
      viewBox="0 0 460 344"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stiltz Duo Alta architectural footprint diagram: 31 7/8 inches by 41 1/4 inches external, 26 1/2 inches internal depth, 30 11/16 inches internal width, 23 1/8 inches entrance"
      class="h-64 w-full max-w-md sm:h-76"
    >
      <defs>
        <marker
          id="duo-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" class="fill-neutral-700 dark:fill-neutral-300" />
        </marker>
        <marker
          id="duo-arrow-primary"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" class="fill-primary-600 dark:fill-primary-400" />
        </marker>
      </defs>

      <!-- Subtle interior floor fill -->
      <path
        d="M 122 152 C 122 80, 174 35, 253 35 C 332 35, 384 80, 384 152 L 376 266 C 375 274, 368 279, 356 280 C 292 284, 214 284, 150 280 C 138 279, 131 274, 130 266 Z"
        class="fill-primary-50/55 dark:fill-primary-950/25"
      />

      <!-- Left Rail Bracket (outer + inner + bolt holes) -->
      <path
        d="M 115 133 C 96 140, 84 152, 84 164 C 84 176, 96 188, 115 195"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="2.2"
        stroke-linejoin="round"
      />
      <path
        d="M 115 140 C 101 146, 91 155, 91 164 C 91 173, 101 182, 115 188"
        class="stroke-secondary-600/80 dark:stroke-secondary-400/80"
        stroke-width="1.4"
        stroke-linejoin="round"
      />
      <circle
        cx="106"
        cy="148"
        r="3"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.5"
      />
      <circle
        cx="106"
        cy="180"
        r="3"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.5"
      />

      <!-- Right Rail Bracket (outer + inner + bolt holes) -->
      <path
        d="M 391 133 C 410 140, 422 152, 422 164 C 422 176, 410 188, 391 195"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="2.2"
        stroke-linejoin="round"
      />
      <path
        d="M 391 140 C 405 146, 415 155, 415 164 C 415 173, 405 182, 391 188"
        class="stroke-secondary-600/80 dark:stroke-secondary-400/80"
        stroke-width="1.4"
        stroke-linejoin="round"
      />
      <circle
        cx="400"
        cy="148"
        r="3"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.5"
      />
      <circle
        cx="400"
        cy="180"
        r="3"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.5"
      />

      <!-- Outer D-Shaped Cabin Shell -->
      <path
        d="M 115 152 C 115 74, 171 28, 253 28 C 335 28, 391 74, 391 152 L 383 268 C 382 279, 373 286, 358 287 C 292 291, 214 291, 148 287 C 133 286, 124 279, 123 268 Z"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="2.4"
        stroke-linejoin="round"
      />

      <!-- Inner Cabin Wall -->
      <path
        d="M 122 152 C 122 80, 174 35, 253 35 C 332 35, 384 80, 384 152 L 376 266 C 375 274, 368 279, 356 280 C 292 284, 214 284, 150 280 C 138 279, 131 274, 130 266 Z"
        class="stroke-secondary-600/75 dark:stroke-secondary-400/75"
        stroke-width="1.5"
        stroke-linejoin="round"
      />

      <!-- External Depth Arrow (Left) -->
      <line
        x1="54"
        y1="30"
        x2="54"
        y2="288"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.4"
        marker-start="url(#duo-arrow)"
        marker-end="url(#duo-arrow)"
      />
      <text
        x="36"
        y="159"
        text-anchor="middle"
        transform="rotate(-90 36 159)"
        font-size="12.5"
        class="fill-neutral-700 dark:fill-neutral-200 font-semibold"
      >
        31 7/8″ / 810mm
      </text>

      <!-- External Width Arrow (Bottom) -->
      <line
        x1="86"
        y1="312"
        x2="420"
        y2="312"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.4"
        marker-start="url(#duo-arrow)"
        marker-end="url(#duo-arrow)"
      />
      <text
        x="253"
        y="334"
        text-anchor="middle"
        font-size="12.5"
        class="fill-neutral-700 dark:fill-neutral-200 font-semibold"
      >
        41 1/4″ / 1047mm
      </text>

      <!-- Internal Depth Arrow (Center Vertical) -->
      <line
        x1="253"
        y1="38"
        x2="253"
        y2="278"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.4"
        marker-start="url(#duo-arrow)"
        marker-end="url(#duo-arrow)"
      />
      <text
        x="239"
        y="102"
        text-anchor="middle"
        transform="rotate(-90 239 102)"
        font-size="11.5"
        class="fill-neutral-700 dark:fill-neutral-200 font-medium"
      >
        26 1/2″ / 673mm
      </text>

      <!-- Internal Width Arrow (Center Horizontal) -->
      <line
        x1="126"
        y1="166"
        x2="380"
        y2="166"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.4"
        marker-start="url(#duo-arrow)"
        marker-end="url(#duo-arrow)"
      />
      <text
        x="318"
        y="184"
        text-anchor="middle"
        font-size="11.5"
        class="fill-neutral-700 dark:fill-neutral-200 font-medium"
      >
        30 11/16″ / 779mm
      </text>

      <!-- Entrance / Exit Width Arrow (Bottom Interior) -->
      <line
        x1="158"
        y1="268"
        x2="348"
        y2="268"
        class="stroke-primary-600 dark:stroke-primary-400"
        stroke-width="1.6"
        marker-start="url(#duo-arrow-primary)"
        marker-end="url(#duo-arrow-primary)"
      />
      <text
        x="198"
        y="256"
        text-anchor="middle"
        font-size="11"
        class="fill-neutral-500 dark:fill-neutral-400 italic"
      >
        Entrance / Exit
      </text>
      <text
        x="312"
        y="256"
        text-anchor="middle"
        font-size="11.5"
        class="fill-primary-700 dark:fill-primary-400 font-semibold"
      >
        23 1/8″ / 587mm
      </text>
    </svg>

    <!-- STILTZ TRIO ALTA / THRU-CAR — Vector Architectural Footprint -->
    <svg
      v-else
      viewBox="0 0 460 444"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stiltz Trio Alta and Trio Alta Thru-Car architectural footprint diagram: 50 3/8 inches by 41 1/4 inches external, 45 3/16 inches internal depth, 30 7/16 inches internal width, 31 1/2 inches entrance"
      class="h-72 w-full max-w-md sm:h-76"
    >
      <defs>
        <marker
          id="trio-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6.5"
          markerHeight="6.5"
          orient="auto-start-reverse"
        >
          <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" class="fill-neutral-700 dark:fill-neutral-300" />
        </marker>
        <marker
          id="trio-arrow-primary"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6.5"
          markerHeight="6.5"
          orient="auto-start-reverse"
        >
          <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" class="fill-primary-600 dark:fill-primary-400" />
        </marker>
      </defs>

      <!-- Subtle interior floor fill -->
      <path
        d="M 134 62 C 134 50, 148 43, 174 41 C 224 37, 282 37, 332 41 C 358 43, 372 50, 372 62 C 372 74, 365 82, 362 92 C 357 132, 355 172, 355 212 C 355 252, 357 292, 362 332 C 365 342, 372 350, 372 362 C 372 374, 358 381, 332 383 C 282 387, 224 387, 174 383 C 148 381, 134 374, 134 362 C 134 350, 141 342, 144 332 C 149 292, 151 252, 151 212 C 151 172, 149 132, 144 92 C 141 82, 134 74, 134 62 Z"
        class="fill-primary-50/55 dark:fill-primary-950/25"
      />

      <!-- Left Rail Bracket -->
      <path
        d="M 143 182 C 122 189, 108 200, 108 212 C 108 224, 122 235, 143 242"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="2.4"
        stroke-linejoin="round"
      />
      <path
        d="M 143 189 C 127 195, 115 204, 115 212 C 115 220, 127 229, 143 235"
        class="stroke-secondary-600/80 dark:stroke-secondary-400/80"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <circle
        cx="133"
        cy="197"
        r="3.2"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.6"
      />
      <circle
        cx="133"
        cy="227"
        r="3.2"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.6"
      />

      <!-- Right Rail Bracket -->
      <path
        d="M 363 182 C 384 189, 398 200, 398 212 C 398 224, 384 235, 363 242"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="2.4"
        stroke-linejoin="round"
      />
      <path
        d="M 363 189 C 379 195, 391 204, 391 212 C 391 220, 379 229, 363 235"
        class="stroke-secondary-600/80 dark:stroke-secondary-400/80"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <circle
        cx="373"
        cy="197"
        r="3.2"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.6"
      />
      <circle
        cx="373"
        cy="227"
        r="3.2"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.6"
      />

      <!-- Outer Trio Alta Waisted Cabin Shell -->
      <path
        d="M 127 60 C 127 44, 144 36, 173 34 C 224 30, 282 30, 333 34 C 362 36, 379 44, 379 60 C 379 75, 372 84, 369 94 C 364 133, 362 172, 362 212 C 362 252, 364 291, 369 330 C 372 340, 379 349, 379 364 C 379 380, 362 388, 333 390 C 282 394, 224 394, 173 390 C 144 388, 127 380, 127 364 C 127 349, 134 340, 137 330 C 142 291, 144 252, 144 212 C 144 172, 142 133, 137 94 C 134 84, 127 75, 127 60 Z"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="2.6"
        stroke-linejoin="round"
      />

      <!-- Inner Cabin Wall -->
      <path
        d="M 134 62 C 134 50, 148 43, 174 41 C 224 37, 282 37, 332 41 C 358 43, 372 50, 372 62 C 372 74, 365 82, 362 92 C 357 132, 355 172, 355 212 C 355 252, 357 292, 362 332 C 365 342, 372 350, 372 362 C 372 374, 358 381, 332 383 C 282 387, 224 387, 174 383 C 148 381, 134 374, 134 362 C 134 350, 141 342, 144 332 C 149 292, 151 252, 151 212 C 151 172, 149 132, 144 92 C 141 82, 134 74, 134 62 Z"
        class="stroke-secondary-600/75 dark:stroke-secondary-400/75"
        stroke-width="1.6"
        stroke-linejoin="round"
      />

      <!-- Optional Thru-Car top indicator -->
      <text
        x="253"
        y="17"
        text-anchor="middle"
        font-size="13"
        class="fill-neutral-500 dark:fill-neutral-400 italic"
      >
        Optional Thru-Car Exit
      </text>
      <line
        x1="168"
        y1="44"
        x2="338"
        y2="44"
        class="stroke-primary-600/65 dark:stroke-primary-400/65"
        stroke-width="2"
        stroke-dasharray="5 4"
      />

      <!-- External Depth Arrow (Left) -->
      <line
        x1="74"
        y1="32"
        x2="74"
        y2="392"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.6"
        marker-start="url(#trio-arrow)"
        marker-end="url(#trio-arrow)"
      />
      <text
        x="52"
        y="212"
        text-anchor="middle"
        transform="rotate(-90 52 212)"
        font-size="15"
        class="fill-neutral-700 dark:fill-neutral-200 font-semibold"
      >
        50 3/8″ / 1280mm
      </text>

      <!-- External Width Arrow (Bottom) -->
      <line
        x1="110"
        y1="414"
        x2="396"
        y2="414"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.6"
        marker-start="url(#trio-arrow)"
        marker-end="url(#trio-arrow)"
      />
      <text
        x="253"
        y="438"
        text-anchor="middle"
        font-size="15"
        class="fill-neutral-700 dark:fill-neutral-200 font-semibold"
      >
        41 1/4″ / 1047mm
      </text>

      <!-- Internal Depth Arrow (Center Vertical) -->
      <line
        x1="253"
        y1="41"
        x2="253"
        y2="383"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.6"
        marker-start="url(#trio-arrow)"
        marker-end="url(#trio-arrow)"
      />
      <text
        x="273"
        y="128"
        text-anchor="middle"
        transform="rotate(-90 273 128)"
        font-size="13.5"
        class="fill-neutral-700 dark:fill-neutral-200 font-medium"
      >
        45 3/16″ / 1147mm
      </text>

      <!-- Internal Width Arrow (Center Horizontal) -->
      <line
        x1="155"
        y1="212"
        x2="351"
        y2="212"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.6"
        marker-start="url(#trio-arrow)"
        marker-end="url(#trio-arrow)"
      />
      <rect
        x="189"
        y="220"
        width="128"
        height="22"
        rx="4"
        class="fill-white/95 dark:fill-neutral-900/95"
      />
      <text
        x="253"
        y="235"
        text-anchor="middle"
        font-size="13"
        class="fill-neutral-700 dark:fill-neutral-200 font-medium"
      >
        30 7/16″ / 773mm
      </text>

      <!-- Entrance / Exit Width Arrow (Bottom Interior) -->
      <line
        x1="142"
        y1="350"
        x2="364"
        y2="350"
        class="stroke-primary-600 dark:stroke-primary-400"
        stroke-width="1.8"
        marker-start="url(#trio-arrow-primary)"
        marker-end="url(#trio-arrow-primary)"
      />
      <text
        x="196"
        y="372"
        text-anchor="middle"
        font-size="13"
        class="fill-neutral-500 dark:fill-neutral-400 italic"
      >
        Entrance / Exit
      </text>
      <text
        x="312"
        y="372"
        text-anchor="middle"
        font-size="13.5"
        class="fill-primary-700 dark:fill-primary-400 font-semibold"
      >
        31 1/2″ / 800mm
      </text>
    </svg>
  </div>
</template>

<style scoped>
.footprint-grid {
  background-size: 24px 24px;
  background-image:
    linear-gradient(to right, rgb(148 163 184 / 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(148 163 184 / 0.1) 1px, transparent 1px);
}
</style>
