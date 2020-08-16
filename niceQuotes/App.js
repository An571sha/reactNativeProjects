import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, SafeAreaView, View, Button } from 'react-native';
import Quote from './js/component/Quote';
import NewQuote from './js/component/NewQuote';
import * as SQLite from 'expo-sqlite';
import Firebase from './js/Firebase';

const database = SQLite.openDatabase('quotes.db');

export default class App extends Component {
    state = { index: 0, showNewQuoteScreen: false, quotes: [], showButtons: true };

    _saveQuoteToDB(text, author) {
        database.transaction(
            transaction => transaction.executeSql('INSERT INTO quotes (text, author) VALUES (?,?)', [text, author],
                (_, result) => (quotes[quotes.length - 1]).id = result.id)
        )

        // Firebase.db.collection('quotes').add({ text, author });
    }

    _removeQuoteFromDB(id) {
        database.transaction(
            transaction => transaction.executeSql('DELETE FROM quotes WHERE id  (text, author) VALUES (?,?)'
            ))

    }

    _retrieveData() {

        database.transaction(
            transaction => transaction.executeSql('SELECT * FROM quotes', [],
                (_, result) => this.setState({ quotes: result.rows._array }))
        )

    }

    _addQoute = (text, author) => {
        let quotes = this.state.quotes
        if (text && author) {
            quotes.push({ text, author });
            this._saveQuoteToDB(text, author);
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

                        this._removeQuoteFromDB(quotes[index].id)
                        quotes.splice(index, 1);
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
        Firebase.init();
        database.transaction(
            transaction => transaction.executeSql('CREATE TABLE IF NOT EXISTS quotes (id INTEGER PRIMARY KET NOT NULL, text TEXT, author TEXT')
        )
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
