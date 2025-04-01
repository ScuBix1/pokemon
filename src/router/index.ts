import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/pokemon/:name',
      component: () => import('../views/PokemonInformations.vue'),
      props: true,
    },
    { path: '/pokedex', component: () => import('../views/Pokedex.vue'), props: true },
  ],
})

export default router
