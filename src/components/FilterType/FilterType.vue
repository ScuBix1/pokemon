<script setup lang="ts">
import { defineEmits, onMounted, ref } from 'vue'

const types = ref<string[]>([])

const emit = defineEmits(['update:selectedType'])

const selectedType = ref<string>('')

onMounted(async () => {
  try {
    const response = await fetch('https://pokebuildapi.fr/api/v1/types')
    const data = await response.json()
    types.value = data.map((t: { name: string }) => t.name)
  } catch (error) {
    console.error('Erreur lors du chargement des types Pokémon :', error)
  }
})
</script>

<template>
  <div class="flex flex-col items-start gap-4 mb-4 mx-6">
    <label for="typeFilter" class="text-white text-sm">Filtrer par type :</label>
    <select
      id="typeFilter"
      v-model="selectedType"
      @change="emit('update:selectedType', selectedType)"
      class="bg-gray-700 text-white px-4 py-2 rounded-md outline-none"
      aria-label="Filtrer les Pokémon par type"
    >
      <option value="" aria-label="Tous les types de pokémon">Tous les types</option>
      <option v-for="type in types" :key="type" :value="type" :aria-label="`Type ${type}`">
        {{ type }}
      </option>
    </select>
  </div>
</template>
