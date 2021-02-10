import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button'
import { Alternative } from '../../models/question';
import { triviaApi } from '../../services/api';
import { TriviaApiResponse } from '../../services/trivia-api-response'

import { Container, Text, Title } from './styles'


export const Home: React.FC = () => {
  const [answer, setAnswer] = useState();
  const navigation = useNavigation();

  async function loadQuestions(){
    // TODO: create trivia api response
    const { data: quiz } = await triviaApi.get<TriviaApiResponse>('api.php?amount=3&category=15&difficulty=easy&type=multiple')
    return convertToQuestions(quiz)
  }

  function convertToQuestions(quiz: TriviaApiResponse){
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

  async function navigateToQuiz(){
    const questions = await loadQuestions();
    navigation.navigate('Quiz', {
      questions
    });
  }

  return(
    <Container>
      <Title>Quiz</Title>
      <Text>Desc do quiz</Text>
      <Button onPress={navigateToQuiz}>Start</Button>
    </Container>
  )

}
