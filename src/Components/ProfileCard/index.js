import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import styled from 'styled-components';
import mia from '../../assets/user.png';


const ProfileCard = styled.View`
    width:90%;
    marginTop:30px;
    alignSelf:center;
    alignItems:center;
    flexDirection:row;

`;

const UserImage = styled.Image`
    width:70px;
    height:70px;
    borderRadius:35px;
    marginRight:20px;
`;
const ProfileResume = styled.View``;
const ProfileName = styled.Text``;
const ProfileEmail = styled.Text``;


export default function Profile() {

    return (
       <ProfileCard>
        <UserImage source={mia}/>
        <ProfileResume>
            <ProfileName>Marina Ruy</ProfileName>
            <ProfileEmail>marinamarina2015@gmail.com</ProfileEmail>
        </ProfileResume>
       </ProfileCard>
    )
}