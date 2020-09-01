import { StyleSheet, View, Text, Image } from "react-native";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';



export default function HomeScreenListComponent(props: any): JSX.Element {
    const { props_extension, onPress } = props;
    return (
        <View style={styles.container}>
            <Card containerStyle={{ borderRadius: 8 }} >

                <View>
                    <Text style={{ fontSize: 20, color: '#888' }}> <Ionicons name="ios-home" size={20} color='black' /> {props_extension.unterkunft_name}</Text>
                    <TouchableOpacity onPress={onPress} style={styles.button}>
                        <Image style={styles.image} source={{ uri: props_extension.anbieter_profil_bild }} />
                        <View style={styles.text_box}>

                            <Text> <Ionicons name="ios-navigate" size={16} />  {props_extension.addresse}</Text>
                            <Text> <Ionicons name="ios-alert" size={16} /> {props_extension.frei_plaetze} places available</Text>
                            <Text> <Ionicons name="ios-pricetag" size={16} />  {props_extension.preis_pro_nacht} per person per night</Text>
                            <Text> <Ionicons name="ios-person" size={16} />  {props_extension.anbieter_name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </Card>

        </View>)
}



const styles = StyleSheet.create({
    container: {
        padding: 0,
        flex: 1,
        justifyContent: "center",

    },
    button: {
        padding: 5,
        margin: 5,
        flexDirection: 'row'

    }, image: {
        width: 50,
        height: 50,
        margin: 5,
        marginTop: 15

    }, text_box: {
        flexDirection: 'column',
        margin: 5,
        justifyContent: "space-evenly"
    }
})