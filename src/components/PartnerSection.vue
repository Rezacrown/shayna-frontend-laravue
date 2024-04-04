<template>
  <div class="partner-logo">
    <div class="container">
      <Carousel
        class="logo-carousel"
        :items-to-show="3"
        :autoplay="3000"
        :wrap-around="true"
        :transition="1200"
      >
        <Slide v-for="slide in 1" :key="slide">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="http://localhost:3000/src/assets/img/logo-carousel/logo-1.png" alt="" />
            </div>
          </div>
        </Slide>

        <Slide v-for="slide in 1" :key="slide">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="http://localhost:3000/src/assets/img/logo-carousel/logo-2.png" alt="" />
            </div>
          </div>
        </Slide>

        <Slide v-for="slide in 1" :key="slide">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="http://localhost:3000/src/assets/img/logo-carousel/logo-3.png" alt="" />
            </div>
          </div>
        </Slide>

        <Slide v-for="slide in 1" :key="slide">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="http://localhost:3000/src/assets/img/logo-carousel/logo-4.png" alt="" />
            </div>
          </div>
        </Slide>

        <Slide v-for="slide in 1" :key="slide">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="http://localhost:3000/src/assets/img/logo-carousel/logo-5.png" alt="" />
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
</script>
