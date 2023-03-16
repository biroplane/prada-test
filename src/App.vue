<script setup lang="ts"></script>

<template>
  <Suspense>
    <template #default>
      <RouterView />
    </template>
    <template #fallback> Loading </template>
  </Suspense>
</template>

<style scoped>
@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
