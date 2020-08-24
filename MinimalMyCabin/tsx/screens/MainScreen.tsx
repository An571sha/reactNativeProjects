import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import * as icon from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainScreen(): JSX.Element {
    return (

        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'orange'
            }}>
            <Tab.Screen name='Home'
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({
                        focused, size, color
                    }) => {
                        return (<icon.MaterialCommunityIcons
                            name={'home-outline'}
                            size={size}
                            color={color} />)
                    }
                }}
            />
            <Tab.Screen name='Settings'
                component={SettingsScreen}
                options={{
                    title: 'Setting',
                    tabBarIcon: ({
                        focused, size, color
                    }) => {
                        return (
                            <icon.MaterialCommunityIcons
                                name={'settings-outline'}
                                size={size}
                                color={color} />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}