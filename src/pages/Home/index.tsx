import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';

import { Container, Text, Title } from './styles';

export const Home: React.FC = () => {
  const navigation = useNavigation();

  async function navigateToQuiz(){
    navigation.navigate('Quiz');
  }

  return(
    <Container>
      <Title>My Quiz</Title>
      <Text textBreakStrategy='balanced'>
        You're going to have 10 minutes to answer 15 questions about computer
        science. You can't finish the quiz without answer at least 1 question.
      </Text>
      <Button onPress={navigateToQuiz}>Start</Button>
    </Container>
  )

}
