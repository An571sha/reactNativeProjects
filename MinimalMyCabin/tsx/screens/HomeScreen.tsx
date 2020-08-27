import { ActivityIndicator, FlatList, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import mockJsonData from '../../assets/mockData/MOCK_DATA.json';
import HomeScreenListItem from '../components/HomeScreenListItem';
import { useNavigation } from '@react-navigation/native';
import { HeaderTitle } from '@react-navigation/stack';


const ACCESS_TOKEN = "mock_data_key";

export default function HomeScreen(): JSX.Element {
    const navigation = useNavigation();
    const [jsonData, setJsonData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        // _load_json_from_storage(setJsonData,s setIsLoading)
        setJsonData(mockJsonData);
        setIsLoading(false)

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

                    ({ item }) => <HomeScreenListItem props_extension={item}
                        onPress={() => navigation.navigate('InfoScreen', { title: { item } })} />}
                // ItemSeparatorComponent={() => <View style={styles.listSeperator} />}

                // Performance settings
                removeClippedSubviews={true} // Unmount components when outside of window
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
    return <HomeScreenListItem props_extension={item} />
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