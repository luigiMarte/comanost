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
        <ImageCarousel :images="project.carousel_images" />
        <p>{{ project.text }}</p>
      </div>
      <div v-else>
        <p>Proyecto no encontrado</p>
      </div>
    </div>
    <div class="project-info-card">
      <div
        v-for="item in projectInfo"
        :key="item.label"
        class="project-info-card__row"
      >
        <span class="project-info-card__label">{{ item.label }}</span>
        <p class="project-info-card__value">{{ item.value }}</p>
      </div>
    </div>

    <div class="bottom-space"></div>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { projects } from "~/constants/projects.js";
import ArrowLeft from "~/components/icons/ArrowLeft.vue";

const route = useRoute();
//const projectId = route.params.id;
const projectId = Number(route.params.id);
//const project = ref(null);
const projectImages = ref([]);

onMounted(() => {
  project.value = projects.find((p) => p.id === parseInt(projectId));
  if (project.value) {
    projectImages.value = project.value.carousel_images;
  }
});

const project = computed(() => projects.find((p) => p.id === projectId));

const projectInfo = computed(() => {
  if (!project.value) return [];

  const fields = [
    {
      label: "Cliente",
      value: project.value.client,
    },
    {
      label: "Tipo de projeto",
      value: project.value.projectType,
    },
    {
      label: "Área construída",
      value: project.value.builtArea,
    },
    {
      label: "Área do terreno",
      value: project.value.landArea,
    },
    {
      label: "Áreas de aprovaçao",
      value: project.value.approvedBy,
    },
    {
      label: "Execução da obra",
      value: project.value.constructionExecution,
    },
    {
      label: "Soluções de engenharia e arquitectura específicas",
      value: project.value.extraSolutions,
    },
  ];

  return fields.filter((field) => field.value);
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

.project-info-card {
  margin: toRem(40) auto 0;
  padding: toRem(32);
  max-width: toRem(900);
  text-align: left;
  border: 1px solid rgba(0, 0, 0, 0.12);

  &__row {
    display: grid;
    grid-template-columns: toRem(180) 1fr;
    gap: toRem(24);
    padding: toRem(16) 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    &:last-child {
      border-bottom: none;
    }
  }

  &__label {
    font-weight: 600;
    color: $corporate-grey;
  }

  &__value {
    margin: 0;
    line-height: 1.6;
  }
}

.project-info-card__value {
  white-space: pre-line;
}

@media (max-width: 768px) {
  .project-info-card {
    padding: toRem(24);

    &__row {
      grid-template-columns: 1fr;
      gap: toRem(8);
    }
  }
}

.bottom-space {
  margin-bottom: toRem(150);
}
</style>
