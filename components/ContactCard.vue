<template>
  <div class="card-container">
    <div class="card-text">
      <h3>Vamos trabalhar juntos no seu próximo projeto?</h3>
      <p>{{ first_text }}</p>
      <p>{{ second_text }}</p>
    </div>
    <div class="contact-data">
      <div>
        <p><span> &#9742;</span> <strong>Telephone</strong></p>
        <p>{{ phone }}</p>
      </div>
      <div>
        <p><span>&#9993;</span> <strong>Email</strong></p>
        <p>{{ email }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  first_text: {
    type: String,
    required: false,
    default: "Adoramos saber mais sobre o seu projeto.",
  },
  second_text: {
    type: String,
    required: false,
    default:
      "Ligue para o número abaixo, ou envie-nos um email e entraremos em contato com você.",
  },
  phone: {
    type: String,
    required: false,
    default: "",
  },
  email: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: toRem(40);
  background-color: #fff;
  max-width: 100%;
  margin: 0 auto;
}

.card-text {
  text-align: left;
  margin-bottom: toRem(50);
}

.card-text h3 {
  margin-bottom: toRem(30);
  font-size: toRem(22);
  color: #333;
}

.card-text p {
  margin: 0.5rem 0;
  color: #666;
}

.contact-data {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.contact-data div {
  margin-bottom: toRem(1);
  color: #333;
}

.contact-data p {
  margin: 0;
}

.contact-data span {
  margin-right: 0.5rem;
  color: #666;
}

.contact-data strong {
  font-weight: 600;
  color: #333;
}
</style>
