<script setup lang="ts">
import HeaderSection from '../components/HeaderSection.vue'
import HeroSection from '../components/HeroSection.vue'
import BannerSection from '../components/BannerSection.vue'

import InstagramSection from '../components/InstagramSection.vue'
import ParthnerSection from '../components/PartnerSection.vue'
import FooterSection from '../components/FooterSection.vue'

import { onMounted, ref } from 'vue'

const allCarts = ref<any[]>([])

onMounted(async () => {
  if (localStorage.getItem('cart-products')) {
    try {
      const parsed = JSON.parse(localStorage.getItem('cart-products')!)
      allCarts.value = parsed
    } catch (error) {
      allCarts.value = []
      localStorage.removeItem('cart-products')
    }
  }
})

const handleAddCart = async (id: number, name: string, price: number, photo: string) => {
  // save in array
  const oldData = allCarts.value

  const data = [
    ...oldData!,
    {
      id,
      name,
      price,
      photo
    }
  ]
  localStorage.setItem('cart-products', JSON.stringify(data))

  window.location.reload()
}
</script>

<template>
  <main style="min-height: 200vh; overflow-x: hidden">
    <HeaderSection />
    <HeroSection />
    <BannerSection @handle-add-cart="handleAddCart" />
    <InstagramSection />
    <ParthnerSection />
    <FooterSection />
  </main>
</template>
