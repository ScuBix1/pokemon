<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex items-center bg-gray-950 z-100 h-[60px] sticky top-0 mb-12">
    <div>
      <nav class="flex items-center space-around px-12 text-white uppercase font-bold gap-x-6">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/pokedex">Pokedex</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
