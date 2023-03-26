<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation'
import AppDrawer from './AppDrawer.vue'
import ShoppingBag from './ShoppingBag.vue'
const { mainMenu } = useNavigationStore()
</script>
<template>
  <header>
    <div class="hero fixed">
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
        <ShoppingBag></ShoppingBag>
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
.logo img {
  object-fit: contain;
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
  grid-column: span 12;
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

@media screen and (max-width: 480px) {
  header {
    width: 100%;
    height: 375px;
  }
  .hero {
    height: 72px;
  }
  .main-menu {
    display: none;
  }
  .hero {
    padding: 20px;
  }
  .logo {
    height: 20px;
    left: 0;
  }

  .hero-detail h1 {
    font-size: 1.375rem;
  }
  .grid-12 .hero-detail {
    padding: 20px;
  }
  .grid-12 ul.breadcrumb {
    font-size: 0.875rem;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  /* .main-menu{
    display: none;
  } */
  header {
    height: 375px;
  }
  .hero {
    padding: 20px 20px;
    height: 72px;
  }
  .hero-detail {
    padding: 0 20px;
  }
  .logo {
    height: 20px;
    left: 0;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  header {
    height: 400px;
  }
  .main-menu {
    display: none;
  }
  .hero-detail {
    padding: 0px 45px;
  }
}
@media screen and (min-width: 1025px) {
  .hero-detail {
    padding: 0px 70px;
  }
}
</style>
