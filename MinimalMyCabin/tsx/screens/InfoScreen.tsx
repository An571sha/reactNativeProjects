import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Card } from 'react-native-elements';
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';



export default function InfoScreen(): JSX.Element {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<ParamList, 'InfoScreen'>>();

    type ParamList = {
        InfoScreen: {
            title: any;
        };
    };

    useEffect(() => {
        navigation.setOptions({ title: route.params.title.item.unterkunft_name })
    });

    return (
        <ScrollView style={styles.container}>
            <MapView style={styles.mapStyle} region={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} />
            <Text style={styles.title}> <Ionicons name="md-map" size={20} /> - {route.params.title.item.addresse} </Text>
            <Card containerStyle={{ borderRadius: 8 }}>
                <Text style={styles.title}>{route.params.title.item.beschreibung_header} </Text>
                <Text style={styles.body}>{route.params.title.item.beschreibung_detail} </Text>
            </Card>
            <Card containerStyle={{ borderRadius: 8 }}>
                <Text style={styles.title}>{route.params.title.item.anbieter_name} </Text>
                <Text style={styles.body}>{route.params.title.item.anibieter_email} </Text>
            </Card>
        </ScrollView >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    title: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#34495e',
    },
    body: {
        margin: 10,
        fontSize: 15,
        color: 'black',
    },

    mapStyle: {
        width: Dimensions.get('window').width,
        height: 200,
    },
});
