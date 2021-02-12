import React from 'react';
import { StatusBar } from 'react-native'
import { AppStack } from './src/routes/AppStack';

export default function App() {
  return (
    <>
      <StatusBar hidden={true}/>
      <AppStack />
    </>

  );
}
