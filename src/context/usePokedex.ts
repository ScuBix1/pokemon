import { ref } from 'vue'

const pokedex = ref<number[]>([])

function capture(id: number) {
  if (!pokedex.value.includes(id)) {
    pokedex.value.push(id)
  }
}

function release(id: number) {
  pokedex.value = pokedex.value.filter((pokeId) => pokeId !== id)
}

function isCaptured(id: number) {
  return pokedex.value.includes(id)
}

export function usePokedex() {
  return {
    pokedex,
    capture,
    release,
    isCaptured,
  }
}
