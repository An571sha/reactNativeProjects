import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {MaterialIcons} from "@expo/vector-icons";


export interface IOfferData {
    name: string;
    address: string;
    price: string;
    placesFree: number;
}

export default function HomeScreen(): JSX.Element {
    const [offerData, setOfferData] = useState({});
/*  const [address, setAddress]: [string, React.Dispatch<React.SetStateAction<string>>] = useState("");
    const [price, setPrice]: [string, React.Dispatch<React.SetStateAction<string>>] = useState("");
    const [placesFree, setPlacesFree]: [number, React.Dispatch<React.SetStateAction<number>>]  = useState(0);
*/
    return (
        <View style={styles.container}>
            <Text style={styles.logo}> Are you interested in providing an accommodation ? </Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Accommodation name"
                    placeholderTextColor="#003f5c"
                    onChangeText={name => setOfferData({ name: name })}/>
            </View>

            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Accommodation address"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setOfferData({ address: text })}/>
            </View>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Price per night"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setOfferData({ price: text })}/>
            </View>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Number of free places"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setOfferData({ placesFree: text })}/>
            </View>

            <TouchableOpacity onPress={() => get_current_location()} style={styles.fab}>
                <MaterialIcons name="add-location" size={24} color="black" />
            </TouchableOpacity>

        </View>
    )

}

function save_data_in_sql(){

}

const get_current_location = () => {
    navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err),
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 10000 }
    )};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        color: "orange",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "turquoise",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: 'orange',
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    }
});