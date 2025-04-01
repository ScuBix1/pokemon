<script setup lang="ts">
defineProps<{
  className?: string
  pathImage?: string
  name?: string
}>()
</script>

<template>
  <div
    :class="`w-[220px] aspect-square bg-linear-to-b from-gray-500 to-gray-800 rounded-full relative mb-12 ${className}`"
  >
    <img
      :alt="name ? `image du pokemon ${name}` : 'image d\'un pokémon'"
      :src="pathImage"
      class="w-[220px] aspect-square absolute bottom-[30%] translate-y-[50%]"
    />
  </div>
</template>
