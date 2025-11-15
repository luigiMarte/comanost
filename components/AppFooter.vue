<template>
  <div class="footer">
    <img src="/logos/mini-logo.png" alt="logo" class="footer-logo" />
    <div>
      <a
        href="https://www.jurisportal.com.br/adv/2011/login.asp"
        target="_blank"
        >Intranet</a
      >
      <a href="https://www.jurisportal.com.br/">Jurisportal</a>
    </div>
    <div>
      <p>&copy; {{ currentYear }} - Comanost Projetos e Serviços LTDA</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped lang="scss">
.footer {
  background-color: $corporate-black;
  color: $corporate-white;
  padding: toRem(20);
  text-align: center;

  .footer-logo {
    filter: invert(1);
    margin-bottom: toRem(20);
  }
}

.footer img {
  width: toRem(70);
  height: toRem(70);
}

.footer a {
  color: $corporate-white;
  margin: 0 toRem(10);
  text-decoration: none;
}

.footer a:hover {
  color: $corporate-golden;
}
</style>
