import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';
import MainTab from './src/navigators/MainTab';
import SalerTab from './src/navigators/SalerTab';

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
      <SalerTab />
     {/*  <MainTab /> */}
    </NavigationContainer>
  );
}

export default App;