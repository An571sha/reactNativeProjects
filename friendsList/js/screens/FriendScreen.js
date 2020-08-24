import { Dimensions, StyleSheet, Text, Image, ScrollView } from "react-native";
import React, { Component } from "react";


export default class FriendScreen extends Component {
    render() {
        const friend = this.props.route.params.friend;
        return (
            <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
                <Text fontSize={styles.titleText}>{friend.name.first}</Text>
                <Image style={styles.image} source={{ uri: friend.picture.large }} />
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