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

    <Text style={styles.title}> Cadastrar </Text>
    <TextInput
         style={styles.input}
        label='Nome'
        type="outlined"
        keyboardType="name-phone-pad"
      />
      <TextInput
      style={styles.input}
     label='Telefone'
     type="outlined"
     keyboardType="phone-pad"
   /><TextInput
   style={styles.input}
  label='Email'
  type="outlined"
  keyboardType="email-address"
/>
<TextInput
      style={styles.input}
     label='Senha'
     type="outlined"
     keyboardType="visible-password"
   />
   <TextInput
      style={styles.input}
     label='Confirme a senha'
     type="outlined"
     keyboardType="visible-password"
   />
   <TouchableOpacity style={styles.button}>
     <Text style={styles.text}>
       INCREVER-SE
     </Text>
   </TouchableOpacity>
  
    </SafeAreaView>
  )


}