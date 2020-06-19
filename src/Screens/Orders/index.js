import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import styled from 'styled-components';
import { Button } from 'react-native-paper';


const ScrollOptions = styled.ScrollView``;
const ButtomOptions = styled.TouchableOpacity`
    width:100px;
    height:50px;
    backgroundColor:#FFF;
`;

export default function Orders() {

    return (
        <SafeAreaView >
            <ScrollOptions>
                <ButtomOptions>

                </ButtomOptions>
            </ScrollOptions>
        </SafeAreaView>
    )
}