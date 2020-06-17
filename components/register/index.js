import React, {
  useState
} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';

import styles from './styles';

export default function Login({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
         <Text style={styles.title}> Cadastrar </Text>
      <View>
        <TextInput
          title="Nome"
          style={styles.input}
          placeholder="Nome"
        />

        <TextInput
          title="Email"
          style={styles.input}
          placeholder="Nome"
        />

        <TextInput
          title="Telefone"
          style={styles.input}
          placeholder="Nome"
        />

        <TextInput
          title="Senha"
          style={styles.input}
          placeholder="Nome"
        />

        <TextInput
          title="Reinsira a Senha"
          style={styles.input}
          placeholder="Nome"
        />

      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>
          INCREVER-SE
     </Text>
      </TouchableOpacity>
      </View>
     

    </SafeAreaView>
  )


}