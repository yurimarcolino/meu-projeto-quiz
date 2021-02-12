import { Alternative } from './alternative'

export interface Question {
  question: string
  alternatives: Alternative[],
}
