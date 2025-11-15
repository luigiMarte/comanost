<template>
  <section
    class="hero-image"
    :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
  >
    <div class="overlay">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: $corporate-black;
  height: 25vh;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: -1;
  @include tablet-landscape-up {
    height: 40vh; /* Ajusta la altura según sea necesario */
  }
}

.overlay {
  padding: toRem(20);
  border-radius: toRem(5);
}

.hero-image h1 {
  margin: 0;
  font-size: toRem(60);
}

.hero-image p {
  margin: 0;
  font-size: toRem(20);
}
</style>
