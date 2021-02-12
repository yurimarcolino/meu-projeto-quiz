import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Img } from '../../components/Image';
import { Alternative } from '../../components/Alternative';
import { Alternative as AlternativeModel, Question } from '../../models/question';
import { ButtonGroup } from '../../components/Button/styles';
import { Timer } from '../../components/Timer';
import { View, Text } from 'react-native';

import { loadQuestions } from '../../services/questions.service';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { answerQuestion, RootState } from '../../store';
import { Container, Title } from './styles';

interface SelectItem {
  [x: number] : number;
}

export const Quiz: React.FC = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const answers = useSelector((state : RootState) => {
    console.log(state);
    return state.quiz.answers;
  });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<SelectItem>({});
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    (async function(){
      const questions = await loadQuestions();
      setQuestions(questions);
    })()
  },[]);

  const question = questions[index];

  const canGoNext = index + 1 < questions.length;

  function nextQuestion() {
      setIndex(index + 1);
  }

  function previousQuestion(){
    setIndex(index - 1);
  }

  function finishQuiz(){
    navigation.navigate('Result',{
      answers
    });
  }

  function handleSelectAnswer(alternative: AlternativeModel, alternativeIndex: number){
    console.log('index1',index);
    dispatch(answerQuestion(alternative, index));

    const answer =  {
      [index]: alternativeIndex
    }
    if (selectedAnswer) {
      setSelectedAnswer({...selectedAnswer, ...answer});
    }
  }

  if(!question){
    return(
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  return(
    <View>
      <Timer/>
      <Container>
      <Img source={{uri: `https://picsum.photos/id/${index}/200/300`}}/>
      <Title>{question.question}</Title>
      {question.alternatives.map((alternative, alternativeIndex) => {
        return <Alternative
          selected={selectedAnswer[index] === alternativeIndex}
          onPress={() => handleSelectAnswer(alternative, alternativeIndex)}
          key={alternative.content}
        >
          {alternative.content}
        </Alternative>
      })}
      <ButtonGroup>
        { index > 0 && <Button onPress={previousQuestion}>Previous</Button>}
        { canGoNext && <Button onPress={nextQuestion}>Next</Button>}
        { !canGoNext && <Button enabled={answers.length > 0} onPress={finishQuiz}>Finish</Button>}
      </ButtonGroup>
    </Container>
    </View>

  );
}
