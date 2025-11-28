<script setup lang="ts">
import Tile from '@/components/Tile.vue';
import { ref } from 'vue';
import { useGameStore } from '@/stores/game-store';
import type { WordResult } from '@/types/words';

const props = defineProps<{
  index: number;
  isRowEnabled: boolean;
  rowResult: WordResult;
}>();

const gameStore = useGameStore();
const row = ref<string[]>(gameStore.rows[props.index]);
</script>

<template>
  <div class="row-view">
    <div v-for="(n, i) in 5" :key="i">
      <Tile
        :columnIndex="i"
        :rowIndex="index"
        :isTileEnabled="isRowEnabled"
        :letter="row[i] ?? ''"
        :result="rowResult[i] ?? 'incorrect'"
      />
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
