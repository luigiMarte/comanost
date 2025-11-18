<template>
  <main>
    <div class="project-top-container">
      <div class="return-link">
        <NuxtLink to="/portfolio">
          <ArrowLeft class="arrow-icon" /><span>Voltar</span></NuxtLink
        >
      </div>
      <div v-if="project">
        <h1>{{ project.title }}</h1>
        <h6>Lorem ipsum dolot</h6>
        <ImageCarousel :images="project.carousel_images" />
        <p>{{ project.text }}</p>
      </div>
      <div v-else>
        <p>Proyecto no encontrado</p>
      </div>
    </div>
    <div class="middle-container">
      <div class="two-columns">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          maximus lacinia viverra. In elit dui, tempor a ipsum vitae, gravida
          tincidunt nunc. Aenean iaculis erat nec metus rhoncus varius.
          Pellentesque consequat lorem et orci pharetra, in luctus purus
          ultrices. Donec odio diam, molestie a erat quis, egestas congue nunc.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          maximus lacinia viverra. In elit dui, tempor a ipsum vitae, gravida
          tincidunt nunc. Aenean iaculis erat nec metus rhoncus varius.
          Pellentesque consequat lorem et orci pharetra, in luctus purus
          ultrices. Donec odio diam, molestie a erat quis, egestas congue nunc.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          maximus lacinia viverra. In elit dui, tempor a ipsum vitae, gravida
          tincidunt nunc. Aenean iaculis erat nec metus rhoncus varius.
          Pellentesque consequat lorem et orci pharetra, in luctus purus
          ultrices. Donec odio diam, molestie a erat quis, egestas congue
          nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          maximus lacinia viverra. In elit dui, tempor a ipsum vitae, gravida
          tincidunt nunc. Aenean iaculis erat nec metus rhoncus varius.
          Pellentesque consequat lorem et orci pharetra, in luctus purus
          ultrices. Donec odio diam, molestie a erat quis, egestas congue nunc.
        </p>
      </div>
      <div class="image-text">
        <img src="/images/projects/01/extra_img1.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          maximus lacinia viverra. In elit dui, tempor a ipsum vitae, gravida
          tincidunt nunc. Aenean iaculis erat nec metus rhoncus varius.
          Pellentesque consequat lorem et orci pharetra, in luctus purus
          ultrices. Donec odio diam, molestie a erat quis, egestas congue
          nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          maximus lacinia viverra. In elit dui, tempor a ipsum vitae, gravida
          tincidunt nunc. Aenean iaculis erat nec metus rhoncus varius.
          Pellentesque consequat lorem et orci pharetra, in luctus purus
          ultrices. Donec odio diam, molestie a erat quis, egestas congue nunc.
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { projects } from "~/constants/projects.js";
import ArrowLeft from "~/components/icons/ArrowLeft.vue";

const route = useRoute();
const projectId = route.params.id;
const project = ref(null);
const projectImages = ref([]);

onMounted(() => {
  project.value = projects.find((p) => p.id === parseInt(projectId));
  if (project.value) {
    projectImages.value = project.value.carousel_images;
  }
});
</script>

<style scoped lang="scss">
.project-top-container {
  padding: toRem(50) toRem(50);
  max-width: toRem(1250);
  margin: 0 auto;
  text-align: center;

  .return-link {
    display: flex;
    justify-content: left;
    a {
      color: $corporate-grey;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: toRem(10);
    }
    .arrow-icon {
      width: toRem(24);
      height: toRem(24);
    }
  }
}

.middle-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image-text {
    display: flex;
    flex-direction: column;
    max-width: toRem(1200);
    p {
      margin: toRem(50) 0;
    }
  }
}

.two-columns {
  display: flex;
  flex-direction: row;
  max-width: toRem(1200);
  gap: toRem(40);
  p {
    margin: toRem(50) 0;
  }
}
</style>
