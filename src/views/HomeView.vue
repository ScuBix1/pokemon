<script setup lang="ts">
import type { Pokemon as PokemonType } from '@/constant'
import { onMounted, ref, type Ref } from 'vue'
import Pokemon from '../components/Pokemon/Pokemon.vue'

const pokemons: Ref<PokemonType[]> = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/10')
    pokemons.value = await response.json()
  } catch (error) {
    console.error('Erreur lors du chargement des Pokémon :', error)
  }
})
</script>

<template>
  <main class="bg-gray-800">
    <div class="flex flex-col gap-6 items-center justify-center md:flex-row md:flex-wrap">
      <Pokemon
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :name="pokemon.slug"
        :pathImage="pokemon.image"
        :types="pokemon.apiTypes"
      />
    </div>
  </main>
</template>
