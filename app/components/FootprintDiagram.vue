<script setup lang="ts">
defineProps<{
  model: "duo" | "trio";
}>();
</script>

<template>
  <div
    class="footprint-grid border-default bg-default/90 dark:bg-neutral-900/90 flex w-full items-center justify-center rounded-xl border px-3 py-4 sm:px-5 sm:py-5"
  >
    <!-- STILTZ DUO ALTA — Precision Vector Trace of Official Stiltz Footprint -->
    <svg
      v-if="model === 'duo'"
      viewBox="0 50 302 224"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stiltz Duo Alta footprint diagram: 31 7/8 inches by 41 1/4 inches external, 26 1/2 inches internal depth, 30 11/16 inches internal width, 23 1/8 inches entrance"
      class="h-64 w-full max-w-md sm:h-76"
    >
      <defs>
        <marker
          id="duo-arrow"
          viewBox="0 0 10 10"
          refX="8.5"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto-start-reverse"
        >
          <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" class="fill-neutral-700 dark:fill-neutral-300" />
        </marker>
      </defs>

      <!-- Subtle interior floor fill -->
      <path
        d="M 159.5 65.8 C 130 65.8, 106 75, 92 88 C 80 99, 72 113, 68.5 129 L 68.5 173 C 69.5 191, 72 209, 74.2 223.5 C 75 227.5, 77.5 229.6, 83 230.8 C 105 234.5, 132 235.6, 159.5 235.6 C 187 235.6, 214 234.5, 236 230.8 C 241.5 229.6, 244 227.5, 244.8 223.5 C 247 209, 249.5 191, 250.5 173 L 250.5 129 C 247 113, 239 99, 227 88 C 213 75, 189 65.8, 159.5 65.8 Z"
        class="fill-primary-50/45 dark:fill-primary-950/20"
      />

      <!-- Outer Cabin Contour + Integrated Stiltz Twin Rail Brackets -->
      <path
        d="M 159.5 62.5 C 129 62.5, 104 72, 89 85.5 C 77 96.5, 69.5 111, 64.5 128 L 56.5 128 C 53.5 128, 51 129.8, 49.5 132.5 L 41 146.5 C 39 149.5, 39 152.5, 41 155.5 L 49.5 169.5 C 51 172.2, 53.5 174, 56.5 174 L 64.5 174 C 65.8 192, 68.2 210, 70.5 224.5 C 71.5 229.5, 74.5 232.2, 81 233.6 C 104 237.5, 132 238.8, 159.5 238.8 C 187 238.8, 215 237.5, 238 233.6 C 244.5 232.2, 247.5 229.5, 248.5 224.5 C 250.8 210, 253.2 192, 254.5 174 L 262.5 174 C 265.5 174, 268 172.2, 269.5 169.5 L 278 155.5 C 280 152.5, 280 149.5, 278 146.5 L 269.5 132.5 C 268 129.8, 265.5 128, 262.5 128 L 254.5 128 C 249.5 111, 242 96.5, 230 85.5 C 215 72, 190 62.5, 159.5 62.5 Z"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.75"
        stroke-linejoin="round"
      />

      <!-- Stiltz Duo Alta Upper Shoulder Tabs -->
      <path
        d="M 91 84.5 C 83 85.8, 76.5 91.5, 73.5 100 C 72 104.5, 71 108.5, 70 112"
        class="stroke-secondary-600/90 dark:stroke-secondary-400/90"
        stroke-width="1.35"
        stroke-linecap="round"
      />
      <path
        d="M 228 84.5 C 236 85.8, 242.5 91.5, 245.5 100 C 247 104.5, 248 108.5, 249 112"
        class="stroke-secondary-600/90 dark:stroke-secondary-400/90"
        stroke-width="1.35"
        stroke-linecap="round"
      />

      <!-- Inner Cabin Wall -->
      <path
        d="M 159.5 65.8 C 130 65.8, 106 75, 92 88 C 80 99, 72 113, 68.5 129 L 68.5 173 C 69.5 191, 72 209, 74.2 223.5 C 75 227.5, 77.5 229.6, 83 230.8 C 105 234.5, 132 235.6, 159.5 235.6 C 187 235.6, 214 234.5, 236 230.8 C 241.5 229.6, 244 227.5, 244.8 223.5 C 247 209, 249.5 191, 250.5 173 L 250.5 129 C 247 113, 239 99, 227 88 C 213 75, 189 65.8, 159.5 65.8 Z"
        class="stroke-secondary-600/80 dark:stroke-secondary-400/80"
        stroke-width="1.2"
        stroke-linejoin="round"
      />

      <!-- Left Rail Bracket Inner Profile & Bolt Holes -->
      <path
        d="M 55 135.5 L 44.8 148.5 C 43.2 150.3, 43.2 151.7, 44.8 153.5 L 55 166.5"
        class="stroke-secondary-600/80 dark:stroke-secondary-400/80"
        stroke-width="1.15"
        stroke-linecap="round"
      />
      <circle
        cx="59.5"
        cy="134.5"
        r="2.2"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.15"
      />
      <circle
        cx="59.5"
        cy="167.5"
        r="2.2"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.15"
      />

      <!-- Right Rail Bracket Inner Profile & Bolt Holes -->
      <path
        d="M 264 135.5 L 274.2 148.5 C 275.8 150.3, 275.8 151.7, 274.2 153.5 L 264 166.5"
        class="stroke-secondary-600/80 dark:stroke-secondary-400/80"
        stroke-width="1.15"
        stroke-linecap="round"
      />
      <circle
        cx="259.5"
        cy="134.5"
        r="2.2"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.15"
      />
      <circle
        cx="259.5"
        cy="167.5"
        r="2.2"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.15"
      />

      <!-- External Depth Arrow (Left) -->
      <line
        x1="28"
        y1="64"
        x2="28"
        y2="237.5"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.05"
        marker-start="url(#duo-arrow)"
        marker-end="url(#duo-arrow)"
      />
      <text
        x="16"
        y="151"
        text-anchor="middle"
        transform="rotate(-90 16 151)"
        font-size="9.5"
        class="fill-neutral-700 dark:fill-neutral-200 font-semibold"
      >
        31 7/8″ / 810mm
      </text>

      <!-- External Width Arrow (Bottom) -->
      <line
        x1="40.5"
        y1="251.5"
        x2="278.5"
        y2="251.5"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.05"
        marker-start="url(#duo-arrow)"
        marker-end="url(#duo-arrow)"
      />
      <text
        x="159.5"
        y="267"
        text-anchor="middle"
        font-size="9.5"
        class="fill-neutral-700 dark:fill-neutral-200 font-semibold"
      >
        41 1/4″ / 1047mm
      </text>

      <!-- Internal Depth Arrow (Center Vertical) -->
      <line
        x1="159.5"
        y1="70"
        x2="159.5"
        y2="231.5"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.05"
        marker-start="url(#duo-arrow)"
        marker-end="url(#duo-arrow)"
      />
      <text
        x="149.5"
        y="112"
        text-anchor="middle"
        transform="rotate(-90 149.5 112)"
        font-size="8.8"
        class="fill-neutral-700 dark:fill-neutral-200 font-medium"
      >
        26 1/2″ / 673mm
      </text>

      <!-- Internal Width Arrow (Center Horizontal) -->
      <line
        x1="73"
        y1="151"
        x2="246"
        y2="151"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.05"
        marker-start="url(#duo-arrow)"
        marker-end="url(#duo-arrow)"
      />
      <text
        x="203"
        y="164"
        text-anchor="middle"
        font-size="8.8"
        class="fill-neutral-700 dark:fill-neutral-200 font-medium"
      >
        30 11/16″ / 779mm
      </text>

      <!-- Entrance / Exit Label & Width (matching official Stiltz layout) -->
      <text
        x="119"
        y="226"
        text-anchor="middle"
        font-size="8.5"
        class="fill-neutral-500 dark:fill-neutral-400 italic"
      >
        Entrance/Exit
      </text>
      <text
        x="203"
        y="226"
        text-anchor="middle"
        font-size="9"
        class="fill-neutral-700 dark:fill-neutral-200 font-semibold"
      >
        23 1/8″ / 587mm
      </text>
    </svg>

    <!-- STILTZ TRIO ALTA / THRU-CAR — Precision Vector Trace of Official Stiltz Footprint -->
    <svg
      v-else
      viewBox="0 52 308 368"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stiltz Trio Alta and Trio Alta Thru-Car footprint diagram: 50 3/8 inches by 41 1/4 inches external, 45 3/16 inches internal depth, 30 7/16 inches internal width, 31 1/2 inches entrance"
      class="h-72 w-full max-w-md sm:h-76"
    >
      <defs>
        <marker
          id="trio-arrow"
          viewBox="0 0 10 10"
          refX="8.5"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" class="fill-neutral-700 dark:fill-neutral-300" />
        </marker>
      </defs>

      <!-- Subtle interior floor fill -->
      <path
        d="M 160.5 67.8 C 122.5 67.8, 89.5 71.6, 70 78.3 C 58.5 82.4, 52.5 89.8, 52.5 98.5 C 52.5 106.8, 56.2 114.2, 62.6 120.5 C 65.3 144.5, 67.6 173, 68.5 201 L 68.5 245 C 67.6 273, 65.3 301.5, 62.6 325.5 C 56.2 331.8, 52.5 339.2, 52.5 347.5 C 52.5 356.2, 58.5 363.6, 70 367.7 C 89.5 374.4, 122.5 378.2, 160.5 378.2 C 198.5 378.2, 231.5 374.4, 251 367.7 C 262.5 363.6, 268.5 356.2, 268.5 347.5 C 268.5 339.2, 264.8 331.8, 258.4 325.5 C 255.7 301.5, 253.4 273, 252.5 245 L 252.5 201 C 253.4 173, 255.7 144.5, 258.4 120.5 C 264.8 114.2, 268.5 106.8, 268.5 98.5 C 268.5 89.8, 262.5 82.4, 251 78.3 C 231.5 71.6, 198.5 67.8, 160.5 67.8 Z"
        class="fill-primary-50/45 dark:fill-primary-950/20"
      />

      <!-- Outer Trio Alta Cabin Contour + Integrated Stiltz Twin Rail Brackets -->
      <path
        d="M 160.5 64 C 121.5 64, 87.5 68, 67.5 75 C 54.8 79.5, 48.8 88, 48.8 98.5 C 48.8 108, 52.8 116.5, 59 122.5 C 61.5 146, 63.8 174, 64.5 201 L 57 201 C 54 201, 51.5 202.8, 50 205.5 L 42.5 218.5 C 40.8 221.5, 40.8 224.5, 42.5 227.5 L 50 240.5 C 51.5 243.2, 54 245, 57 245 L 64.5 245 C 63.8 272, 61.5 300, 59 323.5 C 52.8 329.5, 48.8 338, 48.8 347.5 C 48.8 358, 54.8 366.5, 67.5 371 C 87.5 378, 121.5 382, 160.5 382 C 199.5 382, 233.5 378, 253.5 371 C 266.2 366.5, 272.2 358, 272.2 347.5 C 272.2 338, 268.2 329.5, 262 323.5 C 259.5 300, 257.2 272, 256.5 245 L 264 245 C 267 245, 269.5 243.2, 271 240.5 L 278.5 227.5 C 280.2 224.5, 280.2 221.5, 278.5 218.5 L 271 205.5 C 269.5 202.8, 267 201, 264 201 L 256.5 201 C 257.2 174, 259.5 146, 262 122.5 C 268.2 116.5, 272.2 108, 272.2 98.5 C 272.2 88, 266.2 79.5, 253.5 75 C 233.5 68, 199.5 64, 160.5 64 Z"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="2"
        stroke-linejoin="round"
      />

      <!-- Inner Cabin Wall -->
      <path
        d="M 160.5 67.8 C 122.5 67.8, 89.5 71.6, 70 78.3 C 58.5 82.4, 52.5 89.8, 52.5 98.5 C 52.5 106.8, 56.2 114.2, 62.6 120.5 C 65.3 144.5, 67.6 173, 68.5 201 L 68.5 245 C 67.6 273, 65.3 301.5, 62.6 325.5 C 56.2 331.8, 52.5 339.2, 52.5 347.5 C 52.5 356.2, 58.5 363.6, 70 367.7 C 89.5 374.4, 122.5 378.2, 160.5 378.2 C 198.5 378.2, 231.5 374.4, 251 367.7 C 262.5 363.6, 268.5 356.2, 268.5 347.5 C 268.5 339.2, 264.8 331.8, 258.4 325.5 C 255.7 301.5, 253.4 273, 252.5 245 L 252.5 201 C 253.4 173, 255.7 144.5, 258.4 120.5 C 264.8 114.2, 268.5 106.8, 268.5 98.5 C 268.5 89.8, 262.5 82.4, 251 78.3 C 231.5 71.6, 198.5 67.8, 160.5 67.8 Z"
        class="stroke-secondary-600/80 dark:stroke-secondary-400/80"
        stroke-width="1.35"
        stroke-linejoin="round"
      />

      <!-- Left Rail Bracket Inner Profile & Bolt Holes -->
      <path
        d="M 55.5 207.5 L 46 220.5 C 44.5 222.2, 44.5 223.8, 46 225.5 L 55.5 238.5"
        class="stroke-secondary-600/80 dark:stroke-secondary-400/80"
        stroke-width="1.3"
        stroke-linecap="round"
      />
      <circle
        cx="59.8"
        cy="207"
        r="2.3"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.3"
      />
      <circle
        cx="59.8"
        cy="239"
        r="2.3"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.3"
      />

      <!-- Right Rail Bracket Inner Profile & Bolt Holes -->
      <path
        d="M 265.5 207.5 L 275 220.5 C 276.5 222.2, 276.5 223.8, 275 225.5 L 265.5 238.5"
        class="stroke-secondary-600/80 dark:stroke-secondary-400/80"
        stroke-width="1.3"
        stroke-linecap="round"
      />
      <circle
        cx="261.2"
        cy="207"
        r="2.3"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.3"
      />
      <circle
        cx="261.2"
        cy="239"
        r="2.3"
        class="stroke-secondary-600 dark:stroke-secondary-400"
        stroke-width="1.3"
      />

      <!-- External Depth Arrow (Left) -->
      <line
        x1="31"
        y1="65.5"
        x2="31"
        y2="380.5"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.3"
        marker-start="url(#trio-arrow)"
        marker-end="url(#trio-arrow)"
      />
      <text
        x="15"
        y="223"
        text-anchor="middle"
        transform="rotate(-90 15 223)"
        font-size="12.5"
        class="fill-neutral-700 dark:fill-neutral-200 font-semibold"
      >
        50 3/8″ / 1280mm
      </text>

      <!-- External Width Arrow (Bottom) -->
      <line
        x1="42"
        y1="395"
        x2="279"
        y2="395"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.3"
        marker-start="url(#trio-arrow)"
        marker-end="url(#trio-arrow)"
      />
      <text
        x="160.5"
        y="413"
        text-anchor="middle"
        font-size="12.5"
        class="fill-neutral-700 dark:fill-neutral-200 font-semibold"
      >
        41 1/4″ / 1047mm
      </text>

      <!-- Internal Depth Arrow (Center Vertical) -->
      <line
        x1="160.5"
        y1="73"
        x2="160.5"
        y2="373"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.3"
        marker-start="url(#trio-arrow)"
        marker-end="url(#trio-arrow)"
      />
      <text
        x="175"
        y="148"
        text-anchor="middle"
        transform="rotate(-90 175 148)"
        font-size="11.5"
        class="fill-neutral-700 dark:fill-neutral-200 font-medium"
      >
        45 3/16″ / 1147mm
      </text>

      <!-- Internal Width Arrow (Center Horizontal) -->
      <line
        x1="74"
        y1="223"
        x2="247"
        y2="223"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.3"
        marker-start="url(#trio-arrow)"
        marker-end="url(#trio-arrow)"
      />
      <text
        x="207"
        y="238"
        text-anchor="middle"
        font-size="9.2"
        class="fill-neutral-700 dark:fill-neutral-200 font-medium"
      >
        30 7/16″ / 773mm
      </text>

      <!-- Entrance / Exit Width Arrow (Bottom Interior, matching official Stiltz layout) -->
      <line
        x1="58"
        y1="348"
        x2="263"
        y2="348"
        class="stroke-neutral-700 dark:stroke-neutral-300"
        stroke-width="1.3"
        marker-start="url(#trio-arrow)"
        marker-end="url(#trio-arrow)"
      />
      <text
        x="112"
        y="365"
        text-anchor="middle"
        font-size="10"
        class="fill-neutral-500 dark:fill-neutral-400 italic"
      >
        Entrance/Exit
      </text>
      <text
        x="212"
        y="365"
        text-anchor="middle"
        font-size="10"
        class="fill-neutral-700 dark:fill-neutral-200 font-semibold"
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
