import React from 'react';
import { View, Image, Text } from 'react-native';
import alface from '../../assets/Products/alface.png';
import styles from '../../Screens/Home/styles';

export default function Product({ navigation }) {


    return (
        <View style={styles.boxProducts}>
            <Image source={alface} style={styles.imageRecomendations} />
            <Text style={styles.recomendationsText}>Alfaçe Verde</Text>
        </View>
    );

}