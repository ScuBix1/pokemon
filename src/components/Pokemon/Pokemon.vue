<script setup lang="ts">
import Picture from '../Pokemon/Picture/Picture.vue'
import Type from './Type/Type.vue'

defineProps<{
  className?: string
  pathImage?: string
  name?: string
  types?: {
    name: string
    image: string
  }[]
}>()
</script>

<template>
  <RouterLink :to="`/pokemon/${name}`">
    <div
      :class="`flex flex-col items-center overflow-hidden shadow-xl bg-gray-800 text-white rounded-t-2xl p-4 border border-white cursor-pointer scale-100 transition duration-100 hover:scale-105 ${className}`"
    >
      <Picture :name="name" :pathImage="pathImage" />
      <div class="h-[100px] flex flex-col items-center gap-4">
        <p>{{ name }}</p>
        <div class="flex flex-wrap gap-x-1">
          <Type v-for="type in types" :type="type.name" />
        </div>
      </div>
    </div>
  </RouterLink>
</template>
