import React from 'react';
import { View, Image, Text } from 'react-native';
import alface from '../../assets/Products/alface.png';
import styles from './styles';
import star from '../../assets/star.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Product({ navigation }) {

    const handleProductClick = () => {
        navigation.navigate('ProductDetail');
    }

    return (
        <TouchableOpacity style={styles.boxProducts} onPress={handleProductClick}>
            <Image source={alface} style={styles.imageRecomendations} />
            <View style={styles.containerProduct}>
                <View style={styles.contentIniProduct}>
                    <Text style={styles.productText}>Alfaçe Verde</Text>
                    <View style={styles.starProduct}>
                        <Image style={styles.productImage} source={star} />
                        <Image style={styles.productImage} source={star} />
                        <Image style={styles.productImage} source={star} />
                        <Image style={styles.productImage} source={star} />
                        <Image style={styles.productImage} source={star} />
                    </View>
                </View>
                <Text style={styles.productDescription}>O seu filho da puta tá olhando o quê aqui, vai capinar um lote</Text>
                <Text style={styles.productPrice}>R$ 2,50</Text>
            </View>

        </TouchableOpacity>
    );

}