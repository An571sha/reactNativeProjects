import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import * as Google from "expo-google-app-auth";
import * as Facebook from 'expo-facebook';

export default function LoginButtons(): JSX.Element {

    const navigation = useNavigation();

    type RouteParams = {
        titleText: string;
    }

    return (
        <View>

            <View style={{ padding: 10, marginBottom: 10 }}>

                <FontAwesome.Button name="google" style={styles.iconButton} onPress={() => signInWithGoogle().then((data) => {
                    navigation.navigate('MainScreen', { title: `Hello ${data}` })
                })
                }>
                    Sign in with Google
    </FontAwesome.Button>

            </View>

            <View style={{ padding: 10, marginBottom: 10 }}>

                <FontAwesome.Button name="facebook" style={styles.iconButton} onPress={() => signinWithFacebook().then((data) => {
                    navigation.navigate('MainScreen', { title: `Hello ${data}` })
                })
                }>
                    Sign in with Facebook
    </FontAwesome.Button>

            </View>
        </View>
    );

}

const IOS_CLIENT_ID = "278233748567-5sqgq05sb2ft3ndeb5pc61strl7b1tr0.apps.googleusercontent.com";
const ANDROID_CLIENT_ID = "278233748567-4a83qasgi3ugnhrrpe1bj4893lmg8f1t.apps.googleusercontent.com";
const FACEBOOK_APP_ID = "307438757143908";


const styles = StyleSheet.create(
    {
        iconButton: {
            width: 300,
            height: 50,
            justifyContent: 'center',
            backgroundColor: "orange"
        }
    });


const signInWithGoogle = async (): Promise<string | undefined> => {
    try {
        const result = await Google.logInAsync({
            iosClientId: IOS_CLIENT_ID,
            androidClientId: ANDROID_CLIENT_ID,
            scopes: ["profile", "email"]
        });

        if (result.type === "success") {
            console.log("succesfully logged in - | ", result.user.givenName);
            return result.user.givenName;

        } else {

            return "no access token available";

        }

    } catch (e) {
        console.log('Error with login', e);
        return 'Error with login';
    }
};


const signinWithFacebook = async (): Promise<String | undefined> => {
    try {

        await Facebook.initializeAsync(FACEBOOK_APP_ID)
        const result: Facebook.FacebookLoginResult = await Facebook.logInWithReadPermissionsAsync({ permissions: ['public_profile'] });

        if (result.type === 'success') {
            console.log('token' + result.token)
            // Get the user's name using Facebook's Graph API
            fetch(`https://graph.facebook.com/me?access_token=${result.token}&fields=id,name,email,picture.height(500)`)
                .then(response => {
                    response.json()
                    //  console.log('Response-' + response.json())
                })
                .then(data => {
                    console.log(data)
                    return data
                })
                .catch(e => console.log(e))

        } else {

            return "";
        }
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }
}