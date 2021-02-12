import { Answer } from '../../models/answer';

export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const CLEAR_ANSWERS = 'CLEAR_ANSWERS';

interface AnswerQuestionAction {
  type: typeof ANSWER_QUESTION;
  payload: Answer;
}

interface ClearAnswerAction {
  type: typeof CLEAR_ANSWERS;
}

export type QuizActionsTypes = AnswerQuestionAction | ClearAnswerAction
