<script setup lang="ts">
import Tile from '@/components/Tile.vue';
defineProps<{
  index: number;
}>();
</script>

<template>
  <div class="row-view">
    <div v-for="(n, i) in 6" :key="i">
      <Tile :columnIndex="i" :rowIndex="index" />
    </div>
  </div>
</template>

<style scoped>
.row-view {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
