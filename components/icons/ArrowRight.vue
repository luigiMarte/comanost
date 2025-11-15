<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="gray"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon arrow-right"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <polyline points="15 6 21 12 15 18"></polyline>
  </svg>
</template>

<script setup>
// No se necesita script setup aquí ya que es un componente SVG puro.
</script>

<style scoped>
.icon {
  width: 24px; /* Puedes ajustar el tamaño según tus necesidades */
  height: 24px;
  transition: transform 0.5s ease-in-out; /* Transición más suave */
}

.icon:hover {
  transform: translateX(5px);
}

.arrow-right {
  /* Aquí puedes agregar más estilos específicos para la flecha */
}
</style>
