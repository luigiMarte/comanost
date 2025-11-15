<template>
  <div class="featured-projects">
    <div v-for="project in mainProjects" class="project">
      <NuxtLink :to="`projeto/${project.id}`" class="project-link">
        <img :src="project.img" alt="Proyecto 1" class="project-image" />
        <div class="overlay">Veja Projeto</div>
      </NuxtLink>
      <p class="card-title">{{ project.title }}</p>
      <CustomButton text="Ver Projeto" :link="`/projeto/${project.id}`" />
    </div>
  </div>
</template>

<script setup>
import { mainProjects } from "~/constants/projects";
</script>

<style scoped lang="scss">
.featured-projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: toRem(40);
  padding: toRem(0);
  @include tablet-portrait-up {
    max-width: toRem(1200);
    padding: toRem(20);
  }

  .project {
    background-color: $corporate-white;
    box-shadow: 0 2px 5px rgba(44, 44, 44, 0.1);
    overflow: hidden;
    width: 100%;
    max-width: toRem(350);
    box-sizing: border-box;
    text-align: center;

    @include tablet-portrait-up {
      width: calc(100% - 40px);
      max-width: toRem(350);
    }

    &-link {
      position: relative;
      display: block;
    }

    &-image {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $overlay-black;
  color: $corporate-white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  font-size: toRem(20);
  text-decoration: none;
}

.project-link:hover .overlay {
  opacity: 1;
}

.project h3 {
  margin: toRem(20) toRem(0) toRem(10) toRem(0);
}
</style>
