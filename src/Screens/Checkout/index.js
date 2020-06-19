import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import Address from '../../Components/Address';

    export default function Checkout() {

    return (
        <SafeAreaView style={{
            marginTop:10,
            alignItems: 'center',
        }}>
            <Address />
        </SafeAreaView>
    );
}