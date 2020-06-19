import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Checkout from '../Screens/Checkout';
import Cart from '../Screens/Cart';
import Orders from '../Screens/Orders';

const OrdersStack = createStackNavigator();

export default () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Pedidos" component={Orders} options={({ navigation }) => ({
                title: 'Pedidos',
                headerTitleAlign: 'center',
                headerLeft: null,
            })} />
        </OrdersStack.Navigator>
    );
}