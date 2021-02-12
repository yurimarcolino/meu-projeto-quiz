import { InitialState } from "../store";
import { QuizActionsTypes } from "./action-types";

const initialState: InitialState = {
  answers: []
}

export function quizReducer(state: InitialState = initialState, action: QuizActionsTypes): InitialState{
  switch(action.type){
    case 'ANSWER_QUESTION': {
      const newAnswers = [...state.answers];
      newAnswers[action.payload.questionIndex] = action.payload.alternative;
      return {
        answers: newAnswers
      }
    }
    case 'CLEAR_ANSWERS': {
      return {
        answers: []
      }
    }
    default:
      return state;
  }
}
