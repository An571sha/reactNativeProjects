import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function HomeScreen(){
    return (
        <View style={styles.container}>
            <Text fontSize={styles.titleText}>Home Screen</Text>
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
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});