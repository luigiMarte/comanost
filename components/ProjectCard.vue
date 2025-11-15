<template>
  <NuxtLink :to="`/project/${project.id}`" class="project-card">
    <img :url="project.image" class="project-image" />
    <div class="project-info">
      <h2 class="project-title">{{ project.name }}</h2>
      <p class="project-description">{{ project.description }}</p>
      <button class="project-link">Ver Proyectos</button>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.project-card {
  display: flex;
  flex-direction: column;
  margin: toRem(8);
  text-align: left;
  flex: 1 1 calc(33.333% - 16px);
  text-decoration: none;
  color: inherit;
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 0;
}

.project-info {
  padding: toRem(16);
}

.project-title,
.project-description {
  margin: toRem(8) 0;
}

.project-link {
  background-color: #007bff;
  color: white;
  border: none;
  padding: toRem(8) toRem(16);
  border-radius: toRem(4);
  cursor: pointer;
  text-align: center;
}

.project-link:hover {
  background-color: #0056b3;
}
</style>
