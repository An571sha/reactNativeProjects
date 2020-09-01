import {Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MaterialIcons} from "@expo/vector-icons";
import * as Permissions from 'expo-permissions';
import {PermissionResponse} from "expo-permissions";

export interface IOfferData {
    name: string;
    address: string;
    price: string;
    placesFree: number;
}

export default function HomeScreen(): JSX.Element {

    const [offerData, setOfferData]: [{}, React.Dispatch<React.SetStateAction<{}>>] = useState({});
    const [location, setLocation]: [(Position | undefined), React.Dispatch<React.SetStateAction<Position | undefined>>] = React.useState<Position | undefined>();

    return (
        <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center'}}>
            <Text style={styles.logo}> Are you interested in providing an accommodation ? </Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Accommodation name"
                    placeholderTextColor="#003f5c"
                    onChangeText={name => setOfferData({name: name})}/>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Accommodation address"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setOfferData({address: text})}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Price per night"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setOfferData({price: text})}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Number of free places"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setOfferData({placesFree: text})}/>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setOfferData({email: text})}/>
            </View>

            <View style={styles.inputView}>
                <Text> Latitude: {location?.coords.latitude} </Text>
            </View>

            <View style={styles.inputView}>
                <Text> Longitude: {location?.coords.longitude} </Text>
            </View>

            <View style={styles.multilineInputView}>
                <TextInput
                    style={styles.inputText}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="place Description"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setOfferData({email: text})}/>
            </View>


            <TouchableOpacity onPress={() => get_current_location(setLocation)} style={styles.fab}>
                <MaterialIcons name="add-location" size={24} color="black"/>
            </TouchableOpacity>

        </ScrollView>
    )

}

function save_data_to_database() {

}

export const status: Promise<PermissionResponse> = Permissions.askAsync(Permissions.LOCATION);

const get_current_location = async (setLocation: React.Dispatch<React.SetStateAction<Position | undefined>>) => {
    await status.then(permission => {
        if (permission.status == 'granted') {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                    setLocation(position);
                },
                (err) => alert(err),
                {enableHighAccuracy: true, timeout: 8000, maximumAge: 10000}
            )

        } else {

            alert('no permission provided')
        }
    });
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logo: {
        fontWeight: "bold",
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        color: "orange",
        marginBottom: 20
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
    multilineInputView: {
        width: "80%",
        backgroundColor: "turquoise",
        borderRadius: 25,
        height: 80,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white",
        justifyContent: "center"
    },
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: 'orange',
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    }
});