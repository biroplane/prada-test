import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'
export const useCartStore = defineStore('cartStore', () => {
  const cart: Ref<any[]> = ref([])
  const addToCart = (item: any) => {
    cart.value.push(item)
  }
  return {
    cart,
    addToCart
  }
})
