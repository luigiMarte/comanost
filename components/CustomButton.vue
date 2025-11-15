<template>
  <button :class="['card-button']" :style="buttonStyle">
    <NuxtLink :to="link">
      <div class="project-link">
        {{ text }}
        <ArrowRight class="arrow-icon" />
        <!-- <img src="/images/arrow-right-icon.png" alt="" /> -->
      </div>
    </NuxtLink>
  </button>
</template>

<script>
import ArrowRight from "~/components/icons/ArrowRight.vue";
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: "#FFFFFF",
    },
    textColor: {
      type: String,
      default: "#000000",
    },
  },
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.textColor,
      };
    },
  },
  components: {
    ArrowRight,
  },
};
</script>

<style scoped lang="scss">
.card-button {
  padding: toRem(10) 0;
  border: none;
  cursor: pointer;
}

.card-button a {
  color: inherit;
  text-decoration: none;
}

.project-link {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: toRem(10);
  transition: transform 0.5s ease-in-out;
}

.project-link:hover .arrow-icon {
  transform: translateX(5px);
}

.arrow-icon {
  width: toRem(24);
  height: toRem(24);
  transition: transform 0.5s ease-in-out;
}
</style>
