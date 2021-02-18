import { math } from "polished";
import { Alternative } from "../models/alternative";

export const radomize = (alternatives: Alternative[]) => {
  const x = alternatives.sort((a: Alternative, b: Alternative) => a.content.localeCompare(b.content));
  return x;
}

