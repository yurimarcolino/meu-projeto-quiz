import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home';
import { Quiz } from '../screens/Quiz';
import { Result } from '../screens/Result';

import { Question } from '../models/question';

export type RootStackParamList = {
  Home: undefined,
  Quiz: {
    questions: Question[]
  }
  Result: undefined
}

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const AppStack = () => {
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
