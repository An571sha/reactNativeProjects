import { StyleSheet, View, Text, Image } from "react-native";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function (props) {
    const { friend, onPress } = props;
    return (<View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image style={styles.image} source={require('../../assets/favicon.png')} />
            <View style={styles.text_box}>
                <Text>{friend.first}{' '}{friend.last}</Text>
                <Text>{friend.email}</Text>
            </View>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
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
        marginRight: 5,
        borderRadius: 25

    }, text_box: {
        flexDirection: 'column',
        margin: 5,
        justifyContent: "space-evenly"
    }
})