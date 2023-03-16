<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 48
  }
})
</script>
<template>
  <div class="icon" :style="`--size:${size}px`">
    <slot></slot>
  </div>
</template>
<style>
.icon {
  width: var(--size);
  height: var(--size);
  position: relative;
}
.icon svg {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.icon.flip {
  transform: rotate(180deg);
}
</style>
