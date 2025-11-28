<script setup lang="ts">
import Row from '@/components/Row.vue';
</script>

<template>
  <div class="grid-view">
    <Row v-for="(n, i) in 6" :key="i" :index="i" />
  </div>
</template>

<style scoped>
.grid-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
