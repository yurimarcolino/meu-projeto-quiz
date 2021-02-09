import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/Button';
import { Img } from '../components/Image';
import { RootStackParamList } from '../routes/AppStack';
import { Alternative } from '../components/Alternative';
import { Container } from '../components/Container';

type QuizProps = StackScreenProps<RootStackParamList, 'Quiz'>

export const Quiz: React.FC<QuizProps> = ({ route, navigation }) => {
  const [index, setIndex] = useState<number>(0);
  const letters = ['a)', 'b)', 'c)', 'd)', 'e)'];
  const { questions } = route.params

  const canGoNext = index + 1 < questions.length;

  const question = questions[index];

  function nextQuestion() {
      setIndex(index + 1);
  }

  function finishQuiz(){
    alert('terminou!')
  }

  return(
    <Container>
      <Img src={question.image}/>
      <Text>{question.question}</Text>
      {question.alternatives.map((alternative, alternativeIndex) => {
        return <Alternative key={alternative.content}>{alternative.content}</Alternative>
      })}
      { canGoNext && <Button onClick={nextQuestion}>Next</Button>}
      { !canGoNext && <Button onClick={finishQuiz}>Finish</Button>}
    </Container>
  );
}
