export interface TriviaApiResponse{
  results: Result[]
}

export interface Result{
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}
