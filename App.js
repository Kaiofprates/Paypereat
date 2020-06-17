import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Login from './components/login'
import Mapa from './components/mapa'
import Register from './components/register'
import Intro from './components/intro/index'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Intro" component={Intro}/>
        <Stack.Screen name="Mapa" component={Mapa}/>
        <Stack.Screen name="Register" component={Register}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;