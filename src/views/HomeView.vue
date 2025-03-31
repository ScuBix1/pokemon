<script setup lang="ts">
import FilterType from '@/components/FilterType/FilterType.vue'
import type { Pokemon as PokemonType } from '@/constant'
import { computed, onMounted, ref, type Ref } from 'vue'
import Pokemon from '../components/Pokemon/Pokemon.vue'

const pokemons: Ref<PokemonType[]> = ref([])
const selectedType = ref<string>('')
const search = ref('')

onMounted(async () => {
  try {
    const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/10')
    pokemons.value = await response.json()
  } catch (error) {
    console.error('Erreur lors du chargement des Pokémon :', error)
  }
})

const filteredPokemons = computed(() => {
  return pokemons.value.filter((pokemon) => {
    const matchType =
      !selectedType.value || pokemon.apiTypes.some((type) => type.name === selectedType.value)

    const matchName =
      !search.value || pokemon.name.toLowerCase().startsWith(search.value.toLowerCase())

    return matchType && matchName
  })
})
</script>

<template>
  <main class="bg-gray-800 min-h-screen p-4 text-white">
    <FilterType v-model:selectedType="selectedType" />
    <div class="flex justify-center">
      <input
        v-model="search"
        placeholder="Rechercher un Pokémon"
        class="text-black my-6 w-2/3 p-2 rounded border border-gray-300 text-white"
      />
    </div>
    <div class="flex flex-col gap-6 items-center justify-center md:flex-row md:flex-wrap">
      <Pokemon
        v-for="pokemon in filteredPokemons"
        :key="pokemon.id"
        :id="pokemon.id"
        :name="pokemon.name"
        :pathImage="pokemon.image"
        :types="pokemon.apiTypes"
      />
    </div>
  </main>
</template>
