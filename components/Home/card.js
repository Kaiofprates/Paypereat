
import React from 'react';
import { Text,  View, Image } from 'react-native';
import styles from './styles';
import alface from '../../assets/Products/alface.png';

export default function Card(props){
    return(
        <View> 
        <View style={styles.boxRecomendations}>
        <Image source={alface} style={styles.imageRecomendations} />
        <Text style={styles.recomendationsText}>{props.name}</Text>
         </View>
        </View>
    );
}
