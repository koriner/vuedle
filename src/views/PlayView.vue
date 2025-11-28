<script setup lang="ts">
import Grid from '@/components/Grid.vue';
import type { Word } from '@/types/words';
import { getRandomWord } from '@/services/words-api';
import { ref, onMounted } from 'vue';

const word = ref<Word | null>(null);

onMounted(async () => {
  word.value = await getRandomWord();
});
</script>

<template>
  <div class="game-view">
    <h1>Game View</h1>
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
