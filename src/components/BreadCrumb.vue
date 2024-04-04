<template>
  <div class="breacrumb-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-text product-more">
            <RouterLink to="/"><i class="fa fa-home"></i> Home</RouterLink>
            <span>{{ props.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Detail'
    // required: true,
  }
})
</script>
