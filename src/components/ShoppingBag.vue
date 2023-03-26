<script setup>
import { useCartStore } from '@/stores/cart'
import { arrow, autoUpdate, flip, offset, shift, size, useFloating } from '@floating-ui/vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import Badge from './Badge.vue'
import ShoppingCart from './Icons/ShoppingCart.vue'
const cartStore = useCartStore()

const shoppingBag = ref()
const isOpen = ref(false)
const activator = ref(null)
const menu = ref(null)
const floatingArrow = ref(null)

onClickOutside(shoppingBag, () => {
  isOpen.value = false
})

const { x, y, strategy } = useFloating(activator, menu, {
  open: isOpen,
  whileElementsMounted: autoUpdate,
  middleware: [
    arrow({ element: floatingArrow }),
    shift(),
    offset(5),
    flip(),
    size({
      apply({ elements, availableWidth }) {
        Object.assign(elements.floating.style, {
          // maxHeight: `200px`,
          height: 'max-content',
          maxWidth: `${availableWidth}px`,
          overflowY: 'scroll',
          width: `max-content`
        })
      }
    })
  ]
})
const open = () => {
  if (cartStore.cart.length == 0) return
  isOpen.value = !isOpen.value
}
const remove = (i) => {
  cartStore.remove(i)
  if (cartStore.cart.length == 0) {
    isOpen.value = false
  }
}
</script>

<template>
  <div class="" ref="shoppingBag">
    <button
      @click.stop.prevent="open"
      class="w-full text-neutral-400"
      ref="activator"
      id="activator"
    >
      <ShoppingCart :size="28">
        <Badge v-if="cartStore.cart.length > 0" :count="cartStore.cart.length"></Badge>
      </ShoppingCart>
    </button>
    <Transition name="slide-up">
      <div
        ref="menu"
        v-if="isOpen"
        class="cart-items"
        :style="{
          position: strategy,
          top: `${y ?? 0}px`,
          //left: `${x ?? 0}px`,
          right: `10px`,
          width: 'max-content',
          minWidth: '200px'
        }"
      >
        <div class="arrow" ref="floatingArrow"></div>
        <ul>
          <li v-for="(item, i) in cartStore.cart" :key="i" class="cart-item">
            <div class="cart-item-image">
              <img :src="item.color.fullImage" alt="" />
            </div>
            <div class="cart-item-description">
              <h3>{{ item.name }}</h3>
              <span>{{ item.color.color }}</span>
              <p>{{ item.qty }} x {{ item.price }}</p>
            </div>
            <button @click="remove(i)"><i class="fas fa-trash"></i></button>
          </li>
          <li class="total cart-item">
            <h3>Total</h3>
            <p>{{ cartStore.total }}</p>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>
<style>
.slide-up-enter-active {
  transition: transform opacity 0.2s ease-out;
}

.slide-up-enter-to,
.slide-up-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.cart-items {
  background-color: white;
  margin: 0.25rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
  z-index: 9999;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 10px 0;
  border-bottom: 1px solid #f7f7f7;
}
.cart-item-image {
  width: 100px;
  height: 100px;
}
.cart-item-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.cart-item-description *:not(h3) {
  font-size: 0.75rem;
}
.cart-item-description p {
  font-weight: 600;
}
.cart-item button {
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart-item button:hover {
  background-color: #f7f7f7;
}
.total h3 {
  flex-grow: 1;
}
.total p {
  font-weight: 600;
}
</style>
