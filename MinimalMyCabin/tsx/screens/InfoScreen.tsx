import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Card} from 'react-native-elements';
import MapView, {Marker} from 'react-native-maps';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';

export default function InfoScreen(): JSX.Element {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<ParamList, 'InfoScreen'>>();

    type ParamList = {
        InfoScreen: {
            title: any;
        };
    };

    const {item} = route.params.title;

    let markers: any = [
        {
            latitude: item.latitude,
            longitude: item.longitude,
            title: item.unterkunft_name,
            subtitle: item.addresse
        }
    ];

    useEffect(() => {
        navigation.setOptions({title: route.params.title.item.unterkunft_name})
    });

    return (
        <ScrollView style={styles.container}>
            <MapView style={styles.mapStyle} region={{
                latitude: item.latitude,
                longitude: item.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}>
                <Marker coordinate={{latitude: item.latitude, longitude: item.longitude}}
                        pinColor={"orange"}
                        title={item.unterkunft_name}/>
            </MapView>
            <Text style={styles.title}> <Ionicons name="md-map" size={20}/> - {item.addresse} </Text>
            <Text style={styles.title}> <MaterialIcons name="stars" size={20}/> Rating - {item.bewertung} </Text>
            <Card containerStyle={{borderRadius: 8}}>
                <Text style={styles.title}>{item.beschreibung_header} </Text>
                <Text style={styles.body}>{item.beschreibung_detail} </Text>
            </Card>
            <Card containerStyle={{borderRadius: 8}}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.image} source={{uri: item.anbieter_profil_bild}}/>
                    <View>
                        <Text style={styles.titleName}>{item.anbieter_name} </Text>
                        <Text style={styles.bodyEmail}>{item.anibieter_email} </Text>
                    </View>
                </View>
            </Card>
        </ScrollView>
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
    titleName: {
        margin: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#34495e',
    },
    body: {
        margin: 10,
        fontSize: 15,
        color: 'black',
    },
    bodyEmail: {
        margin: 5,
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black',
    }, image: {
        width: 25,
        height: 25,
        margin: 5,
        marginTop: 10
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: 200,
    },
});
