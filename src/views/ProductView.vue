<script setup lang="ts">
import HeaderSection from '../components/HeaderSection.vue'
import BreadCrumb from '../components/BreadCrumb.vue'
import ProductShop from '../components/Product-shop.vue'
import RelatedProducts from '../components/Related-products.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <main style="min-height: 100vh; overflow-x: hidden">
    <HeaderSection />
    <BreadCrumb />
    <ProductShop />
    <RelatedProducts />
    <FooterSection />
  </main>
</template>
