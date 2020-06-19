import React from 'react';
import {Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Checkout from '../Screens/Checkout';
import OrderDetail from '../Screens/OrderDetail';
import Orders from '../Screens/Orders';

const OrdersStack = createStackNavigator();

export default () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Pedidos" component={Orders} options={({ navigation }) => ({
                title: 'Pedidos',
                headerTitleAlign: 'center',
                headerRight: () => (
                     <Button title="Order Detail" onPress={() => {
                        navigation.navigate('OrderDetail');
                     }}/>
                )
            })} />
            <OrdersStack.Screen name="OrderDetail" component={OrderDetail} options={({ navigation }) => ({
                title: 'Order Detail',
                headerTitleAlign: 'center',
                headerLeft: null,
            })} />
        </OrdersStack.Navigator>
    );
}