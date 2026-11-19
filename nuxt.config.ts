export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  colorMode: {
    preference: "light",
    fallback: "light",
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    mail: {
      from: "upside@fume.bio",
      to: "Jeff@UpsideLifts.com",
    },
    public: {
      url: "",
      prefix: "",
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2026-11-01",
  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit", "@vueuse/core"],
    },
  },
  typescript: {
    strict: true,
  },
  icon: {
    clientBundle: {
      scan: {
        globInclude: ["**/*.{vue,jsx,tsx,ts,js,md,mdc,mdx,yml,yaml}", "**/.*.yml", "**/.*.yaml"],
      },
    },
  },
});
