<script setup lang="ts">
import IconHamburger from '@/components/Icons/Hamburger.vue'
import { useNavigationStore } from '@/stores/navigation'
import { ref } from 'vue'
const { mainMenu } = useNavigationStore()
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(false)
</script>
<template>
  <div>
    <button @click="isOpen = !isOpen">
      <IconHamburger :size="23" />
    </button>
    <transition name="slide-left">
      <div class="drawer" @click="isOpen = false" v-if="isOpen">
        <h3>Hello</h3>
        <ul>
          <li v-for="(item, i) in mainMenu" :key="i">
            <RouterLink :to="item.route">{{ item.label }}</RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<style>
.drawer {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 360px;
  height: 100vh;
  background-color: white;
  z-index: 999;
  box-shadow: 1px 1px 45px rgba(0, 0, 0, 0.1);
  padding: 14px;
}

.drawer h3 {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}
.drawer li a:hover {
  text-decoration: underline;
}
.slide-left-enter-active {
  transition: transform opacity 0.5 ease-out;
}

.slide-left-enter-to,
.slide-left-leave-active {
  transition: all 0.2s cubic-bezier(0.8, -0.5, 0.2, 1.4);
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
</style>
