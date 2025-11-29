<script setup lang="ts">
import Grid from '@/components/Grid.vue';
import Keyboard from '@/components/Keyboard.vue';
import SuccessExplosion from '@/components/SuccessExplosion.vue';
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
  const rowsValue = gameStore.rows;

  if (wordValue) {
    word.value = wordValue;
    gameStore.setLetters(wordValue.letters);
  }
  if (rowsValue) {
    rows.value = rowsValue as string[][];
  }
});
</script>

<template>
  <div class="play-view">
    <div v-if="word" class="word-container">
      <h2>Word: {{ word.word }}</h2>
    </div>
    <div v-else>
      <h2>Loading word...</h2>
    </div>
    <Grid />
  </div>
  <div class="keyboard-container">
    <Keyboard />
  </div>
  <SuccessExplosion v-if="gameStore.isGameWon && !gameStore.hideAnimation" />
</template>

<style scoped>
.play-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.word-container {
  position: absolute;
  top: 20px;
  right: 20px;
}
.keyboard-container {
  margin-top: 2.5rem;
  padding-bottom: 100px;
}
</style>
