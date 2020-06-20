import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import Orders from '../../../Components/SalerComponents/Orders';
import styled from 'styled-components';


const BoxDashoard = styled.View`
    width:100%;
    flexDirection:column;
`;
const LastOrdersScroll = styled.ScrollView`
`;
const TextLastOrders = styled.Text`
    marginLeft:20px;
    marginTop:20px;
    fontSize:15px;
`;


export default function HomeScreen() {

    return (
        <SafeAreaView>
            
        <BoxDashoard>
            <TextLastOrders>Últimos Pedidos</TextLastOrders>
            <LastOrdersScroll horizontal={true}>  
                <Orders/><Orders/><Orders/>
            </LastOrdersScroll>
            
        </BoxDashoard>


        </SafeAreaView>
    )
}