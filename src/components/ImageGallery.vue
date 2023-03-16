<script setup>
import { computed, ref } from 'vue'
import Arrow from './Icons/Arrow.vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
const selected = ref(0)
const mainImage = computed(() => props.item.attachments[selected.value].attachmentAssetPath)
// nextTick(() => {
//   selected.value = props.item.attachments[selected.value].attachmentAssetPath
// })
const next = () => {
  console.log('Actual index', selected.value)
  selected.value = selected.value < props.item.attachments.length - 1 ? selected.value + 1 : 0
}
const prev = () => {
  selected.value = selected.value > 0 ? selected.value - 1 : props.item.attachments.length - 1
}
</script>
<template>
  <div class="main-image">
    <div class="selected">
      <button @click="prev">
        <Arrow></Arrow>
      </button>
      <img :src="mainImage" lazy />
      <button @click="next">
        <Arrow flip></Arrow>
      </button>
    </div>
    <ul>
      <li
        v-for="(thumb, t) in item.attachments"
        :key="t"
        class="thumbnail"
        :class="{ active: selected == t }"
        @click="selected = t"
      >
        <img class="mini" :src="thumb.attachmentAssetPath" />
      </li>
    </ul>
  </div>
</template>
<style scoped>
.main-image .selected {
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  margin-bottom: 35px;
}

.main-image .selected button {
  position: absolute;
  height: 100%;
  /* top: 50%; */
}
.main-image .selected button:last-child {
  right: 0;
}

.main-image ul {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
  align-items: space-around;
}
.main-image ul::-webkit-scrollbar {
  display: none;
}
.main-image ul li.thumbnail {
  width: 30% !important;
  flex: 0 0 auto;
  cursor: pointer;
}
.main-image ul li.thumbnail.active {
  border-bottom: 1px solid #f4f4f4;
}
</style>
