<script setup lang="ts">
defineProps(['count'])
</script>
<template>
  <div class="badge">
    {{ count }}
  </div>
</template>
<style>
.badge {
  position: absolute;
  top: 15px;
  right: -5px;
  background-color: #e6395e;
  width: 18px !important;
  aspect-ratio: 1 / 1 !important;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
}
</style>
