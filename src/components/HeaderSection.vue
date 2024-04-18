<script setup lang="ts">
import { ProductAPI } from '../types/ProductAPI'

import { config } from '../config'
import { onMounted, ref } from 'vue'

const cartNotif = ref<number | null>(null)
const products = ref<{ id: number; name: string; price: number; photo: string }[]>([])
const totalHarga = ref<number>(0)

onMounted(() => {
  const data = localStorage.getItem('cart-products')
    ? (JSON.parse(localStorage.getItem('cart-products')!) as ProductAPI[])
    : null

  if (data) {
    cartNotif.value = data.length
    products.value = data as any
    // console.log(products.value)
    data.forEach((item) => {
      totalHarga.value += item.price
    })
  }
})

const handleDeleteCart = async (index: number) => {
  const data = products.value.filter((_, idx) => idx != index)
  localStorage.setItem('cart-products', JSON.stringify(data))
  window.location.reload()
}
</script>

<template>
  <header class="header-section">
    <div class="header-top">
      <div class="container">
        <div class="ht-left">
          <div class="mail-service"><i class="fa fa-envelope"></i> hello.shayna@gmail.com</div>
          <div class="phone-service"><i class="fa fa-phone"></i> +628 22081996</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="inner-header">
        <div class="row">
          <div class="col-lg-2 col-md-2">
            <div class="logo">
              <RouterLink to="/">
                <img src="@/assets/img/logo_website_shayna.png" alt="" />
              </RouterLink>
            </div>
          </div>
          <div class="col-lg-7 col-md-7"></div>
          <div class="col-lg-3 text-right col-md-3">
            <ul class="nav-right">
              <li class="cart-icon">
                Keranjang Belanja &nbsp;
                <a href="#" v-if="cartNotif">
                  <i class="icon_bag_alt"></i>
                  <span>{{ cartNotif }}</span>
                </a>
                <div class="cart-hover">
                  <div class="select-items">
                    <table>
                      <tbody v-if="products?.length">
                        <!--  -->
                        <tr v-for="(item, idx) in products" :key="idx">
                          <template v-if="idx < 3">
                            <td class="si-pic">
                              <img :src="`${config.baseUrl}/storage/${item.photo}`" alt="" />
                            </td>
                            <td class="si-text">
                              <div class="product-selected">
                                <p>${{ item.price }} x 1</p>
                                <h6>{{ item.name }}</h6>
                              </div>
                            </td>
                            <td class="si-close">
                              <i @click="() => handleDeleteCart(idx)" class="ti-close"></i>
                            </td>
                          </template>
                        </tr>
                        <!--  -->
                      </tbody>
                      <tbody v-else>
                        <td>Tidak Products</td>
                      </tbody>
                    </table>
                  </div>
                  <div class="select-total">
                    <span>total:</span>
                    <h5>${{ totalHarga.toFixed(2) }}</h5>
                  </div>
                  <div class="select-button">
                    <RouterLink to="/cart" class="primary-btn view-card">VIEW CARD</RouterLink>
                    <!-- <a href="#" class="primary-btn checkout-btn">CHECK OUT</a> -->
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
