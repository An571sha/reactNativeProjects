import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import * as icon from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import Einstellung from './screens/SettingScreen';
import FriendScreen from './screens/FriendScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const tab1_title = 'Freunde';
const tab2_title = 'Einstellung';

export default function AppNavigator() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'orange'
                }}>
                <Tab.Screen name='Home'
                    component={HomeStack}
                    options={{
                        title: tab1_title,
                        tabBarIcon: ({
                            focused, size, color
                        }) => {
                            return _genTabBarIcon('home-outline',
                                'home', focused, size, color)
                        }
                    }} />
                <Tab.Screen name='Settings'
                    component={Einstellung}
                    options={{
                        title: tab2_title,
                        tabBarIcon: ({
                            focused, size, color
                        }) => {
                            return _genTabBarIcon('settings-outline',
                                'settings', focused, size, color)
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function _genTabBarIcon(outline_name, focused_name, focused, size, color) {
    const focused_icon = focused ? focused_name : outline_name;
    return <icon.MaterialCommunityIcons
        name={focused_icon}
        size={size}
        color={color} />
}

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FriendScreen" component={FriendScreen} options={({ route }) => {

                const which_friend = route.params.friend.name.first;

                return {
                    headerTitle: which_friend,
                };

            }} />
        </Stack.Navigator>
    )
}


