import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import alface from '../../assets/Products/alface.png';

export default function Login({ navigation }) {




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
                                <View style={styles.boxRecomendations}>
                                    <Image source={alface} style={styles.imageRecomendations} />
                                    <Text style={styles.recomendationsText}>Alfaçe Verde</Text>
                                </View>

                                <View style={styles.boxRecomendations}>
                                    <Image source={alface} style={styles.imageRecomendations} />
                                    <Text style={styles.recomendationsText}>Alfaçe Verde</Text>
                                </View>

                                <View style={styles.boxRecomendations}>
                                    <Image source={alface} style={styles.imageRecomendations} />
                                    <Text style={styles.recomendationsText}>Alfaçe Verde</Text>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.boxRecomendations}>
                                    <Image source={alface} style={styles.imageRecomendations} />
                                    <Text style={styles.recomendationsText}>Alfaçe Verde</Text>
                                </View>

                                <View style={styles.boxRecomendations}>
                                    <Image source={alface} style={styles.imageRecomendations} />
                                    <Text style={styles.recomendationsText}>Alfaçe Verde</Text>
                                </View>

                                <View style={styles.boxRecomendations}>
                                    <Image source={alface} style={styles.imageRecomendations} />
                                    <Text style={styles.recomendationsText}>Alfaçe Verde</Text>
                                </View>

                                <View style={styles.boxRecomendations}>
                                    <Image source={alface} style={styles.imageRecomendations} />
                                    <Text style={styles.recomendationsText}>Alfaçe Verde</Text>
                                </View>

                                <View style={styles.boxRecomendations}>
                                    <Image source={alface} style={styles.imageRecomendations} />
                                    <Text style={styles.recomendationsText}>Alfaçe Verde</Text>
                                </View>
                    </ScrollView>
                </View>
            </View>

        </SafeAreaView>
    )


}