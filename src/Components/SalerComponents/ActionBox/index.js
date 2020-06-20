import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import addProduct from '../../../assets/addProduct.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const ActionBox = styled.TouchableOpacity`
    width:${Math.round((windowWidth/2)-30)}px;
    height:${Math.round((windowWidth/2)-60)}px;
    margin:10px;
    backgroundColor:#FFF;
    alignItems:center;
    justifyContent:center;
    flexDirection:column;
`;

const IconAction = styled.Image`
`;
const TextAction = styled.Text`
    fontSize:18px;
`;




export default function BoxAction() {
    return (
        <ActionBox style={{
            elevation: 10,
            shadowColor: 'red',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
        }}>
            <IconAction source={addProduct}/>
            <TextAction>Cadastrar Produto</TextAction>
        </ActionBox>
    );
}