import { WORDS } from '../constants/wordlist'

export const isWordInWordList = (word: string) => {
  return WORDS.includes(word.toLowerCase())
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1641013200000
  const now = Date.now()
  //orig: 86400000
  const msInDay = 3600000
  const index = Math.floor((now - epochMs) / msInDay)

  return {
    solution: WORDS[index].toUpperCase(),
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
