<template>
  <div v-if="client_logos">
    <carousel
      :items-to-show="3"
      :autoplay="2000"
      :wrap-around="true"
      :pauseAutoplayOnHover="true"
      :transition="500"
    >
      <slide v-for="(image, index) in client_logos" :key="index">
        <a :href="image.site" target="_blank">
          <img :src="image.logo" :alt="'Image ' + (index + 1)" />
        </a>
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
  <div v-else>loading</div>
</template>

<script setup>
import { ref } from "vue";
import { client_logos } from "~/constants/clients.js";
import { Carousel, Slide, Pagination } from "vue3-carousel";

//const itemsToShow = ref(3);
// const updateItemsToShow = () => {
//   itemsToShow.value = window.innerWidth <= 768 ? 2 : 3;
// };

// onMounted(() => {
//   updateItemsToShow();
//   window.addEventListener("resize", updateItemsToShow);
// });

// onBeforeUnmount(() => {
//   window.removeEventListener("resize", updateItemsToShow);
// });
</script>

<style scoped>
.carousel__slide img {
  width: 100%;
  height: auto;
}
</style>
