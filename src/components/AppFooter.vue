<script setup>
import { ref } from 'vue'
import FooterItems from './FooterItems.vue'
const footerMenu = ref([
  {
    title: 'Contact Us',

    links: [
      { label: '3191 Ethels Spring Lake (Highlands), <br>Florida NY', icon: 'fa-location-dot' },
      { label: '919-485-0891', icon: 'fa-phone', href: 'tel://9194850891' },
      { label: 'gokoping@hotmail.com', icon: 'fa-envelope', href: 'mailto://gokoping@hotmail.com' }
    ]
  },
  {
    title: 'Quick Links',

    links: [
      { label: 'About Us', href: '/' },
      { label: 'Shop', href: '/' },
      { label: 'My Account', href: '/' },
      { label: 'Delivery', href: '/' },
      { label: 'Policies', href: '/' }
    ]
  },
  {
    title: 'Customer Care',

    links: [
      { label: 'Size Chart', href: '' },
      { label: 'Gift Vouchers', href: '' },
      { label: 'Site Map', href: '' },
      { label: 'Media', href: '' },
      { label: 'Brand', href: '' }
    ]
  },
  { title: 'Newsletter', links: [{ label: 'Type Your Email', input: true }] }
])
</script>
<template>
  <footer>
    <div class="container grid-4">
      <FooterItems
        v-for="(item, i) in footerMenu"
        :key="i"
        :items="item.links"
        :title="item.title"
        :columns="item.columns"
        class="footer-items"
      ></FooterItems>
    </div>
  </footer>
</template>
<style>
footer {
  background-color: #f7f7f7;
  /* height: 200px; */
  padding: 130px 20px;
}
.footer-items {
  grid-column: span 2;
}

@media screen and (max-width: 480px) {
  footer {
    padding: 70px 20px;
  }
  .footer-items {
    grid-column: span 4;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  footer {
    padding: 70px 20px;
  }
}
@media screen and (min-width: 1025px) {
  .footer-items {
    grid-column: span 1;
  }
}
</style>
