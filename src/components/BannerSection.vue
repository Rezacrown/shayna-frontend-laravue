<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

import { onMounted, ref } from 'vue'
import { fetching } from '../config/axios'
import { ProductAPI } from '../types/ProductAPI'

import { config } from '../config/index'

const emit = defineEmits(['handleAddCart'])

const products = ref<ProductAPI[]>()

onMounted(async () => {
  const res = await fetching.get('/products')

  products.value = res.data.data.data
})
</script>

<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5" v-if="products?.length">
          <Carousel class="product-slider" :items-to-show="3" :autoplay="5000" :wrap-around="true">
            <!--  -->
            <Slide v-for="(item, idx) in products" :key="idx">
              <div class="product-item">
                <div class="pi-pic">
                  <img :src="`${config.baseUrl}/storage/${item.images[0].photo}`" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a
                        @click="
                          () =>
                            emit(
                              'handleAddCart',
                              item.id,
                              item.name,
                              item.price,
                              item.images[0].photo
                            )
                        "
                        href="#"
                        ><i class="icon_bag_alt"></i
                      ></a>
                    </li>
                    <li class="quick-view">
                      <RouterLink :to="`product/${item.id}`">+ Quick View</RouterLink>
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">{{ item.type }}</div>
                  <RouterLink :to="`product/${item.id}`">
                    <h5>{{ item.name }}</h5>
                  </RouterLink>
                  <div class="product-price">
                    ${{ item.price }}
                    <span>${{ item.price * 1.5 }}</span>
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </div>
        <div class="row" v-else>Product Tidak Tersedia</div>
      </div>
    </div>
  </section>
</template>
