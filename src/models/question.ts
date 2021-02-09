export interface Alternative {
  content: string,
  isCorrect: boolean
}

export interface Question {
  image: string,
  question: string
  alternatives: Alternative[],
}
