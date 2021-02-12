import { triviaApi } from './api'
import { TriviaApiResponse } from './trivia-api-response'
import { convertToQuestions } from '../util/question-mapper';

export async function loadQuestions(){
  const { data: quiz } = await triviaApi.get<TriviaApiResponse>('api.php?amount=15&category=18&difficulty=easy&type=multiple')
  return convertToQuestions(quiz)
}

