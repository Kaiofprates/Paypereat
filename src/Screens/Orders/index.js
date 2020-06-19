import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import styled from 'styled-components';


const ButtonsOptions = styled.View`
    flexDirection:row;
    width:100%;
    height:60px;
    alignItems:center;
    justifyContent:space-around;

`;
const ButtomOptions = styled.TouchableOpacity`
    width:25%;
    height:30px;
    backgroundColor:#000;
    borderRadius:20px;
`;

export default function Orders() {

    return (
        <SafeAreaView >
            <ButtonsOptions>
                <ButtomOptions>

                </ButtomOptions>
                <ButtomOptions>

                </ButtomOptions>
                <ButtomOptions>

                </ButtomOptions>
            </ButtonsOptions>
        </SafeAreaView>
    )
}