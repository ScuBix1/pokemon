<script setup lang="ts">
import FilterType from '@/components/FilterType/FilterType.vue'
import type { Pokemon as PokemonType } from '@/constant'
import { computed, onMounted, ref, type Ref } from 'vue'
import Pokemon from '../components/Pokemon/Pokemon.vue'

const pokemons: Ref<PokemonType[]> = ref([])
const selectedType = ref<string>('')

onMounted(async () => {
  try {
    const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/10')
    pokemons.value = await response.json()
  } catch (error) {
    console.error('Erreur lors du chargement des Pokémon :', error)
  }
})

const filteredPokemons = computed(() => {
  if (!selectedType.value) return pokemons.value
  return pokemons.value.filter((pokemon) =>
    pokemon.apiTypes.some((type) => type.name === selectedType.value),
  )
})
</script>

<template>
  <main class="bg-gray-800">
    <FilterType v-model:selectedType="selectedType" />
    <div class="flex flex-col gap-6 items-center justify-center md:flex-row md:flex-wrap">
      <Pokemon
        v-for="pokemon in filteredPokemons"
        :key="pokemon.id"
        :name="pokemon.slug"
        :pathImage="pokemon.image"
        :types="pokemon.apiTypes"
      />
    </div>
  </main>
</template>
