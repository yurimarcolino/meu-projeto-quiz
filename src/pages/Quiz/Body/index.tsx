import React, { useEffect, useState } from 'react';
import { Button } from '../../../components/Button';
import { Img } from '../../../components/Image';
import { Alternative } from '../../../components/Alternative';
import { Question } from '../../../models/question';
import { Alternative as AlternativeModel } from '../../../models/alternative';
import { ButtonGroup } from '../../../components/Button/styles';

import { loadQuestions } from '../../../services/questions.service';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { answerQuestion } from '../../../redux/quiz-slice/actions';
import { Container, Title } from './styles';
import { RootState } from '../../../redux/store';
import { Loading } from '../../Loading';

interface SelectItem {
  [x: number] : number;
}

export const Body: React.FC = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const answers = useSelector((state : RootState) => {
    console.log(state);
    return state.quiz.answers;
  });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<SelectItem>({});
  const [index, setIndex] = useState<number>(0);
  const [imageId, setImageId] = useState<number>(0);

  useEffect(() => {
    (async function(){
      const questions = await loadQuestions();
      setQuestions(questions);
    })()
  },[]);

  //Just to pictures according to IT
  useEffect(() => {
    if(imageId > 9){
      setImageId(0)
    }
  },[imageId])

  const question = questions[index];

  const canGoNext = index + 1 < questions.length;

  function nextQuestion() {
      setIndex(index + 1);
      setImageId(imageId + 1);
  }

  function previousQuestion(){
    setIndex(index - 1);
    setImageId(imageId - 1);
  }

  function finishQuiz(){
    navigation.navigate('Result');
  }

  function handleSelectAnswer(alternative: AlternativeModel, alternativeIndex: number){
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
      <Loading/>
    )
  }
  return(
    <Container>
      <Img source={{uri: `https://picsum.photos/id/${imageId}/200/300`}}/>
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
  );
}
