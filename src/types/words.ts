// A general word, with an array of letters and the full word
export type Word = {
  word: string;
  letters: string[];
};

// A result of checking 5 letters against a word
export type WordResult = {
  letters: Array<{
    letter: string;
    result: 'correct' | 'incorrect' | 'present';
  }>;
};
