import React, { Component, Fragment} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Quote extends Component {
    render() {
        const { text, author } = this.props;
        return <View style = {textAndAuthStyles.container}>
            <Text style={textAndAuthStyles.text}> {text} </Text>
            <Text style={textAndAuthStyles.author}> -- {author} </Text>
        </View>
    }
}

const textAndAuthStyles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontStyle: 'italic',
        margin: 10,
    },
    author: {
       fontSize: 20,
        margin: 10,
        textAlign: 'center'

    },
    container: {
        borderWidth: 1,
        padding: 20,
    }
});