<template>
  <div class="card-container">
    <div class="container-text">
      <h4>{{ title }}</h4>
      <p class="contact-info">
        Ligue-nos para <span>932 18 66 22</span> ou escreva um email para
        <span>info@zestarchitecture.com</span>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: false,
    default: "Entre em contato e transforme seus projetos em realidade!",
  },
});
</script>

<style scoped lang="scss">
.card-container {
  background-color: $corporate-black;
  color: $corporate-white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container-text {
    padding: toRem(10);
    @include tablet-portrait-up {
      padding: toRem(20) toRem(10) toRem(30) toRem(10);
    }
    .contact-info {
      span {
        color: $corporate-golden;
        font-size: large;
        font-weight: bold;
      }
    }
  }
}
</style>
