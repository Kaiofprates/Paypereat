import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Text } from 'react-native';

import Login from './src/Screens/Login'
import Mapa from './src/Screens/Mapa'
import Register from './src/Screens/Register'
import Intro from './src/Screens/Intro'
import Home from './src/Screens/Home'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          primary: '#FFF'
        }
      }

      }>
      <Stack.Navigator screenOptions={
        {
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
        }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Mapa" component={Mapa} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
          title: 'Home',
          headerTitleAlign: 'center',
          headerLeft:null,
        })} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;