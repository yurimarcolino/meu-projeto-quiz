import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button'

import { Container, Text, Title } from './styles'

export const Home: React.FC = () => {
  const navigation = useNavigation();

  async function navigateToQuiz(){
    navigation.navigate('Quiz');
  }

  return(
    <Container>
      <Title>My Quiz</Title>
      <Text>You're going to have 10 minutes to answer 15 questions about computer science. </Text>
      <Button onPress={navigateToQuiz}>Start</Button>
    </Container>
  )

}
