import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import alface from '../../assets/Products/alface.png';
import Card from '../../Components/Card';
import Product from '../../Components/Product';

export default function Login({ navigation }) {

    const list = [
        {
            id: 1,
            name: 'Alface'
        },
        {
            id: 2,
            name: 'Cebola'
        },
        {
            id: 3,
            name: 'cenoura'
        }
    ]




    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.content}>
                <TextInput style={styles.search} placeholder="Pesquisar" />

                <View style={styles.scrollProducts}>
                    <ScrollView horizontal={false}>
                        <View style={styles.scrollArea}>
                            <Text style={styles.sugestionText}>Sugestão para você</Text>
                            <ScrollView
                                style={styles.scroll}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                decelerationRate="fast">
                                {
                                    list.map((e) => <Card key={e.id} name={e.name} />)
                                }
                            </ScrollView>
                        </View>
                    </ScrollView>
                    <Product/>
                </View>
            </View>

        </SafeAreaView>
    )


}