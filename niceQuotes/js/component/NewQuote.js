import React, { Component } from 'react';
import { Button, TextInput, Modal, View, StyleSheet } from 'react-native';

export default class NewQuote extends Component {
    state = { content: null, author: null }
    render() {

        if (this.props.visible === false) {
            return null;
        }

        return (
            <Modal visible={this.props.visible} onRequestClose={() => {
                this.props.onSave(null, null);
                this.setState({ content: null, author: null });
            }} animationType="slide" >

                <View style={styles.container}>

                    <TextInput style=
                        {[styles.input, { height: 150 }]}
                        multiline={true}
                        placeholder="Inhalt"
                        onChangeText={text => this.setState({ content: text })} />

                    <TextInput
                        style={styles.input}
                        placeholder="Autor"
                        onChangeText={text => this.setState({ author: text })} />

                    <Button title="save" onPress={() => {
                        this.props.onSave(this.state.content, this.state.author);
                        this.setState({ content: null, author: null });
                    }
                    } />
                </View>
            </Modal>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40

    }, input: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 4,
        width: '80%',
        padding: 5,
        fontSize: 20,
        marginBottom: 5
    }
});