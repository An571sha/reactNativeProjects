import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const data = [
  { text: 'Man lebt nur einmal', author: 'A. sharma' },
  { text: 'yolo', author: 'Einstein' },
  { text: 'Love you like i hate you', author: 'D. Belly' },
  { text: 'these hoes aint loyal', author: 'b. chris' }
]

export default class App extends Component {
  state = { index: 0 };

  render() {
    let index = this.state.index;

    const quote = data[index];
    let previousIndex = index - 1;
    let nextIndex = index + 1;

    if (nextIndex == data.length) {
      nextIndex = 0;
    }


    if (previousIndex < 0) {
      previousIndex = data.length - 1

    }

    return (
      <View style={styles.container}>
        <Text>
          {quote.text}
        </Text>
        <Text>
          -- {quote.author}
        </Text>
        <Text>
          previousindex - {previousIndex}
        </Text>
        <Text>
          index - {index}
        </Text>
        <Text>
          length - {data.length}
        </Text>
        <StatusBar style="auto" />
        <Button title="Naechster Zitat"
          onPress={() => this.setState({ index: nextIndex })} />

        <Button title="Vorheriger Zitat"
          onPress={() => this.setState({ index: previousIndex })} />
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
