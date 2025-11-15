export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["vue3-carousel-nuxt"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/normalize.css", "~/assets/css/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/main.scss";',
        },
      },
    },
  },
});
