import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Alert, StyleSheet, Text, SafeAreaView, View, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Quote from './js/component/Quote';
import NewQuote from './js/component/NewQuote';


// function styledButton(props) {
//     let Button = null;

//     if (props.visible)
//         button = (
//             <View style={props.style} >

//                 <Button title={props.title} onPress={props.onPress} />

//             </View>
//         );
//     return button;
//}

export default class App extends Component {
    state = { index: 0, showNewQuoteScreen: false, quotes: [], showButtons: true };

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
        this.setState({ index: quotes.length - 1, showNewQuoteScreen: false, quotes, showButtons: true })
    };

    _deleteButton() {
        Alert.alert(
            'Zitat Wirklich löschen ?',
            'Zitat wird endgueltig geloescht',
            [
                { text: 'Abbrechen' },
                {
                    text: 'Löschen', onPress: () => {

                        let index = this.state.index;
                        let quotes = this.state.quotes;

                        quotes.splice(index, 1);
                        this._storeData(this.state.quotes);
                        this.setState({ index: quotes.length - 1, showNewQuoteScreen: false, quotes, showButtons: true })

                        if (this.state.quotes.length === 0) {

                            this.setState({ showButtons: false })
                        }
                    }
                }

            ]);
    }

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

        let next_button = null;
        let delete_button = null;

        const quote = this.state.quotes[index];

        if (this.state.showButtons === true) {

            next_button =

                <View style={{ margin: 5, marginTop: 10 }} visible={this.state.showButtons}>

                    <Button title="Naechster Zitat" onPress={() => this._displayNextQuote("Naechster Zitat")} />

                </View>

            delete_button =

                <View style={styles.deleteButton} visible={this.state.showButtons}>

                    <Button title="Delete Zitat" onPress={() => this._deleteButton()} />

                </View>

        }

        return (

            <SafeAreaView style={styles.container}>

                {delete_button}

                <View style={{ margin: 5 }}>

                    <NewQuote visible={this.state.showNewQuoteScreen} onSave={this._addQoute} />

                </View>

                {quote === undefined ? (<Text> keine Zitat </Text>) : (<Quote text={quote.text} author={quote.author} testprop="test" />)}

                <StatusBar style="auto" />

                <View style={{ margin: 5 }}>

                    <Button title="Vorheriger Zitat" onPress={() => this._displayNextQuote("Vorheriger Zitat")} />

                </View>

                <View style={styles.newButton}>

                    <Button title="Neu Zitat" onPress={() => this.setState({ showNewQuoteScreen: true })} />

                </View>


                <Text> {String(this.state.showButtons)} </Text>

                {next_button}


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
    },
    deleteButton: {
        position: 'absolute',
        left: 5,
        top: 35
    }
});
