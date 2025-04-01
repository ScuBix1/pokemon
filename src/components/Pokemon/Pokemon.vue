<script setup lang="ts">
import Picture from '../Pokemon/Picture/Picture.vue'
import Type from './Type/Type.vue'
import { usePokedex } from '../../context/usePokedex.ts'
import { computed } from 'vue'

const props = defineProps<{
  id: number
  className?: string
  pathImage?: string
  name?: string
  types?: {
    name: string
    image: string
  }[]
}>()

const { isCaptured, capture, release, pokedex } = usePokedex()

const isCapturedPokemon = computed(() => isCaptured(props.id))

function toggleCapture() {
  isCapturedPokemon.value ? release(props.id) : capture(props.id)
}
</script>

<template>
  <div class="flex flex-col">
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
    <button
      @click="toggleCapture"
      class="z-[100000] mt-4 px-4 py-1 rounded-full w-[100px] mx-auto"
      :class="{ 'bg-green-600': !isCapturedPokemon, 'bg-red-600': isCapturedPokemon }"
      :aria-label="isCapturedPokemon ? 'Relâcher un pokémon' : 'Capturer un pokémon'"
    >
      {{ isCapturedPokemon ? 'Relâcher' : 'Capturer' }}
    </button>
  </div>
</template>
