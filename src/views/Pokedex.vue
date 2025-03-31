<script setup lang="ts">
import { defineProps, onMounted, ref, watchEffect } from 'vue'
import { usePokedex } from '../context/usePokedex.ts'
import Pokemon from '../components/Pokemon/Pokemon.vue'

const { pokedex } = usePokedex()
const pokemons = ref([])

watchEffect(async () => {
  const promises = pokedex.value.map(async (id) => {
    const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
    return await res.json()
  })

  pokemons.value = await Promise.all(promises)
})

onMounted(async () => {
  const promises = pokedex.value.map(async (id) => {
    const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
    return await res.json()
  })

  pokemons.value = await Promise.all(promises)
})
</script>

<template>
  <div class="text-white">
    <h1 class="text-2xl uppercase font-bold text-center mb-12">Pokedex</h1>
    <div class="flex flex-col gap-6 items-center justify-center md:flex-row md:flex-wrap">
      <Pokemon
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :id="pokemon.id"
        :name="pokemon.name"
        :pathImage="pokemon.image"
        :types="pokemon.apiTypes"
      />
    </div>
  </div>
</template>
