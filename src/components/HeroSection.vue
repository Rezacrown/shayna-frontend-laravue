<template>
  <section class="hero-section">
    <Carousel :items-to-show="1" :wrap-around="true" :autoplay="6000">
      <Slide v-for="slide in 3" :key="slide">
        <div
          class="single-hero-items set-bg"
          style="width: 100%; height: 400px"
          :style="`background-image: url('http://localhost:3000/src/assets/img/hero-${slide}.jpg');`"
        >
          <div class="container" style="margin-top: 70px">
            <div class="row">
              <div class="col-lg-5">
                <span>Bag,kids</span>
                <h1>Black friday</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                </p>
                <a href="#" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <navigation />
      </template>
    </Carousel>
  </section>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
</script>
