<template>
  <header>
    <div class="logo">
      <NuxtLink to="/">
        <img src="/logos/golden-logo.png" alt="Logo" class="logotype" />
      </NuxtLink>
    </div>
    <nav>
      <ul :class="{ 'nav-open': isNavOpen }">
        <li
          v-for="link in links"
          :key="link.path"
          :class="['nav-item', { active: isActive(link.path) }]"
        >
          <NuxtLink
            v-if="!link.external"
            class="nav-link"
            @click="closeNav"
            :to="link.path"
          >
            {{ link.name }}
          </NuxtLink>
          <a
            v-else
            class="nav-link"
            :href="link.path"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </nav>
    <button
      @click="toggleNav"
      class="hamburger"
      :class="{ 'is-active': isNavOpen }"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

const closeNav = () => {
  if (isNavOpen.value) {
    isNavOpen.value = false;
  }
};

const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};

// Array de rutas de navegación
const links = [
  { name: "Inicio", path: "/" },
  { name: "Serviços", path: "/servicios" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Links", path: "/links" },
  { name: "Contato", path: "/contato" },
];
</script>

<style scoped lang="scss">
/* Mobile first approach */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: toRem(16);
  background-color: $corporate-black;
  color: $corporate-white;
}

.logo {
  margin-right: auto;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0) invert(1);
  }
}

nav ul {
  display: none;
  flex-direction: column;
  background-color: $corporate-black;
  padding: toRem(16);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  @include tablet-landscape-up {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: toRem(100);
    position: static;
    background-color: transparent;
    padding: 0;
    box-shadow: none;
  }

  &.nav-open {
    display: flex;
    position: absolute;
    top: toRem(150);
    left: 0;
    width: 100%;
    min-height: toRem(500);
    max-height: 100vh;
    height: auto;
    padding: toRem(16);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 9;

    li.nav-item {
      align-self: center;
    }
  }
}

.nav-item.active .nav-link {
  color: $corporate-golden;
}

nav {
  li.nav-item {
    @include tablet-landscape-up {
      margin: 0 toRem(16);
    }
  }
  .nav-link {
    color: $corporate-white;
    text-transform: uppercase;
    margin: toRem(8) 0;

    &:hover {
      color: $corporate-golden;
    }

    &:active {
      color: $corporate-white;
    }
  }
}

.hamburger {
  display: block;
  font-size: toRem(24);
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  position: relative;
  z-index: 1001;

  span {
    display: block;
    width: toRem(25);
    height: toRem(3);
    margin-bottom: toRem(5);
    background-color: $corporate-white;
    border-radius: toRem(3);
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform-origin: top left;
    }
    &:nth-child(2) {
      transform-origin: center;
    }
    &:nth-child(3) {
      transform-origin: bottom left;
    }
  }

  &.is-active {
    span:nth-child(1) {
      transform: rotate(45deg) translate(7px, -5px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, 7px);
    }
  }

  @include tablet-landscape-up {
    display: none;
  }
}
</style>
