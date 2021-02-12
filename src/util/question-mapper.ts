import { Alternative } from "../models/question"
import { TriviaApiResponse } from "../services/trivia-api-response"

export function convertToQuestions(quiz: TriviaApiResponse){
  return quiz.results.map(result => {
    const incorrectAnswer : Alternative[] = result.incorrect_answers.map(incorrect => {
      return {
        content: incorrect,
        isCorrect: false
      }
    })
    const correctAnswer: Alternative = {
      content: result.correct_answer,
      isCorrect: true
    }
    return {
      question: result.question,
      alternatives: [
        ...incorrectAnswer,
        correctAnswer,
        {
          content: 'All above',
          isCorrect: false
        }
      ]
    }
  })
}
