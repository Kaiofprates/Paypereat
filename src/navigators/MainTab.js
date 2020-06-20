import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Donation from '../Screens/Donation';
import CheckoutStack from './CheckoutStack';
import OrdersStack from './OrdersStack';
import Profile from '../Screens/Profile';
import { Image, Text } from 'react-native';
import MainStack from './MainStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator
        >

            <Tab.Screen name="Home" component={MainStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/Icons/TabHome/home.png')} style={{
                        width: 25,
                        height: 25
                    }} />
                )
            }} />

            <Tab.Screen name="Donation" component={Donation} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/Icons/TabDonation/donation.png')} style={{
                        width: 25,
                        height: 25
                    }} />
                )
            }} />
            <Tab.Screen name="Sacola" component={CheckoutStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/Icons/TabCart/cart.png')} style={{
                        width: 25,
                        height: 25
                    }} />
                )
            }} />
            <Tab.Screen name="Pedidos" component={OrdersStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/Icons/TabOrder/order.png')} style={{
                        width: 25,
                        height: 25
                    }} />
                )
            }} />

            <Tab.Screen name="Profile" component={ProfileStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/Icons/TabProfile/profile.png')} style={{
                        width: 25,
                        height: 25
                    }} />
                )
            }} />
        </Tab.Navigator>
    );
}