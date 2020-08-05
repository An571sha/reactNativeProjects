import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Quote from './js/component/Quote';

const data = [
    {text: 'Man lebt nur einmal', author: 'A. sharma'},
    {text: 'yolo', author: 'Einstein'},
    {text: 'Love you like i hate you', author: 'D. Belly'},
    {text: 'these hoes aint loyal', author: 'b. chris'}
];

export default class App extends Component {
    state = {index: 0};

    render() {
        let index = this.state.index;

        const quote = data[index];
        let previousIndex = index - 1;
        let nextIndex = index + 1;

        if (nextIndex === data.length) {
            nextIndex = 0;
        }


        if (previousIndex < 0) {
            previousIndex = data.length - 1

        }

        return (
            <View style={styles.container}>

                <Quote text={quote.text} author={quote.author} testprop="test"/>
                <StatusBar style="auto"/>

                <View style={{margin: 5, marginTop: 10}}>

                    <Button title="Naechster Zitat" onPress={() => this.setState({index: nextIndex})}/>
                </View>

                <View style={{margin: 5}}>

                    <Button title="Vorheriger Zitat" onPress={() => this.setState({index: previousIndex})}/>

                </View>

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
});
