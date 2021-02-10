import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Img } from '../../components/Image';
import { RootStackParamList } from '../../routes/AppStack';
import { Alternative } from '../../components/Alternative';
import { Container, Title } from './styles';
import { Alternative as AlternativeModel } from '../../models/question';
import { View } from 'react-native';
import { ButtonGroup } from '../../components/Button/styles';

type QuizProps = StackScreenProps<RootStackParamList, 'Quiz'>

export const Quiz: React.FC<QuizProps> = ({ route, navigation }) => {
  const [answers, setAnswers] = useState<AlternativeModel[]>([]);
  const [selectIndex, setSelectIndex] = useState<number>();
  const [index, setIndex] = useState<number>(0);
  const { questions } = route.params

  const canGoNext = index + 1 < questions.length;

  const question = questions[index];

  function nextQuestion() {
      setIndex(index + 1);
  }

  function finishQuiz(){
    navigation.navigate('Result',{
      questions,
      answers
    })
  }

  function previousQuestion(){
    setIndex(index - 1);
  }

  function handleSelectAnswer(alternative: AlternativeModel, alternativeIndex: number){
    const newAnswers = [...answers];
    newAnswers[index] = alternative;
    setAnswers(newAnswers);
    setSelectIndex(alternativeIndex);
  }

  return(
    <Container>
      <Img source={{uri: `https://picsum.photos/id/${index}/200/300`}}/>
      <Title>{question.question}</Title>
      {question.alternatives.map((alternative, alternativeIndex) => {
        return <Alternative
          selected={alternativeIndex === selectIndex}
          onPress={() => handleSelectAnswer(alternative, alternativeIndex)}
          key={alternative.content}>{alternative.content}
        </Alternative>
      })}
      <ButtonGroup>
        { index > 0 && <Button onPress={previousQuestion}>Previous</Button>}
        { canGoNext && <Button onPress={nextQuestion}>Next</Button>}
        { !canGoNext && <Button enabled={answers.length > 0} onPress={finishQuiz}>Finish</Button>}
      </ButtonGroup>
    </Container>
  );
}
