
import React from 'react';
import { Text,  View, Image } from 'react-native';
import styles from '../../Screens/Home/styles';
import alface from '../../assets/Products/alface.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card(props){

    return(
        <TouchableOpacity> 
        <View style={styles.boxRecomendations}>
        <Image source={{ uri: props.img}} style={styles.imageRecomendations} />
        <Text style={styles.recomendationsText}>{props.name}</Text>
         </View>
        </TouchableOpacity>
    );
}
