import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home'
import { Quiz } from '../pages/Quiz';
import { Result } from '../pages/Result';

/*
To get params into a component

type ResultProps = StackScreenProps<RootStackParamList, 'Result'>
*/

export type RootStackParamList = {
  Home: undefined,
  Quiz: undefined,
  Result: undefined
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
