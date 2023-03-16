<script setup lang="ts">
import Icon from './Icon.vue'
defineProps({
  size: {
    type: Number,
    default: 48
  },
  flip: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <Icon :size="size" :class="{ flip }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 33 23"
    >
      <path
        fill-rule="evenodd"
        fill="rgb(0, 0, 0)"
        d="M11.151,0.756 L11.975,1.610 L3.023,10.897 L32.469,10.897 L32.469,12.104 L3.021,12.104 L11.975,21.390 L11.151,22.245 L0.793,11.501 L11.151,0.756 Z"
      />
    </svg>
  </Icon>
</template>
