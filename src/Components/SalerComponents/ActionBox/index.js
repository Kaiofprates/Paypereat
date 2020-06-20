import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import addProduct from '../../../assets/addProduct.png';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const ActionBox = styled.TouchableOpacity`
    width:${Math.round((windowWidth/2)-30)}px;
    height:${Math.round((windowWidth/2)-60)}px;
    margin:10px;
    padding:5px;
    backgroundColor:#FFF;
    alignItems:center;
    justifyContent:center;
    flexDirection:column;
`;

const IconAction = styled.Image`
    width:60px;
    height:60px;
`;
const TextAction = styled.Text`
    fontSize:18px;
    marginTop:15px;
`;




export default function BoxAction(props) {

    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.navigate(props.screenNavigator);
    }

    return (
        <ActionBox style={{
            elevation: 10,
            shadowColor: 'red',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
        }} onPress={handleNavigation}>
            <IconAction source={addProduct}/>
            <TextAction>{props.title}</TextAction>
        </ActionBox>
    );
}