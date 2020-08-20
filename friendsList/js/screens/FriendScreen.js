import { Dimensions, StyleSheet, Text, Image, ScrollView } from "react-native";
import React, { Component } from "react";


export default class FriendScreen extends Component {
    render() {

        return (
            <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
                <Text fontSize={styles.titleText}>{this.props.route.params.friend.first}</Text>
                <Image style={styles.image} source={require('../../assets/favicon.png')} />
            </ScrollView>
        );
    }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    scrollView: {
        backgroundColor: '#fff'
    }
});