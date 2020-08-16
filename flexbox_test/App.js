import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box0} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box0: {
    flex: 1,
    backgroundColor: 'cyan'
  },
  box1: {
    flex: 2,
    backgroundColor: 'blue'
  },
  box2: {
    flex: 3,
    backgroundColor: 'yellow'
  },
});
