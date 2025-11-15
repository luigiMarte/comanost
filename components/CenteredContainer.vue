<template>
  <div :style="{ '--max-width': widthStyle }" class="centered-container">
    <slot name="content"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  widthStyle: {
    type: String,
    default: "1250px",
  },
});
</script>

<style lang="scss" scoped>
.centered-container {
  width: 100%;
  margin: 0 auto;

  @include tablet-landscape-up {
    max-width: var(--max-width + px);
  }
}
</style>
