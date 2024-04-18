<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

import { config } from '../config'
import { fetching } from '../config/axios'
import type { ProductAPIResponseByID, ProductAPI } from '../types/ProductAPI'

const router = useRoute()

const emit = defineEmits(['handleAddCart'])

const dataImages = ref<any[]>()
const bigImage = ref<string>()

const product = ref<ProductAPI>()

const handleChangeImage = (url: string) => {
  bigImage.value = url
}

onMounted(async () => {
  const id = router.params.id
  const res = (await fetching.get(`/products?id=${id}`)) as ProductAPIResponseByID

  // console.log(res.data.data[0].images[0])
  bigImage.value = res.data.data[0].images[0].photo
  dataImages.value = res.data.data[0].images

  product.value = res.data.data[0]
})
</script>

<template>
  <section class="product-shop spad page-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6">
              <!-- big image -->
              <div class="product-pic-zoom">
                <img
                  class="product-big-img"
                  :src="`${config.baseUrl}/storage/${bigImage}`"
                  alt=""
                />
              </div>
              <div class="product-thumbs">
                <!-- caraousel image -->
                <Carousel class="product-thumbs-track ps-slider" :items-to-show="3">
                  <Slide v-for="(item, idx) in dataImages" :key="idx">
                    <div
                      class="pt item"
                      :class="item.photo == bigImage && 'active'"
                      @click="() => handleChangeImage(item.photo)"
                    >
                      <img :src="`${config.baseUrl}/storage/${item.photo}`" alt="" />
                    </div>
                  </Slide>

                  <template #addons> <Navigation /> </template>
                </Carousel>
              </div>
            </div>
            <!--  -->
            <div class="col-lg-6">
              <div class="product-details">
                <div class="pd-title">
                  <span>{{ product?.type }}</span>
                  <h3>{{ product?.name }}</h3>
                </div>
                <div class="pd-desc">
                  <p>
                    {{ product?.description }}
                  </p>
                  <h4>${{ product?.price }}</h4>
                </div>
                <div class="quantity">
                  <a
                    @click="
                      () =>
                        emit(
                          'handleAddCart',
                          product?.id,
                          product?.name,
                          product?.price,
                          product?.images[0].photo
                        )
                    "
                    href="#"
                    class="primary-btn pd-cart"
                    >Add To Cart</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pt {
  margin-right: 10px;
}
</style>
