import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from '../../components/Button';
import { Text, AssertionText, Container, InfoContainer} from './styles';

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store';
import { clearAnswers } from '../../redux/quiz-slice/actions';

export const Result: React.FC = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state : RootState) => state.quiz.answers);
  const navigation = useNavigation();
  const correctAnswers = answers?.filter(answer => answer.isCorrect)?.length;

  function navigateToHome(){
    dispatch(clearAnswers());
    navigation.navigate('Home');
  }

  return(
    <Container>
      <InfoContainer>
        <Text>You got</Text>
        <AssertionText>{correctAnswers}</AssertionText>
        <Text>Questions</Text>
      </InfoContainer>
      <Button onPress={navigateToHome}>Restart</Button>
    </Container>
  );
}
