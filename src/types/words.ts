// A general word, with an array of letters and the full word
export type Word = {
  word: string;
  letters: string[];
};

export type Result = 'correct' | 'incorrect' | 'present' | 'none';

// A result of checking 5 letters against a word
export type WordResult = Result[];
