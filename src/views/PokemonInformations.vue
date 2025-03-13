<script setup lang="ts">
import InfoCard from '@/components/InfoCard/InfoCard.vue'
import Picture from '@/components/Pokemon/Picture/Picture.vue'
import Type from '@/components/Pokemon/Type/Type.vue'
import Resistances from '@/components/Resistances/Resistances.vue'
import type { Pokemon } from '@/constant'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pokemon: Ref<Pokemon | undefined> = ref()

onMounted(async () => {
  try {
    const pokemonName = route.params.name
    const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonName}`)
    pokemon.value = await response.json()
  } catch (error) {
    console.error('Erreur lors du chargement des Pokémon :', error)
  }
})
</script>

<template>
  <main>
    <h1 class="uppercase text-white text-center text-4xl m-6">Pokedex</h1>
    <div v-if="pokemon">
      <div class="flex flex-col md:flex-row items-center justify-center gap-x-6">
        <div class="flex flex-col items-center gap-y-3">
          <Picture :pathImage="pokemon.image" :name="pokemon.name" />
          <div class="flex gap-x-3 mb-6">
            <Type v-for="type in pokemon.apiTypes" :type="type.name" />
          </div>
        </div>
        <InfoCard
          v-if="pokemon"
          :hp="pokemon.stats.HP"
          :attack="pokemon.stats.attack"
          :defense="pokemon.stats.defense"
          :special_attack="pokemon.stats.special_attack"
          :special_defense="pokemon.stats.special_defense"
          :speed="pokemon.stats.speed"
          title="Statistiques"
          className="py-3"
        />
      </div>
      <div>
        <Resistances :resistances="pokemon.apiResistances" />
      </div>
    </div>
  </main>
</template>
