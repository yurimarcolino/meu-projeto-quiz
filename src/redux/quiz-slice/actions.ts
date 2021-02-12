import { QuizActionsTypes } from "./action-types"
import { ANSWER_QUESTION, CLEAR_ANSWERS } from './action-types';
import { Alternative } from '../../models/alternative';

export function answerQuestion(alternative: Alternative, questionIndex: number): QuizActionsTypes {
  return {
    type: ANSWER_QUESTION,
    payload: {
      alternative,
      questionIndex,
    }
  }
}

export function clearAnswers(): QuizActionsTypes {
  return {
    type: CLEAR_ANSWERS,
  }
}

