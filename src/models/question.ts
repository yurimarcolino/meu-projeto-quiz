export interface Alternative {
  content: string,
  isCorrect: boolean
}

export interface Question {
  question: string
  alternatives: Alternative[],
}
