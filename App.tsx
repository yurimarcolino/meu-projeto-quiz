import React from 'react';
import { StatusBar } from 'react-native'
import { AppStack } from './src/routes/AppStack';

import { Provider } from 'react-redux'
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar hidden={true}/>
      <AppStack />
    </Provider>

  );
}
