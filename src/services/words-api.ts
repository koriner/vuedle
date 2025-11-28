import axios from 'axios';
import { DB_URL } from '@/constants';
import type { Word } from '@/types/words';

const client = axios.create({
  baseURL: DB_URL,
});

/**
 * Get a random word from the database. These are all 5 letters.
 *
 * @returns A random word from the database (not really a database it's just a gist.)
 */
export const getRandomWord = async (): Promise<Word> => {
  const response = await client.get('/');
  const allWords = response.data as Word[];
  const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
  console.log(randomWord);
  return { word: randomWord.word, letters: randomWord.letters };
};
