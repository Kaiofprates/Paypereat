import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';
import MainTab from './src/navigators/MainTab';

function App() {


  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF'
    },
  };


  return (
    <NavigationContainer  theme={MyTheme}>
      <MainTab />
    </NavigationContainer>
  );
}

export default App;