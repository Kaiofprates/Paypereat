import React, {
  useState
} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import styles from './styles';
import { TextInput } from 'react-native-paper';


export default function Login({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>

    
   <TouchableOpacity style={styles.compra}>
     <Text style={styles.text}>
       Quero Comprar
     </Text>
   </TouchableOpacity>
      
   <TouchableOpacity style={styles.venda}>
     <Text style={styles.text}>
      Quero Vender
     </Text>
   </TouchableOpacity>
  
    </SafeAreaView>
  )


}