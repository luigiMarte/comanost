<template>
  <AppHeader />
  <div class="main-content">
    <slot />
  </div>
  <AppFooter />
</template>

<style scoped lang="scss">
.main-content {
  min-height: 100vh;
}
</style>
