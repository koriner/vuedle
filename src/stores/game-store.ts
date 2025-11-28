import { defineStore } from 'pinia';

/**
 * This state contains game logic and progress.
 */

const rows: string[][] = [];
for (let i = 0; i < 6; i++) {
  rows.push([]);
}
console.log('rows', rows);

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    currentRowIndex: 0,
    rowsUsed: 0,
    rows,
  }),
  actions: {
    getRows() {
      return this.rows;
    },
    // addLetterToRow(letter: string) {
    //   const row = this.rows[this.currentRowIndex];
    //   row.push(letter);
    // },
  },
});
