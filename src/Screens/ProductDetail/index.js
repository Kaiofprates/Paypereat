import React, { useState } from 'react';
import { SafeAreaView, Picker } from 'react-native';
import styled from 'styled-components';
import alfaceLg from '../../assets/Products/alfacelg.png';
import shoppingCart from '../../assets/Icons/Cart/shopping-cart.png';


const ProductArea = styled.View`
    flexDirection:column;
    justifyContent:center;
    alignItems:center;
`;
const ProductImage = styled.Image`
  width:100%;
  height:300px;
`;
const ProductTitle = styled.View`
    width:100%;
    height:150px;
    alignItems:center;
    justifyContent:center;
`;
const ProductTitleText = styled.Text`
    color:#000;
    fontSize:24px;
    fontWeight:bold;
    `;

const ProductDescription = styled.Text`
    fontSize:17px;
    textAlign:center;
    marginTop:10px;
`;
const ProductItems = styled.View`
    width:100%;
    height:100px;
    flexDirection:row;
    justifyContent:space-around;
    alignItems:center;
`;
const ProductPrice = styled.Text`
    fontSize:20px;
`;
const ProductSelect =styled.View`
    borderWidth:1px;
    borderColor:#828282;
    width:37%;
    height:46px;
    marginLeft:10px;
    borderRadius:6px;
    alignItems:center;
    justifyContent:center;
`;
const ProductAddButton = styled.TouchableOpacity`
    width:70%;
    marginTop:70px;
    height:55px;
    flexDirection:row;
    borderRadius:10px;
    backgroundColor:#2BB673;
    alignItems:center;
    justifyContent:center;
`;
const TextButtonProduct = styled.Text`
    color:#FFF;
    fontSize:15px;
    fontWeight:bold;
`;
const IconProduct = styled.Image`
    width:20px;
    height:20px;
    marginRight:15px
`;

export default function ProductDetail() {
    const [selectedValue, setSelectedValue] = useState("0");
    return (
        <SafeAreaView >
            <ProductArea>
                <ProductImage source={alfaceLg} />
                <ProductTitle>
                    <ProductTitleText>Alfaçe</ProductTitleText>
                    <ProductDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry</ProductDescription>
                </ProductTitle>

                <ProductItems>
                    <ProductPrice>R$ 5,00 / Un</ProductPrice>
                    <ProductSelect>
                        <Picker
                        selectedValue={selectedValue}
                        style={{ height: 46, width: 150}}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Quantidade" value="0" />
                        <Picker.Item label="JavaScript" value="js2" />
                        <Picker.Item label="Seu cú" value="cu" />
                        <Picker.Item label="" value="js" />
                    </Picker>
                    </ProductSelect>
                    
                </ProductItems>

                <ProductAddButton>
                <IconProduct source={shoppingCart}/>
                    <TextButtonProduct>ADICIONAR A SACOLA</TextButtonProduct>
                </ProductAddButton>
            </ProductArea>
        </SafeAreaView>
    )
}