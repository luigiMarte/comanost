<template>
  <carousel :items-to-show="1" class="carousel-container">
    <slide v-for="(image, index) in images" :key="index">
      <img :src="image.url" :alt="'Image ' + (index + 1)" />
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script setup>
//import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.carousel-container {
  position: relative;
  z-index: 1;
}
.carousel__slide img {
  width: 100%;
  height: auto;
  @include tablet-landscape-up {
    width: toRem(1010);
    height: toRem(592);
  }
}
</style>
