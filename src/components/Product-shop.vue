<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const dataImages = [
  'http://localhost:3000/src/assets/img/mickey1.jpg',
  'http://localhost:3000/src/assets/img/mickey2.jpg',
  'http://localhost:3000/src/assets/img/mickey3.jpg',
  'http://localhost:3000/src/assets/img/mickey4.jpg'
]

const bigImage = ref<string>(dataImages[0])

const handleChangeImage = (url: string) => {
  bigImage.value = url
}
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
                <img class="product-big-img" :src="bigImage" alt="" />
              </div>
              <div class="product-thumbs">
                <!-- caraousel image -->
                <Carousel class="product-thumbs-track ps-slider" :items-to-show="3">
                  <Slide v-for="(slide, idx) in dataImages" :key="idx">
                    <div
                      class="pt item"
                      :class="slide == bigImage && 'active'"
                      @click="() => handleChangeImage(slide)"
                    >
                      <img :src="slide" alt="" />
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
                  <span>oranges</span>
                  <h3>Pure Pineapple</h3>
                </div>
                <div class="pd-desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error
                    officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum
                    iure natus quos non a sequi, id accusantium! Autem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam
                    animi, commodi, nihil voluptate nostrum neque architecto illo officiis
                    doloremque et corrupti cupiditate voluptatibus error illum. Commodi expedita
                    animi nulla aspernatur. Id asperiores blanditiis, omnis repudiandae iste
                    inventore cum, quam sint molestiae accusamus voluptates ex tempora illum sit
                    perspiciatis. Nostrum dolor tenetur amet, illo natus magni veniam quia sit nihil
                    dolores. Commodi ratione distinctio harum voluptatum velit facilis voluptas
                    animi non laudantium, id dolorem atque perferendis enim ducimus? A
                    exercitationem recusandae aliquam quod. Itaque inventore obcaecati, unde quam
                    impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit
                    architecto?
                  </p>
                  <h4>$495.00</h4>
                </div>
                <div class="quantity">
                  <RouterLink to="/cart" class="primary-btn pd-cart">Add To Cart</RouterLink>
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
