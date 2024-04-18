<script setup lang="ts">
import { fetching } from '../config/axios'
import { config } from '../config'

import { onMounted, ref } from 'vue'
import router from '../router'

const products = ref<{ id: number; name: string; price: number; photo: string }[]>([])

const tax = 10 // 10%
const subtotal = ref<number>(0)
const totalPayment = ref<number>(0)

const name = ref('')
const email = ref('')
const number = ref('')
const address = ref('')

onMounted(() => {
  const data = localStorage.getItem('cart-products')
    ? (JSON.parse(localStorage.getItem('cart-products')!) as any[])
    : null

  if (data) {
    products.value = data as any

    // get Subtotal
    data.forEach((item) => {
      subtotal.value += item.price
    })
    // get total Payment
    totalPayment.value = subtotal.value + subtotal.value * 0.1
  }
})

const handleDeleteCart = async (index: number) => {
  const data = products.value.filter((_, idx) => idx != index)
  localStorage.setItem('cart-products', JSON.stringify(data))
  window.location.reload()
}

const handleCheckout = async () => {
  const dataProduct = products.value.map((item) => item.id)

  // validation 1
  if (totalPayment.value <= 0 || dataProduct.length <= 0) {
    alert('Please put the items into the cart first')
    window.location.reload()
    return
  }
  // validation 2
  if (!name.value || !email.value || !number.value || !address.value || totalPayment.value <= 0) {
    alert('Please fill all information input')
    window.location.reload()
    return
  }

  const payload = {
    name: name.value,
    email: email.value,
    number: number.value,
    address: address.value,
    transaction_total: Number(totalPayment.value.toFixed(0)),
    transaction_status: 'PENDING',
    transaction_details: dataProduct
  }

  fetching
    .post('/checkout', payload)
    .then(() => {
      localStorage.removeItem('cart-products')
      router.push({ path: '/success' })
    })
    .catch((error) => {
      console.log(error.response)
      alert('ada error')
    })
}
</script>

<template>
  <section class="shopping-cart spad">
    <div class="container">
      <div class="row">
        <!--  -->
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-12">
              <div class="cart-table">
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th class="p-name text-center">Product Name</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody v-if="products.length">
                    <tr v-for="(item, idx) in products" :key="idx">
                      <td class="cart-pic first-row">
                        <img :src="`${config.baseUrl}/storage/${item.photo}`" />
                      </td>
                      <td class="cart-title first-row text-center">
                        <h5>{{ item.name }}</h5>
                      </td>
                      <td class="p-price first-row">${{ item.price.toFixed(2) }}</td>
                      <td class="delete-item">
                        <a @click="() => handleDeleteCart(idx)" href="#"
                          ><i class="material-icons"> close </i></a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-8">
              <h4 class="mb-4">Informasi Pembeli:</h4>
              <div class="user-checkout">
                <!--  -->
                <form>
                  <div class="form-group">
                    <label for="namaLengkap">Nama lengkap</label>
                    <input
                      v-model="name"
                      type="text"
                      class="form-control"
                      id="namaLengkap"
                      aria-describedby="namaHelp"
                      placeholder="Masukan Nama"
                    />
                  </div>
                  <div class="form-group">
                    <label for="namaLengkap">Email Address</label>
                    <input
                      v-model="email"
                      type="email"
                      class="form-control"
                      id="emailAddress"
                      aria-describedby="emailHelp"
                      placeholder="Masukan Email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="namaLengkap">No. HP</label>
                    <input
                      v-model="number"
                      type="text"
                      class="form-control"
                      id="noHP"
                      aria-describedby="noHPHelp"
                      placeholder="Masukan No. HP"
                    />
                  </div>
                  <div class="form-group">
                    <label for="alamatLengkap">Alamat Lengkap</label>
                    <textarea
                      v-model="address"
                      class="form-control"
                      id="alamatLengkap"
                      rows="3"
                    ></textarea>
                  </div>
                </form>
                <!--  -->
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="col-lg-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="proceed-checkout">
                <ul>
                  <li class="subtotal">ID Transaction <span>#SH12000</span></li>
                  <li class="subtotal mt-3">
                    Subtotal <span>${{ subtotal.toFixed(2) }}</span>
                  </li>
                  <li class="subtotal mt-3">
                    Pajak <span>{{ tax }}% ${{ (subtotal * (tax / 100)).toFixed(2) }} </span>
                  </li>
                  <li class="subtotal mt-3">
                    Total Biaya <span>${{ totalPayment.toFixed(2) }}</span>
                  </li>
                  <li class="subtotal mt-3">Bank Transfer <span>Mandiri</span></li>
                  <li class="subtotal mt-3">No. Rekening <span>2208 1996 1403</span></li>
                  <li class="subtotal mt-3">Nama Penerima <span>Shayna</span></li>
                </ul>
                <a @click="handleCheckout" href="#" class="proceed-btn">I ALREADY PAID</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
