<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

import { fetching } from '../config/axios'
import type { ProductAPI } from '../types/ProductAPI'

import { onMounted, ref } from 'vue'
import { config } from '../config'

const products = ref<ProductAPI[]>([])
const allCarts = ref<any[]>([])

onMounted(async () => {
  const id = useRoute().params.id
  console.log(id)

  const res = await fetching.get(`/products`)

  const filterProductRelated = res.data.data.data.filter((item: any) => item.id != id)

  products.value = filterProductRelated

  // get data in localstorage
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
  <div class="related-products spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Related Products</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, idx) in products" :key="idx" class="col-lg-3 col-sm-6">
          <div class="product-item" v-if="idx <= 3">
            <div class="pi-pic">
              <img
                :src="`${config.baseUrl}/storage/${item.images[0].photo}`"
                width="130"
                height="300"
                alt=""
              />
              <ul>
                <li class="w-icon active">
                  <a
                    @click="
                      () => handleAddCart(item.id, item.name, item.price, item.images[0].photo)
                    "
                    href="#"
                    ><i class="icon_bag_alt"></i
                  ></a>
                </li>
                <li class="quick-view">
                  <RouterLink :to="`/product/${item.id}`">+ Quick View</RouterLink>
                </li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">{{ item.type }}</div>
              <RouterLink :to="`/product/${item.id}`">
                <h5>{{ item.name }}</h5>
              </RouterLink>
              <div class="product-price">
                ${{ item.price.toFixed(2) }}
                <span>${{ (item.price * 1.5).toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
