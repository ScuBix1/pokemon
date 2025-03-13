<script setup lang="ts">
defineProps<{
  hp?: number
  attack?: number
  defense?: number
  special_attack?: number
  special_defense?: number
  speed?: number
  className?: string
  title?: string
}>()
const commonClassName = 'flex gap-x-1'
const paragraphClassName = 'text-black'
</script>

<template>
  <div :class="`flex flex-col items-center px-6 bg-cyan-600 text-white rounded-2xl ${className}`">
    <h3 v-if="title" class="text-xl text-center">{{ title }}</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 items-center min-h-[180px] gap-x-9">
      <div :class="`${commonClassName}`">
        <p>Point de vie:</p>
        <p :class="`${paragraphClassName}`">{{ hp }}</p>
      </div>
      <div :class="`${commonClassName}`">
        <p>Attaque:</p>
        <p :class="`${paragraphClassName}`">{{ attack }}</p>
      </div>
      <div :class="`${commonClassName}`">
        <p>Défense:</p>
        <p :class="`${paragraphClassName}`">{{ defense }}</p>
      </div>
      <div :class="`${commonClassName}`">
        <p>Attaque spéciale:</p>
        <p :class="`${paragraphClassName}`">{{ special_attack }}</p>
      </div>
      <div :class="`${commonClassName}`">
        <p>Défense spéciale:</p>
        <p :class="`${paragraphClassName}`">{{ special_defense }}</p>
      </div>
      <div :class="`${commonClassName}`">
        <p>Vitesse:</p>
        <p :class="`${paragraphClassName}`">{{ speed }}</p>
      </div>
    </div>
  </div>
</template>
