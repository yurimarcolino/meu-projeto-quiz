import { Alternative } from "../models/alternative"
import { TriviaApiResponse } from "../services/trivia-api-response"
import { decode } from "./decode"
import { radomize } from "./randomize"

export function convertToQuestions(quiz: TriviaApiResponse){
  return quiz.results.map(result => {
    const incorrectAnswer : Alternative[] = result.incorrect_answers.map(incorrect => {
      return {
        content: decode(incorrect),
        isCorrect: false
      }
    })
    const correctAnswer: Alternative = {
      content: decode(result.correct_answer),
      isCorrect: true
    }
    return {
      question: decode(result.question),
      alternatives: radomize(
        [
          ...incorrectAnswer,
          correctAnswer,
          {
            //just to complete 5 answers in the requirement.
            content: 'None of them',
            isCorrect: false
          }
        ]
      )
    }
  })
}
