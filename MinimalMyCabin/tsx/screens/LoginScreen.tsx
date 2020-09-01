import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import LoginComponent from '../components/LoginComponent';


export interface ISignUpData {
    email: string;
    password: string;
}

export default function LoginScreen(): JSX.Element {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>MyCabin</Text>
            <LoginComponent/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "orange",
        marginBottom: 40
    }
});