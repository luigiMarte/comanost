<template>
  <div class="container-main mt-50">
    <h2>Links úteis</h2>
    <p>Aqui você pode encontrar links úteis de administrações públicas</p>
    <div class="links-container">
      <div v-for="link in links" class="mt-50 mb-50 link">
        <div class="text-cont">
          <img :src="link.img" alt="" />
          <h4>{{ link.title }}</h4>
        </div>
        <p>{{ link.text }}</p>
        <a :href="link.external_link" class="button-link" target="_blank"
          >Abra o link</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { links } from "~/constants/links.js";
</script>

<style scoped lang="scss">
.links-container {
  .link {
    background: rgba(217, 216, 216, 0.649);
    padding: toRem(10) toRem(25) toRem(25);
    border-radius: toRem(10);
    box-shadow: 10px 10px 14px -2px rgba(97, 96, 96, 0.75);
    -webkit-box-shadow: 10px 10px 14px -2px rgba(97, 96, 96, 0.75);
    -moz-box-shadow: 10px 10px 14px -2px rgba(97, 96, 96, 0.75);
  }
  .text-cont {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: toRem(30);
    img {
      background-color: $corporate-white;
      padding: toRem(5);
      width: toRem(50);
      height: toRem(50);
    }
  }
}

.button-link {
  display: inline-block;
  padding: toRem(10) toRem(20);
  margin-top: toRem(10);
  background-color: $corporate-black;
  color: $corporate-white;
  text-decoration: none;
  border-radius: toRem(4);
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(69, 69, 69);
  }
}
</style>
