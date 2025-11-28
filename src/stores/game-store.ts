import { defineStore } from 'pinia';
import type { WordResult, Result } from '@/types/words';
/**
 * This state contains game logic and progress.
 */

const rows: string[][] = [];
for (let i = 0; i < 6; i++) {
  rows.push([]);
}

/* Check the word submitted against the letters and return the result */
function checkWord(row: string[], letters: string[]): WordResult {
  const result: WordResult = ['incorrect', 'incorrect', 'incorrect', 'incorrect', 'incorrect'];

  letters.forEach((letter, lIndex) => {
    let letterResult: Result = 'incorrect';

    if (row[lIndex].toUpperCase() === letter.toUpperCase()) {
      letterResult = 'correct';
    }

    if (letterResult !== 'correct') {
      const otherIndex = row.indexOf(letter.toUpperCase());
      if (otherIndex !== -1) {
        letterResult = 'present';
        result[otherIndex] = 'present';
      }
    }

    if (letterResult === 'correct') {
      result[lIndex] = 'correct';
    }
  });

  return result;
}
function createEmptyWordResults(): WordResult[] {
  const res: WordResult[] = [];

  for (let i = 0; i < 6; i++) {
    res[i] = ['none', 'none', 'none', 'none', 'none'];
  }

  return res;
}

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    currentRowIndex: 0,
    rowsUsed: 0,
    rows,
    letters: [] as string[],
    results: createEmptyWordResults(),
  }),
  actions: {
    setLetters(letters: string[]) {
      this.letters = letters;
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
      const result = checkWord(this.rows[this.currentRowIndex], this.letters);
      this.results[this.currentRowIndex] = result;
      const isMatch = result.every((r) => r === 'correct');

      if (isMatch) {
        // SUCCESS TODO!
        return;
      } else if (this.currentRowIndex < 5 && !isMatch) {
        this.currentRowIndex++;
      } else {
        // FAIL TODO!
        return;
      }
    },
  },
});
