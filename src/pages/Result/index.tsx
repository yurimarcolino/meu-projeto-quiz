import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';

import { Button } from '../../components/Button';
import { RootStackParamList } from '../../routes/AppStack';

import { Text, AssertionText, Container, InfoContainer} from './styles';

type ResultProps = StackScreenProps<RootStackParamList, 'Result'>

export const Result: React.FC<ResultProps> = ({route, navigation}) => {
  const { answers } = route.params;

  const correctAnswers = answers?.filter(answer => answer.isCorrect)?.length;

  function navigateToHome(){
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
