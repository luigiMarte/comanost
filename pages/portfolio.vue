<template>
  <CenteredContainer :maxWidth="1500">
    <template #content>
      <div class="margin-bt">
        <div class="filters">
          <span
            v-for="filter in filters"
            :key="filter"
            @click="toggleFilter(filter)"
            :class="{ active: activeFilters.includes(filter) }"
          >
            {{ filter }}
          </span>
        </div>
        <div class="card-grid">
          <div
            class="card"
            v-for="project in filteredProjects"
            :key="project.id"
          >
            <NuxtLink :to="`/projeto/${project.id}`" class="project-link">
              <div class="relative">
                <img
                  :src="project.mainImage"
                  alt="Card Image"
                  class="card-img"
                />
                <div class="overlay">Veja Projeto</div>
              </div>
            </NuxtLink>
            <div class="card-content">
              <h2 class="card-title">{{ project.title }}</h2>
              <CustomButton
                text="Ver Projeto"
                :link="`/projeto/${project.id}`"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </CenteredContainer>
</template>

<script setup>
import { reactive, computed } from "vue";
import { projects } from "~/constants/projects.js";

const filters = ["arquitecture", "legal", "obra"];
const activeFilters = reactive([]);

const toggleFilter = (filter) => {
  if (activeFilters.includes(filter)) {
    activeFilters.splice(activeFilters.indexOf(filter), 1);
  } else {
    activeFilters.push(filter);
  }
};

const filteredProjects = computed(() => {
  if (activeFilters.length === 0) {
    return projects;
  } else {
    return projects.filter(
      (project) =>
        project.tags &&
        activeFilters.some((filter) => project.tags.includes(filter)),
    );
  }
});
</script>

<style scoped lang="scss">
.margin-bt {
  margin-bottom: toRem(80);
}
@include desktop-up {
  .margin-bt {
    margin-bottom: toRem(140);
  }
}
.filters {
  display: flex;
  justify-content: flex-end;
  position: relative;
  gap: toRem(50);
  padding: toRem(50) toRem(50);
  z-index: 0;

  span {
    position: relative;
    padding: toRem(10) toRem(10);
    background-color: $corporate-white;
    color: $corporate-grey;
    cursor: pointer;
  }

  span::after {
    content: "";
    position: absolute;
    left: 0;
    top: toRem(35);
    width: toRem(0);
    height: toRem(1);
    background-color: $corporate-grey;
    transition: width 0.3s ease-in-out;
  }

  span:hover::after,
  span.active::after {
    width: 100%;
  }

  span:hover,
  span.active {
    color: $corporate-black;
  }
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: toRem(40) toRem(20);
  padding: toRem(0) toRem(50);

  @include tablet-landscape-up {
    grid-template-columns: repeat(3, 1fr);
  }

  @include desktop-up {
    grid-template-columns: repeat(auto-fill, minmax(toRem(400), 1fr));
  }

  .card {
    width: 100%;
    min-height: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;

    &-img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    &-content {
      padding: toRem(10);
    }

    &-title {
      margin: toRem(10) toRem(0);
      font-size: toRem(20);
    }

    &-text {
      margin: toRem(10) toRem(0);
      font-size: toRem(16);
    }
  }
}

.project-link {
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 99%;
    background-color: $overlay-grey;
    color: $corporate-white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s ease;
    font-size: toRem(22);
  }

  &:hover .overlay {
    opacity: 0.9;
  }
}
</style>
