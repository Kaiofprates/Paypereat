import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import ProductCart from '../../Components/ProductCart';
import { ScrollView } from 'react-native-gesture-handler';
import DefaultButton from '../../Components/DefaultButton';
import styled from 'styled-components';
import { Button } from 'react-native-paper';


const TotalAmount = styled.View`
    width:85%;
    height:60px;
    flexDirection:row;
    alignItems:center;
    justifyContent:space-between;
`;  
const TextAmount = styled.Text`
    fontSize:15px;
    color:#9B9B9B;
`;
const TotalValue = styled.Text`
    fontSize:18px;
    fontWeight:bold;
`;

export default function Cart() {

    return (
        <SafeAreaView style={{
            marginTop: 15,
            alignItems: 'center'
        }}>
            <ScrollView horizontal={false} style={{
                width: '100%',
                height: '81%',
            }}>
                <ProductCart amount="3" />
                <ProductCart amount="4" />
                <ProductCart amount="5" />
                <ProductCart amount="1" />
                <ProductCart amount="2" />

            </ScrollView>
            <View style={{
                width:'100%',
                alignItems:'center'
            }}>
                <TotalAmount>
                    <TextAmount>Valor Total:</TextAmount>
                    <TotalValue>R$ 50,00</TotalValue>
                </TotalAmount>
              <DefaultButton width="90%" height="50px" name="FINALIZAR COMPRA" goToScreen="Checkout"/>
            </View>
            
        </SafeAreaView>
    )
}