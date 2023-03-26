import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
export const useCartStore = defineStore('cartStore', () => {
  const cart: Ref<any[]> = ref([])
  const addToCart = (item: any) => {
    cart.value.push(item)
  }
  const remove = (index: number) => {
    cart.value.splice(index, 1)
  }

  const total = computed(() => {
    const _sum = cart.value.reduce((acc, curr) => {
      return acc + curr.qty * curr.price
    }, 0)
    const _v = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(_sum)
    return _v
  })
  return {
    cart,
    addToCart,
    remove,
    total
  }
})
