<script setup lang="ts">
import Row from '@/components/Row.vue';
import { useGameStore } from '@/stores/game-store';
import { storeToRefs } from 'pinia';

const gameStore = useGameStore();
const { currentRowIndex, results, isGameLost } = storeToRefs(gameStore);
</script>

<template>
  <div class="grid-view" :class="{ 'grid-view-lost': isGameLost }">
    <Row
      v-for="(n, i) in 6"
      :key="i"
      :index="i"
      :isRowEnabled="i <= currentRowIndex"
      :rowResult="results[i]"
    />
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
.grid-view-lost {
  opacity: 0.35;
}
</style>
