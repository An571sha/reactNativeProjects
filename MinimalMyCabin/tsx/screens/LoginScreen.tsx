import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useLinkProps, NavigationContainer, useNavigation } from '@react-navigation/native';
import * as Google from "expo-google-app-auth";


export interface ISignUpData {
    email: string;
    password: string;
}

const IOS_CLIENT_ID = "278233748567-5sqgq05sb2ft3ndeb5pc61strl7b1tr0.apps.googleusercontent.com";
const ANDROID_CLIENT_ID = "278233748567-4a83qasgi3ugnhrrpe1bj4893lmg8f1t.apps.googleusercontent.com";

export default function LoginScreen(): JSX.Element {

    const [signUpData, setSignUpData] = useState({})
    const navigation = useNavigation();

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
                onPress={() => signInWithGoogle()}
            /*onPress={() => navigation.navigate('MainScreen')}*/>
                <Text style={styles.loginText} >LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>

        </View>
    );
}

const signInWithGoogle = async () => {
    try {
        const result = await Google.logInAsync({
            iosClientId: IOS_CLIENT_ID,
            androidClientId: ANDROID_CLIENT_ID,
            scopes: ["profile", "email"]
        });

        if (result.type === "success") {
            console.log("LoginScreen.js.js 21 | ", result.user.givenName);

            return result.accessToken;

        } else {
            return { cancelled: true };
        }
    } catch (e) {
        console.log('LoginScreen.js.js 30 | Error with login', e);
        return { error: true };
    }
};


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