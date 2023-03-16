import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useNavigationStore = defineStore('navigation', () => {
  const mainMenu = ref([
    { label: 'SHOP', route: '/' },
    { label: 'BLOG', route: '/' },
    { label: 'CONTACT', route: '/' }
  ])
  return { mainMenu }
})
