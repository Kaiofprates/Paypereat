import React from 'react';
import styled from 'styled-components';

const AddressArea = styled.View`
    width:90%;
    height:100px;
    backgroundColor:red;
    borderRadius:10px;
`;
const AddressAreaTop = styled.View`
    justifyContent:space-between;

`;
const AddressList = styled.Text``;
const NameUserAddress = styled.Text``;


export default function Address() {

    return (

        <AddressArea>
            <AddressAreaTop>
            <NameUserAddress>Kelviny Henrique</NameUserAddress>
            </AddressAreaTop>
            <AddressList></AddressList>
        </AddressArea>
    );

}