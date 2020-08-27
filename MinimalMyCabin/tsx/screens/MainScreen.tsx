import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import OfferScreen from './OfferScreen';
import * as icon from '@expo/vector-icons';



export default function MainScreen(): JSX.Element {
    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();
    const route = useRoute<RouteProp<ParamList, 'MainScreen'>>();

    type ParamList = {
        MainScreen: {
            title: string;
        };
    };

    useEffect(() => navigation.setOptions({
        title: route.params.title
    }));

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'orange'
            }}>
            <Tab.Screen name='Home'
                component={HomeScreen}
                options={{
                    title: 'Search Accomodation',
                    tabBarIcon: ({
                        focused, size, color
                    }) => {
                        return (<icon.MaterialCommunityIcons
                            name={'campfire'}
                            size={size}
                            color={color} />)
                    }
                }}
            />
            <Tab.Screen name='Offer'
                component={OfferScreen}
                options={{
                    title: 'Offer Accomodation',
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
                    title: 'Settings',
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


