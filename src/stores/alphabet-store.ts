import { defineStore } from 'pinia';

/**
 * This state just contains the random word and it's letters plus loading state.
 */
export const useAlphabetStore = defineStore('alphabetStore', {
  state: () => ({
    alphabet: [] as string[],
  }),
  actions: {
    /* Just returns a list of uppercase alphabet letters. */
    getAlphabet() {
      this.alphabet = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ];
      return this.alphabet;
    },
  },
});
