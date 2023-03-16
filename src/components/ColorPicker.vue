<script setup>
defineProps({
  colors: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: [String, Object],
    default: ''
  }
})
defineEmits(['update:modelValue', 'change'])
</script>
<template>
  <div class="colors">
    <p>Color</p>
    <ul>
      <li
        v-for="(color, c) in colors"
        :key="c"
        :style="`--color:${color.hexCode}`"
        class="square"
        :class="{ active: modelValue === color }"
        @click="$emit('update:modelValue', color)"
        @mouseover="$emit('change', color.thumbnail)"
        @mouseout="$emit('change', null)"
      ></li>
    </ul>
  </div>
</template>
<style scoped>
.colors {
  display: flex;
  gap: 30px;
}

.colors ul {
  display: flex;
  gap: 10px;
}
.square {
  background-color: var(--color);
  border: 1px solid #e5e5e5;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.square.active {
  position: relative;
}
.square:hover {
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
}
.active:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #e6395e;
  bottom: -7px;
}
</style>
