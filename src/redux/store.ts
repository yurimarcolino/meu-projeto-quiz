import { combineReducers, createStore, Store } from "redux";
import { Alternative } from "../models/alternative";
import {  quizReducer } from './quiz-slice/reducer';

export interface InitialState{
  answers: Alternative[];
}

const rootReducer  = combineReducers({
  quiz: quizReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export const store: Store<InitialState> = createStore(rootReducer, undefined);
