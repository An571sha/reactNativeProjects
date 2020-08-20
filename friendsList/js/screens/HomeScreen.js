import { StyleSheet, FlatList, Text, View, Button } from "react-native";
import React, { Component } from "react";
import FreindsListItem from "../components/FreindsListItem";

const DATA = [
    { first: 'Animesh', last: 'Sharma', email: 'anim@gmail.com' },
    { first: 'Bruh', last: 'Really', email: 'bruh@gmail.com' },
    { first: 'John', last: 'Wick', email: 'wickJohn@gmail.com' },
    { first: 'Clark', last: 'Kent', email: 'kentClark@gmail.com' }
]


export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <Text fontSize={styles.titleText}>Home Screen</Text>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.email}
                    renderItem={
                        ({ item }) => (

                            <FreindsListItem friend={item}
                                onPress={() =>
                                    this.props.navigation.navigate('FriendScreen', {
                                        friend: item
                                    })} />)
                    }
                    ItemSeparatorComponent={() => <View style={styles.listSeperator} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
        paddingTop: 30
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    listSeperator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'orange',
        marginVertical: 5
    }
});