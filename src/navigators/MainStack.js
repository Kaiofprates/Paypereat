import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import ProductDetail from '../Screens/ProductDetail';
import Product from '../Components/Product';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator>

            <MainStack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
                title: 'Home',
                headerTitleAlign: 'center',
                headerLeft: null,
            })} />

            <MainStack.Screen name="ProductDetail" component={ProductDetail} options={({ navigation }) => ({
                headerShown: false,
            })} />
        </MainStack.Navigator>
    );
}