<script setup lang="ts">
const typeColors: Record<string, string> = {
  Normal: 'bg-gray-400',
  Feu: 'bg-red-500',
  Eau: 'bg-blue-500',
  Plante: 'bg-green-500',
  Électrik: 'bg-yellow-400',
  Glace: 'bg-cyan-400',
  Combat: 'bg-orange-600',
  Poison: 'bg-purple-800',
  Sol: 'bg-yellow-700',
  Vol: 'bg-indigo-400',
  Psy: 'bg-pink-500',
  Insecte: 'bg-lime-500',
  Roche: 'bg-yellow-800',
  Spectre: 'bg-purple-800',
  Dragon: 'bg-indigo-700',
  Ténèbres: 'bg-gray-800',
  Acier: 'bg-gray-500',
  Fée: 'bg-pink-300',
}

defineProps<{
  className?: string
  type?: string
}>()

const commonClasses = 'py-1 px-4 rounded-full text-center text-white text-[0.6rem]'
</script>

<template>
  <span v-if="type" :class="[commonClasses, typeColors[type] || 'bg-gray-500']">
    {{ type }}
  </span>
</template>
