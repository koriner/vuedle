<script setup lang="ts">
import { useAlphabetStore } from '@/stores/alphabet-store';
import { ArrowTurnDownLeftIcon, BackspaceIcon } from '@heroicons/vue/24/solid';
import { onMounted } from 'vue';
import { useGameStore } from '@/stores/game-store';

const gameStore = useGameStore();
const alphabetStore = useAlphabetStore();
const alphabet: string[] = alphabetStore.getAlphabet();

const handleKeyboardEvent = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    gameStore.submitRow();
  } else if (event.key === 'Backspace') {
    gameStore.removeLastLetterFromRow();
  } else {
    if (/^[A-Z]$/.test(event.key.toUpperCase())) {
      gameStore.addLetterToRow(event.key.toUpperCase());
    }
  }
};

const handleLetterClick = (letter: string): void => {
  if (letter === 'ENTER') {
    gameStore.submitRow();
  } else if (letter === 'BACKSPACE') {
    gameStore.removeLastLetterFromRow();
  } else {
    gameStore.addLetterToRow(letter);
  }
};

onMounted(() => {
  window.addEventListener('keyup', handleKeyboardEvent);
});
</script>

<template>
  <div class="keyboard-view">
    <span
      class="keyboard-letter"
      v-for="letter in alphabet"
      :key="letter"
      @click="handleLetterClick(letter)"
    >
      <template v-if="letter !== 'ENTER' && letter !== 'BACKSPACE'">
        {{ letter }}
      </template>
      <ArrowTurnDownLeftIcon class="keyboard-letter-icon" v-if="letter === 'ENTER'" />
      <BackspaceIcon class="keyboard-letter-icon" v-if="letter === 'BACKSPACE'" />
    </span>
  </div>
</template>

<style scoped>
.keyboard-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 1rem;
  max-width: 568px;
  margin: 0 auto;
  transform: translateX(10px);
}
.keyboard-letter {
  cursor: pointer;
  border: 1px solid #aa17ce;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #d3d6da;
  border-radius: 4px;

  &:hover {
    background-color: #aa17ce;
    color: #fff;
    transition: all 0.3s ease-out;
  }
}
.keyboard-letter-icon {
  width: 28px;
  height: 28px;
}
</style>
