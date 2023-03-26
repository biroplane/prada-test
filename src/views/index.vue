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
    <main>
      <Product :item="ps.product" @add-to-cart="addToCart($event)"></Product>
    </main>
    <AppFooter></AppFooter>
  </div>
</template>
<style scoped>
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
}
main {
  margin-top: var(--space);
  padding: 0 70px;
}
@media screen and (max-width: 480px) {
  main {
    padding: 0 20px;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  main {
    padding: 0 20px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
}
@media screen and (min-width: 1025px) {
}
</style>
