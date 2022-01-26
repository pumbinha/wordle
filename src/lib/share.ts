import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'

export const shareStatus = (guesses: string[]) => {
  navigator.clipboard.writeText(
    "Wordle (ES) " +
      solutionIndex +
      " " +
      guesses.length +
      "/6\n\n" +
      generateEmojiGrid(guesses) +
      "\n\nMás palabras en: https://wordle.pumba.cloud\n"
  );
};

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
