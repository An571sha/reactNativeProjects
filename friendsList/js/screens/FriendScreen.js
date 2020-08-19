import { StyleSheet, Text, View, Button } from "react-native";
import React, { Component } from "react";


export default class FriendScreen extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Text fontSize={styles.titleText}>some_text</Text>
                <Button title="Yo, Go Back" onPress={() => this.props.navigation.goBack()} />
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