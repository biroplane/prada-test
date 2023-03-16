<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  modelValue: {
    type: Number,
    default: 1
  }
})
const emits = defineEmits(['update:modelValue'])
const leading = computed(() => String(props.modelValue).padStart(2, '0'))
const increment = () => {
  emits('update:modelValue', props.modelValue + 1)
}
const decrement = () => {
  if (props.modelValue <= 1) return
  emits('update:modelValue', props.modelValue - 1)
}
</script>

<template>
  <div class="quantity-picker">
    <button @click="decrement">-</button>
    <div>{{ leading }}</div>
    <button @click="increment">+</button>
  </div>
</template>
<style scoped>
.quantity-picker {
  background-color: #f4f4f4;
  display: flex;
  height: 35px;
}
.quantity-picker div {
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #909090;
  cursor: pointer;
}
button:active {
  background-color: #e5e5e5;
}
</style>
