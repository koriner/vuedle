<script setup lang="ts">
import Row from '@/components/Row.vue';
import { useGameStore } from '@/stores/game-store';
import { ref } from 'vue';

const gameStore = useGameStore();
const currentRowIndex = ref(gameStore.currentRowIndex);
</script>

<template>
  <div class="grid-view">
    <Row v-for="(n, i) in 6" :key="i" :index="i" :isRowEnabled="i <= currentRowIndex && i >= 0" />
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
