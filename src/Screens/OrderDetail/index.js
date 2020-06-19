import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components';
import alfaceLg from '../../assets/Products/alfacelg.png';
import shoppingCart from '../../assets/Icons/Cart/shopping-cart.png';
import OrderDetailProduct from '../../Components/OrderDetailProduct';

const OrderBox = styled.View`
    marginTop:30px;
    width:90%;
    alignSelf:center;
`;

const OrderHeader = styled.View`
    alignItems:center;
    justifyContent:space-between;
    flexDirection: row;
`;
const OrderNumber = styled.Text`
    fontWeight:bold;
`;
const OrderDate = styled.Text``;
const DeliveredOrder = styled.Text`
    marginTop:10px;
    width:100%;
    color:#2AA952;
    textAlign:right;
`;

const OrderScroll = styled.ScrollView`
    width:100%;
    height:100px;
    backgroundColor:red;

`;

export default function ProductDetail() {
    return (
        <SafeAreaView >
            <OrderBox>
                <OrderHeader>
                    <OrderNumber>Ordem N° 1947034</OrderNumber>
                    <OrderDate>05-02-20 14:30</OrderDate>
                </OrderHeader>
                <OrderHeader>
                    <DeliveredOrder>Enviado</DeliveredOrder>
                </OrderHeader>
                <OrderScroll>
                <OrderDetailProduct />
            </OrderScroll>
            </OrderBox>
        </SafeAreaView>
    )
}