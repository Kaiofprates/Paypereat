import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import ProductCart from '../../Components/ProductCart';
import { ScrollView } from 'react-native-gesture-handler';

export default function Cart() {

    return (
        <SafeAreaView  style={{
            marginTop:70,
        }}>
            <ScrollView horizontal={false}>
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
            </ScrollView>

        </SafeAreaView>
    )
}