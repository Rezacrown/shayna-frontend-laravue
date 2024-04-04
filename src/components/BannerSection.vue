<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <Carousel class="product-slider" :items-to-show="3" :autoplay="5000" :wrap-around="true">
            <Slide v-for="slide in 1" :key="slide">
              <div class="product-item">
                <div class="pi-pic">
                  <img src="`../assets/img/mickey1.jpg`" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="product.html">+ Quick View</a></li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Coat</div>
                  <a href="#">
                    <h5>Mickey Baggy</h5>
                  </a>
                  <div class="product-price">
                    $14.00
                    <span>$35.00</span>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide v-for="slide in 1" :key="slide">
              <div class="product-item">
                <div class="pi-pic">
                  <img src="`../assets/img/products/women-1.jpg`" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Shoes</div>
                  <a href="#">
                    <h5>Guangzhou sweater</h5>
                  </a>
                  <div class="product-price">$13.00</div>
                </div>
              </div>
            </Slide>

            <Slide v-for="slide in 1" :key="slide">
              <div class="product-item">
                <div class="pi-pic">
                  <img src="`../assets/img/products/women-2.jpg`" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Shoes</div>
                  <a href="#">
                    <h5>Guangzhou sweater</h5>
                  </a>
                  <div class="product-price">$13.00</div>
                </div>
              </div>
            </Slide>

            <Slide v-for="slide in 1" :key="slide">
              <div class="product-item">
                <div class="pi-pic">
                  <img src="`../assets/img/products/women-3.jpg`" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Shoes</div>
                  <a href="#">
                    <h5>Guangzhou sweater</h5>
                  </a>
                  <div class="product-price">$13.00</div>
                </div>
              </div>
            </Slide>

            <Slide v-for="slide in 1" :key="slide">
              <div class="product-item">
                <div class="pi-pic">
                  <img src="`../assets/img/products/women-4.jpg`" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Shoes</div>
                  <a href="#">
                    <h5>Guangzhou sweater</h5>
                  </a>
                  <div class="product-price">$13.00</div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
</script>

<style scoped></style>
