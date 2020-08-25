import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LoginButtons from '../components/LoginButtons';

export interface ISignUpData {
    email: string;
    password: string;
}

export default function LoginScreen(): JSX.Element {

    const [signUpData, setSignUpData] = useState({})
    const navigation = useNavigation();

    //for facebook login
    const [isLoggedin, setLoggedinStatus] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isImageLoading, setImageLoadStatus] = useState(false);


    return (
        <View style={styles.container}>
            <Text style={styles.logo}>MyCabin</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setSignUpData({ email: text })} />
            </View>

            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setSignUpData({ password: text })} />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}
            /*onPress={() => navigation.navigate('MainScreen')}*/>
                <Text style={styles.loginText} >LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>

            <LoginButtons />

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
    },
    inputView: {
        width: "80%",
        backgroundColor: "turquoise",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "orange",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    }
});