import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import InfoScreen from './screens/InfoScreen';
import { useColorScheme } from 'react-native-appearance'
import React from 'react';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();

export default function AppNavigator(): JSX.Element {
    const colorScheme = useColorScheme();

    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen
                    name="MainScreen"
                    component={MainScreen} options={{
                        title: 'Welcome',
                        headerStyle: { backgroundColor: 'turquoise' },
                    }} />
                <Stack.Screen name="InfoScreen" component={InfoScreen} options={{
                    title: 'Welcome',
                    headerStyle: { backgroundColor: 'turquoise' }
                }} />
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
