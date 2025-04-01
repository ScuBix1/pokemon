import { ref } from 'vue'

const STORAGE_KEY = 'pokedex'
const stored = localStorage.getItem(STORAGE_KEY)

const pokedex = ref<number[]>(stored ? JSON.parse(stored) : [])

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pokedex.value))
}

function capture(id: number) {
  if (!pokedex.value.includes(id)) {
    pokedex.value.push(id)
    saveToLocalStorage()
  }
}

function release(id: number) {
  pokedex.value = pokedex.value.filter((pokeId) => pokeId !== id)
  saveToLocalStorage()
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
