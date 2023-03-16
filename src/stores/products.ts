import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useProductStore = defineStore('products', () => {
  // const products = ref([])
  const product = ref({})

  const load = async () => {
    try {
      const _data = await fetch('/product.json')
      const _product = await _data.json()
      console.log('Prods', _product.data[0].catalogEntryView[0])
      product.value = _product.data[0].catalogEntryView[0]
    } catch (error) {
      console.log('Errore di caricamento', error)
    }
  }
  return { product, load }
})
