<template>
  <div class="testimonials-container">
    <div
      class="testimonial"
      v-for="(testimonial, index) in clients_testimonials"
      :key="index"
    >
      <p class="text">&ldquo;{{ testimonial.text }}&rdquo;</p>
      <p class="author">- {{ testimonial.author }}</p>
      <div
        v-if="index < clients_testimonials.length - 1"
        class="vertical-line"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { clients_testimonials } from "~/constants/clients";
</script>

<style scoped lang="scss">
.testimonials-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  max-width: 100%;
  margin: 0 auto;
  padding: toRem(0);

  > :last-child {
    display: none;
  }

  @include tablet-portrait-up {
    max-width: toRem(1200);
    justify-content: space-between;
    gap: toRem(20);

    > :last-child {
      display: block;
    }
  }

  .testimonial {
    flex: 1;
    position: relative;
    padding: toRem(10);
    text-align: left;
    .vertical-line {
      display: none;
    }
    @include tablet-portrait-up {
      padding: toRem(20);
      .vertical-line {
        display: block;
      }
    }
  }

  .text {
    font-style: italic;
    margin: 0 toRem(10);
    height: toRem(300);
    @include tablet-portrait-up {
      height: toRem(150);
    }
  }

  .author {
    margin-top: toRem(25);
    font-weight: bold;
    color: $corporate-grey;
  }

  .vertical-line {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: toRem(3);
    height: 80%;
    background-color: $corporate-grey;
  }
}
</style>
