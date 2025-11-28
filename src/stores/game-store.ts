import { defineStore } from 'pinia';

/**
 * This state contains game logic and progress.
 */

const rows: string[][] = [];
for (let i = 0; i < 6; i++) {
  rows.push([]);
}

// function

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    currentRowIndex: 0,
    rowsUsed: 0,
    rows,
    letters: [] as string[],
  }),
  actions: {
    setLetters(letters: string[]) {
      this.letters = letters;
    },
    getRows() {
      return this.rows;
    },
    addLetterToRow(letter: string) {
      const row = this.rows[this.currentRowIndex];
      if (row.length < 5) {
        row.push(letter);
      }
    },
    removeLastLetterFromRow() {
      const row = this.rows[this.currentRowIndex];
      row.pop();
    },
    submitRow() {
      if (this.rows[this.currentRowIndex].length < 5) {
        return;
      }
      console.log(
        'submitRow',
        this.rows[this.currentRowIndex] + ' vs letters: ',
        this.letters.join(''),
      );
    },
  },
});
