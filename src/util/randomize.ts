import { math } from "polished";
import { Alternative } from "../models/alternative";

export const radomize = (alternatives: Alternative[]) => {
  console.log('1', alternatives);
  const x = alternatives.sort((a: Alternative, b: Alternative) => a.content.localeCompare(b.content));
  console.log('2',x);
  return x;
}

