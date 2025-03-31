<script setup lang="ts">
import 'swiper/css' // Ajoute les styles de base du Swiper
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { defineProps, onMounted, ref } from 'vue'

const damageRelation: Record<string, string> = {
  vulnerable: 'bg-red-400',
  resistant: 'bg-green-400',
}

defineProps<{
  resistances: {
    name: string
    damage_multiplier: number
    damage_relation: string
  }[]
  className?: string
}>()

const prevButton = ref<HTMLElement | null>(null)
const nextButton = ref<HTMLElement | null>(null)

const swiperOptions = ref({
  modules: [Navigation, Pagination],
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: { el: '.custom-pagination', clickable: true },
  navigation: {
    nextEl: null as HTMLElement | null,
    prevEl: null as HTMLElement | null,
  },
})

onMounted(() => {
  swiperOptions.value.navigation.nextEl = nextButton.value
  swiperOptions.value.navigation.prevEl = prevButton.value
})
</script>

<template>
  <div class="bg-gray-500 overflow-hidden p-6 my-9">
    <h2 class="text-2xl font-bold text-center my-6">Résistances</h2>
    <div class="relative pt-[50px]">
      <swiper v-bind="swiperOptions" class="w-full max-w-lg">
        <swiper-slide v-for="resistance in resistances" :key="`resistance-${resistance.name}`">
          <div
            class="flex flex-col items-center justify-center p-4 rounded-lg shadow-md text-white"
            :class="[damageRelation[resistance.damage_relation], className]"
          >
            <p class="text-lg font-semibold">{{ resistance.name }}</p>
            <p class="text-sm">x{{ resistance.damage_multiplier }}</p>
          </div>
        </swiper-slide>
      </swiper>
      <div class="absolute top-0 right-0 transform">
        <div class="relative w-[95vw]">
          <div
            ref="prevButton"
            class="absolute left-3 top-2/3 transform z-10 bg-gray-800 text-white p-3 rounded-full w-[35px] h-[35px] flex items-center justify-center"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div
            ref="nextButton"
            class="absolute right-0 top-2/3 transform bg-gray-800 text-white p-3 rounded-full w-[35px] h-[35px] flex items-center justify-center"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div
        class="custom-pagination !absolute !left-1/2 !translate-x-[-50%] [&>span]:mx-[1px]"
      ></div>
    </div>
  </div>
</template>
