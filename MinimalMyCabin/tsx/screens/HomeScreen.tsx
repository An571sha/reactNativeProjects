import {ActivityIndicator, FlatList, StyleSheet, Text, View, AsyncStorage, Alert, BackHandler} from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import mockJsonData from '../../assets/mockData/MOCK_DATA.json';
import HomeScreenListComponent from '../components/HomeScreenListComponent';
import { useNavigation } from '@react-navigation/native';
import { HeaderTitle } from '@react-navigation/stack';


const ACCESS_TOKEN = "mock_data_key";


export default function HomeScreen(): JSX.Element {
    const navigation = useNavigation();
    const [jsonData, setJsonData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [realm, setRealm] = useState();


    useEffect(() => {

        // _load_json_from_storage(setJsonData,setIsLoading)
       setJsonData(mockJsonData);
       setIsLoading(false);

        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to go Log out?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();

    });

    if (isLoading) {

        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='orange' />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={{ color: '#888', fontSize: 18, marginLeft: 80 }}>
                A list of all places you might like !
                </Text>
            <FlatList
                data={jsonData}
                keyExtractor={item => item.id.toString()}
                renderItem={
                    ({ item }) => <HomeScreenListComponent props_extension={item}
                                                           onPress={() => navigation.navigate('InfoScreen', { title: { item } })} />}

                // Performance settings
                removeClippedSubviews={false} // Unmount components when outside of window
                initialNumToRender={10} // Reduce initial render amount
                maxToRenderPerBatch={10} // Reduce number in each render batch
                updateCellsBatchingPeriod={100} // Increase time between renders
                windowSize={10} // Reduce the window size
            />
        </View>
    )
}

function memoizedValue(item: any, jsonData: undefined) {
    return useMemo(() => render_list_item(item), jsonData)

}

function render_list_item(item: any) {
    return <HomeScreenListComponent props_extension={item} />
}


async function _load_json_from_storage(
    setJsonData: (value: React.SetStateAction<undefined>) => void,
    setIsLoading: (value: React.SetStateAction<boolean>) => void): Promise<void> {

    try {
        await AsyncStorage.getItem(ACCESS_TOKEN).then(result => {
            if (result !== null) {
                // We have data!!
                setJsonData(JSON.parse(result));
                setIsLoading(false)
            } else {
                console.log('no values found');
            }
        });

    } catch (error) {
        console.log(error);
    }
}

/*const mockDataScheme: Realm.ObjectSchema = {
    name: 'mockDataScheme',
    properties: {
        id: 'int',
        unterkunft_name: 'string',
        anbieter_name: 'string',
        anibieter_email:    'string',
        anbieter_profil_bild:  'string',
        addresse:  'string',
        frei_plaetze:  'int',
        latitude:  'float',
        longitude:  'float',
        preis_pro_nacht:  'string',
        beschreibung_header:  'string',
        beschreibung_detail:  'string',
        bewertung: 'int'
    }
}*/

/*const useRealm = (schema:Realm.ObjectSchema ) => {
    Realm.open({
        schema: [schema]
    }).then(realm => {
        for(let i = 0; i < mockJsonData.length; i++) {
            let obj = mockJsonData[i];
            console.log(obj.id);
            realm.write(() => {
                realm.create('mockDataScheme',
                    {id: obj.id,
                        unterkunft_name: obj.anbieter_name,
                        anbieter_name: obj.anbieter_name,
                        anibieter_email:   obj.anibieter_email,
                        anbieter_profil_bild:  obj.anbieter_profil_bild,
                        addresse:  obj.addresse,
                        frei_plaetze:  obj.frei_plaetze,
                        latitude:  obj.latitude,
                        longitude:  obj.longitude,
                        preis_pro_nacht:  obj.preis_pro_nacht,
                        beschreibung_header:  obj.beschreibung_header,
                        beschreibung_detail:  obj.beschreibung_detail,
                        bewertung: obj.bewertung
                    });
            });
        }

    });
};*/


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 5,
        justifyContent: "center",
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    emptlyListIndicator: {
        textAlign: "center",
        padding: 100,
        fontSize: 20,
    },
    listSeperator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'orange',
        marginVertical: 5
    }
});