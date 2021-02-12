import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Img } from '../../components/Image';
import { Alternative } from '../../components/Alternative';
import { Container, Title } from './styles';
import { Alternative as AlternativeModel, Question } from '../../models/question';
import { ButtonGroup } from '../../components/Button/styles';
import { Timer } from '../../components/Timer';
import { View } from 'react-native';

import { loadQuestions } from '../../services/questions.service';
import { useNavigation } from '@react-navigation/native';

interface SelectItem {
  [x: number] : number;
}

export const Quiz: React.FC = () => {
  const navigation = useNavigation();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<AlternativeModel[]>([]);
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
    })
  }
  //duvida nessa funcao sobre a relacao entre os index
  function handleSelectAnswer(alternative: AlternativeModel, alternativeIndex: number){
    const newAnswers = [...answers];

    newAnswers[index] = alternative;

    setAnswers(newAnswers);

    const answer =  {
      [index]: alternativeIndex
    }
    if (selectedAnswer) {
      setSelectedAnswer({...selectedAnswer, ...answer});
    }
  }

  if(!question){
    return(
      <View>Loading...</View>
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
