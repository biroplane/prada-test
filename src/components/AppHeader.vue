<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { useNavigationStore } from '@/stores/navigation'
import AppDrawer from './AppDrawer.vue'
import Badge from './Badge.vue'
import ShoppingCart from './Icons/ShoppingCart.vue'
const cartStore = useCartStore()
const { mainMenu } = useNavigationStore()
</script>
<template>
  <header>
    <div class="hero fixed">
      <!-- <button>
        <IconHamburger :size="23" />
      </button> -->
      <AppDrawer></AppDrawer>
      <ul class="main-menu">
        <li v-for="(item, i) in mainMenu" :key="i">
          <RouterLink :to="item.route">{{ item.label }}</RouterLink>
        </li>
      </ul>
      <div class="logo">
        <img src="/logo.png" width="207" height="29" />
      </div>
      <div class="grow"></div>
      <div class="">
        <ShoppingCart :size="28">
          <Badge v-if="cartStore.cart.length > 0" :count="cartStore.cart.length"></Badge>
        </ShoppingCart>
      </div>
    </div>
    <div class="grid-12 container">
      <div class="hero-detail">
        <h1>Gokoping Shop Detail</h1>
        <ul class="breadcrumb">
          <li>HOME</li>
          <li>SHOP</li>
          <li>SPRING T-SHIRT COLLECTION</li>
        </ul>
      </div>
    </div>
  </header>
</template>
<style>
header {
  --bg-color: #e8f0f2;
  width: 100% !important;
  background-color: var(--bg-color);
  height: 550px;
  width: 1920px;
}

.hero {
  width: 100%;
  height: var(--huge-space);
  padding: var(--half-space) var(--space);
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--bg-color);
  z-index: 1;
}
.main-menu {
  margin-left: 50px;
  display: flex;
}
.main-menu li:not(:last-child) {
  width: 100px;
}
.grow {
  flex-grow: 1;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  pointer-events: none;
  position: absolute;
  width: 100%;
}
.grid-12 {
  height: 100%;
}
.grid-12 h1 {
  font-size: 35px;
  line-height: 26px;
  font-weight: 300;
  font-family: 'Montserrat';
}
.grid-12 .hero-detail {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  grid-column: span 5;
}
.grid-12 ul.breadcrumb {
  display: flex;
  margin-top: 20px;
}
ul.breadcrumb li:not(:last-child) {
  color: #948c8d;
}
ul.breadcrumb li:not(:last-child)::after {
  content: ' / ';
}
ul.breadcrumb li:not(:first-child) {
  margin-left: 4px;
}
ul.breadcrumb li:last-child {
  font-weight: 600;
}

@media screen and (max-width: 375px) {
}
@media screen and (min-width: 376px) and (max-width: 768px) {
  /* .main-menu{
    display: none;
  } */
  header {
    height: 300px;
  }
  .grid-12 .hero-detail {
    grid-column: span 7 !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  header {
    height: 400px;
  }
}
@media screen and (min-width: 1025px) {
}
</style>
