import { StyleSheet, Text, View, Button } from "react-native";
import React, { Component } from "react";

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text fontSize={styles.titleText}>Home Screen</Text>
                <Button title='zu friend Screen' onPress={() => this.props.navigation.navigate('FriendScreen', {
                    friend: 'Alice',
                })
                } />
            </View>
        );
    }
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