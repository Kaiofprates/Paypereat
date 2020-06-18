import React, {
  useState
} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

import styles from './styles';
import { TextInput } from 'react-native-paper';
import image from '../../assets/estore.png';

export default function Login({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <Image source={image} />

      <View>
        <TouchableOpacity style={styles.compra} onPress={() => {
          navigation.navigate('Home')
        }}>
          <Text style={styles.text}>
            Quero Comprar
     </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.venda}>
          <Text style={styles.text}>
            Quero Vender
     </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )


}