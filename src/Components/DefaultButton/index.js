import React from 'react';
import styled from 'styled-components';


export default function DefaultButton(props) {
    const btnName = props.name;
    const ProductText = styled.Text`
    color:#FFF;
`;
    const ProductAddButton = styled.TouchableOpacity`
    width:${props.width};
    marginTop:8px;
    height:${props.height};
    flexDirection:row;
    borderRadius:10px;
    backgroundColor:#2BB673;
    alignItems:center;
    justifyContent:center;

`;
    const handleCheckout = () => {
        alert('Teste');
    }

    return (
        <ProductAddButton>
            <ProductText>{btnName}</ProductText>
        </ProductAddButton>
    );
}