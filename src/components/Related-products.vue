<script setup lang="ts">
import { RouterLink } from 'vue-router'
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
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
              <img src="../assets/img/products/women-1.jpg" alt="" />
              <ul>
                <li class="w-icon active">
                  <RouterLink to="#"><i class="icon_bag_alt"></i></RouterLink>
                </li>
                <li class="quick-view"><a href="#">+ Quick View</a></li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Coat</div>
              <RouterLink to="#">
                <h5>Pure Pineapple</h5>
              </RouterLink>
              <div class="product-price">
                $14.00
                <span>$35.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
              <img src="../assets/img/products/women-2.jpg" alt="" />
              <ul>
                <li class="w-icon active">
                  <RouterLink to="#"><i class="icon_bag_alt"></i></RouterLink>
                </li>
                <li class="quick-view"><a href="#">+ Quick View</a></li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Shoes</div>
              <RouterLink to="#">
                <h5>Guangzhou sweater</h5>
              </RouterLink>
              <div class="product-price">$13.00</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
              <img src="../assets/img/products/women-3.jpg" alt="" />
              <ul>
                <li class="w-icon active">
                  <RouterLink to="#"><i class="icon_bag_alt"></i></RouterLink>
                </li>
                <li class="quick-view"><a href="#">+ Quick View</a></li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Towel</div>
              <RouterLink to="#">
                <h5>Pure Pineapple</h5>
              </RouterLink>
              <div class="product-price">$34.00</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
              <img src="../assets/img/products/women-4.jpg" alt="" />
              <ul>
                <li class="w-icon active">
                  <RouterLink to="#"><i class="icon_bag_alt"></i></RouterLink>
                </li>
                <li class="quick-view"><a href="#">+ Quick View</a></li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Towel</div>
              <RouterLink to="#">
                <h5>Converse Shoes</h5>
              </RouterLink>
              <div class="product-price">$34.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
