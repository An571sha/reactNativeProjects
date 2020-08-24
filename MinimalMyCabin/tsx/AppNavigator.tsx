import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';
import React from 'react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppNavigator(): JSX.Element {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="InfoScreen" component={InfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


function HomeStack() {

}