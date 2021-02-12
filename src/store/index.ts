import { combineReducers, createStore, Store } from "redux";
import { Alternative } from "../models/question";

// state
export interface InitialState{
  answers: Alternative[];
}

const initialState: InitialState = {
  answers: []
}

//types
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const CLEAR_ANSWERS = 'CLEAR_ANSWERS';

//actions types
interface AnswerQuestionAction {
  type: typeof ANSWER_QUESTION;
  //TODO create custom type
  payload: {alternative: Alternative, questionIndex: number};
}

interface ClearAnswerAction {
  type: typeof CLEAR_ANSWERS;
}

export type QuizActionsTypes = AnswerQuestionAction | ClearAnswerAction

//action creators
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

//reducer
function quizReducer(state: InitialState = initialState, action: QuizActionsTypes): InitialState{
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

const rootReducer  = combineReducers({
  quiz: quizReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export const store: Store<InitialState> = createStore(rootReducer, undefined);
