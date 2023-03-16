<script setup>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import Product from '@/components/Product.vue'
import { useCartStore } from '@/stores/cart'
import { useProductStore } from '@/stores/products'
const ps = useProductStore()
const cs = useCartStore()
await ps.load()

const addToCart = (e) => {
  console.log('Add To cart', e)
  cs.addToCart({ ...e })
}
</script>

<template>
  <div class="app">
    <AppHeader>Header</AppHeader>
    <main class="py-70">
      <Product :item="ps.product" @add-to-cart="addToCart($event)"></Product>
    </main>
    <AppFooter></AppFooter>
  </div>
</template>
<style>
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
}
main {
  margin-top: var(--space);
}
</style>
