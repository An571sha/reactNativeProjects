import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Quote from './js/component/Quote';
import NewQuote from './js/component/NewQuote';

const data = [
    { text: 'Man lebt nur einmal', author: 'A. sharma' },
    { text: 'yolo', author: 'Einstein' },
    { text: 'Love you like i hate you', author: 'D. Belly' },
    { text: 'these hoes aint loyal', author: 'b. chris' }
];

export default class App extends Component {
    state = { index: 0, showNewQuoteScreen: false, quotes: data };

    _storeData(quotes) {
        AsyncStorage.setItem('QUOTES', JSON.stringify(quotes));
    }

    _retrieveData = async () => {

        let value = await AsyncStorage.getItem('QUOTES');
        if (value != null) {
            value = JSON.parse(value);
            this.setState({ quotes: value })
        }
    }

    _addQoute = (text, author) => {
        let quotes = this.state.quotes
        if (text && author) {
            quotes.push({ text, author });
            this._storeData(this.state.quotes);
        }
        this.setState({ index: quotes.length - 1, showNewQuoteScreen: false, quotes })
    };

    _displayNextQuote(buttontype) {
        let index = this.state.index;
        let previousIndex = index - 1;
        let nextIndex = index + 1;

        if (nextIndex === this.state.quotes.length) {
            nextIndex = 0;
        }


        if (previousIndex < 0) {

            previousIndex = this.state.quotes.length - 1

        }

        if (buttontype == 'Vorheriger Zitat') {

            this.setState({ index: previousIndex });

        } else {

            this.setState({ index: nextIndex });
        }


    }

    componentDidMount() {

        this._retrieveData();
    }

    render() {
        let index = this.state.index;

        const quote = this.state.quotes[index];

        return (
            <SafeAreaView style={styles.container}>

                <View style={{ margin: 5 }}>

                    <NewQuote visible={this.state.showNewQuoteScreen} onSave={this._addQoute} />

                </View>

                <Quote text={quote.text} author={quote.author} testprop="test" />

                <StatusBar style="auto" />

                <View style={{ margin: 5 }}>

                    <Button title="Vorheriger Zitat" onPress={() => this._displayNextQuote("Vorheriger Zitat")} />

                </View>

                <View style={{ margin: 5, marginTop: 10 }}>

                    <Button title="Naechster Zitat" onPress={() => this._displayNextQuote("Naechster Zitat")} />

                </View>

                <View style={styles.newButton}>

                    <Button title="Neu Zitat" onPress={() => this.setState({ showNewQuoteScreen: true })} />

                </View>

            </SafeAreaView>
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

    newButton: {
        position: 'absolute',
        right: 5,
        top: 35
    }
});
