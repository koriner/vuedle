import { defineStore } from 'pinia';
import type { Word } from '@/types/words';
import { getRandomWord } from '@/services/words-api';

/**
 * This state just contains the random word and it's letters plus loading state.
 */
export const useWordStore = defineStore('wordStore', {
  state: () => ({
    currentWord: null as Word | null,
    isLoading: true,
  }),
  actions: {
    async getRandomWord(): Promise<Word> {
      const newWord = await getRandomWord();
      this.currentWord = newWord;
      this.isLoading = false;
      return newWord;
    },
  },
});
