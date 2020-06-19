import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Checkout from '../Screens/Checkout';
import Cart from '../Screens/Cart';

const CheckoutStack = createStackNavigator();

export default () => {
    return (
        <CheckoutStack.Navigator>

            <CheckoutStack.Screen name="Cart" component={Cart} options={({ navigation }) => ({
                title: 'Sacola',
                headerTitleAlign: 'center',
                headerLeft: null,
            })} />

            <CheckoutStack.Screen name="Checkout" component={Checkout}  options={({ navigation }) => ({
              headerShown:true,
              headerTitleAlign: 'center',
            })} />

        </CheckoutStack.Navigator>
    );
}