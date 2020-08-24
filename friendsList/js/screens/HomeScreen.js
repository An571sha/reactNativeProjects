import { Alert, ActivityIndicator, StyleSheet, FlatList, Text, View } from "react-native";
import React, { Component } from "react";
import FreindsListItem from "../components/FreindsListItem";

const DATA = [
    { first: 'Animesh', last: 'Sharma', email: 'anim@gmail.com' },
    { first: 'Bruh', last: 'Really', email: 'bruh@gmail.com' },
    { first: 'John', last: 'Wick', email: 'wickJohn@gmail.com' },
    { first: 'Clark', last: 'Kent', email: 'kentClark@gmail.com' }
]

async function API() {
    return fetch('https://randomuser.me/api/?results=20');
}

export default class HomeScreen extends Component {
    state = { data: [], isLoading: true };

    static navigationOptions = {
        header: null
    }


    _fetchData = async () => {
        try {
            const response = await API();
            const resposeJSON = await response.json();
            console.log(resposeJSON.results);
            this.setState({ data: resposeJSON.results, isLoading: false })

        } catch (e) {

            alert("Fetching Data Failed");
            this.setState({ isLoading: false })
            console.log(e);

        }
    }

    _refresh = () => {
        this.setState({ isLoading: true })
        this._fetchData();
    }

    componentDidMount() {
        this._fetchData()
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View styles={styles.container}>
                    <ActivityIndicator size='large' color='orange' />
                </View>

            );
        }
        return (
            <View style={styles.container}>
                <Text fontSize={styles.titleText}>Home Screen</Text>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.email}
                    renderItem={
                        ({ item }) => (

                            <FreindsListItem friend={item}
                                onPress={() =>
                                    this.props.navigation.navigate('FriendScreen', {
                                        friend: item
                                    })} />)
                    }
                    onRefresh={this._refresh}
                    refreshing={this.state.isLoading}
                    ItemSeparatorComponent={() => <View style={styles.listSeperator} />}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptlyListIndicator}> No data available </Text>
                    )}
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
        paddingTop: 30,
        justifyContent: "center",
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    emptlyListIndicator: {
        textAlign: "center",
        padding: 100,
        fontSize: 20,
    },
    listSeperator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'orange',
        marginVertical: 5
    }
});