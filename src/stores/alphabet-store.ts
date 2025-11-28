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
      // Make this in QWERTY keyboard order
      this.alphabet = [
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'Z',
        'X',
        'ENTER',
        'C',
        'V',
        'B',
        'N',
        'M',
        'BACKSPACE',
      ];

      return this.alphabet;
    },
  },
});
