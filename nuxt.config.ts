export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["vue3-carousel-nuxt"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/normalize.css", "~/assets/css/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          //api: "modern-compiler",
          additionalData: '@use "@/assets/styles/setup" as *;',
        },
      },
    },
  },
});
