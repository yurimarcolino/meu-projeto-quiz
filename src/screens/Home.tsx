import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native'
import { Button } from '../components/Button'
import { Alternative, Question } from '../models/question';
import { triviaApi } from '../services/api';
import { TriviaApiResponse } from '../services/trivia-api-response'


export const Home: React.FC<Question[]> = () => {
  const navigation = useNavigation();

   async function loadQuestions(){
    // TODO: create trivia api response
    const { data: quiz } = await triviaApi.get<TriviaApiResponse>('api.php?amount=15&category=15&difficulty=easy&type=multiple')
    return convertToQuestions(quiz)
  }

  function convertToQuestions(quiz: TriviaApiResponse){
    return quiz.results.map(result => {
      const incorrectAnswer : Alternative[] = result.incorrect_answers.map(incorrect =>{
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
        image: 'https://picsum.photos/200/300?random=1',
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
    <View>
      <Text>Quiz</Text>
      <Text>Desc do quiz</Text>
      <Button onClick={navigateToQuiz}>Start Quiz</Button>
    </View>
  )

}
