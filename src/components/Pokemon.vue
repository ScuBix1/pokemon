<script setup lang="ts">
defineProps<{
  className?: string
  pathImage?: string
  name?: string
  stats?: {
    HP: number
    attack: number
    defense: number
    special_attack: number
    special_defense: number
    speed: number
  }
}>()
</script>

<template>
  <div :class="className">
    <div><img :alt="`image du pokemon ${name ? name : ''}`" :src="pathImage" /></div>
    <div>
      <p>{{ name }}</p>
      <ul v-if="stats">
        <li>{{ stats.HP }}</li>
        <li>{{ stats.attack }}</li>
        <li>{{ stats.defense }}</li>
        <li>{{ stats.special_attack }}</li>
        <li>{{ stats.special_defense }}</li>
        <li>{{ stats.speed }}</li>
      </ul>
    </div>
  </div>
</template>
