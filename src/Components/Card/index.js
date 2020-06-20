
import React from 'react';
import { Text,  View, Image, Dimensions } from 'react-native';
import styles from '../../Screens/Home/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const boxRecWidth = Math.round((windowWidth/2)-40);

const BoxRecomendations = styled.View`
    width: ${boxRecWidth+10}px;
    height: ${boxRecWidth}px;
    alignItems:center;
    justifyContent:center;
    marginLeft:15px;
    marginRight:15px;
    borderWidth:1px;
    borderColor:#EEEEEE;
    borderRadius:5px;

`;
const ProducImage = styled.Image`
    width: 100%;
    height:80%;
`;
const ProductName = styled.Text`
    color:#222222;
    fontSize:18px;
    margin:8px;
`;

export default function Card(props){

    return(
        <TouchableOpacity  style={{
            backgroundColor: "white",
            elevation: 3,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
        }} > 
        <BoxRecomendations>
        <ProducImage source={{ uri: props.img}}/>
        <ProductName>{props.name}</ProductName>
         </BoxRecomendations>
        </TouchableOpacity>
    );
}
