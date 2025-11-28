<script setup lang="ts">
import Grid from '@/components/Grid.vue';
import { onMounted, ref } from 'vue';
import { useWordStore } from '@/stores/word-store';
import { useGameStore } from '@/stores/game-store';
import type { Word } from '@/types/words';

const wordStore = useWordStore();
const gameStore = useGameStore();
const word = ref<Word | null>(null);
const rows = ref<string[][]>([]);

onMounted(async () => {
  const wordValue = await wordStore.getRandomWord();
  const rowsValue = gameStore.getRows();

  if (wordValue) {
    word.value = wordValue;
  }
  if (rowsValue) {
    rows.value = rowsValue as string[][];
  }
});
</script>

<template>
  <div class="play-view">
    <h1>Play View</h1>
    <div v-if="word">
      <h2>Word: {{ word.word }}</h2>
    </div>
    <div v-else>
      <h2>Loading word...</h2>
    </div>
    <Grid />
  </div>
</template>

<style scoped>
/* Put scoped stuff in here */
</style>
