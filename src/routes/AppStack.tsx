import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home'
import { Quiz } from '../pages/Quiz';
import { Result } from '../pages/Result';

import { Alternative, Question } from '../models/question';

export type RootStackParamList = {
  Home: undefined,
  Quiz: undefined,
  Result: {
    answers: Alternative[]
  }
}

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const AppStack: React.FC = () => {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false}}>
        <Screen name="Home" component={Home}></Screen>
        <Screen name="Quiz" component={Quiz}></Screen>
        <Screen name="Result" component={Result}></Screen>
      </Navigator>
    </NavigationContainer>
)
}
