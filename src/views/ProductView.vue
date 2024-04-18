<script setup lang="ts">
import HeaderSection from '../components/HeaderSection.vue'
import BreadCrumb from '../components/BreadCrumb.vue'
import ProductShop from '../components/Product-shop.vue'
import RelatedProducts from '../components/Related-products.vue'
import FooterSection from '../components/FooterSection.vue'

import { onMounted, ref } from 'vue'
import router from '../router'

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

  // window.location.reload()
  router.push({ name: 'cart' })
}
</script>

<template>
  <main style="min-height: 100vh; overflow-x: hidden">
    <HeaderSection />
    <BreadCrumb />
    <ProductShop @handle-add-cart="handleAddCart" />
    <RelatedProducts @handle-add-cart="handleAddCart" />
    <FooterSection />
  </main>
</template>
