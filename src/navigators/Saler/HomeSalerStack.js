import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../Screens/Saler/Home';
import AddProduct from '../../Screens/Saler/AddProduct';
//import Product from '../Components/Product';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator>

            <MainStack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
                title: 'Home',
                headerTitleAlign: 'center',
                headerLeft: null,
            })} />

           <MainStack.Screen name="AddProduct" component={AddProduct} options={({ navigation }) => ({
                    title: 'Cadastrar Produto',
                    headerTitleAlign: 'center',
            })} /> 
        </MainStack.Navigator>
    );
}