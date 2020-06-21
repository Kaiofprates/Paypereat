import React from 'react';
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
const ProfileName = styled.Text`
    fontWeight:bold;
    fontSize:17px;
    marginBottom:5px;
`;
const ProfileEmail = styled.Text``;


export default function Profile() {

    return (
       <ProfileCard>
        <UserImage source={mia}/>
        <ProfileResume>
            <ProfileName>Kelviny Henrique</ProfileName>
            <ProfileEmail>kelvinyhenrique17@gmail.com</ProfileEmail>
        </ProfileResume>
       </ProfileCard>
    )
}