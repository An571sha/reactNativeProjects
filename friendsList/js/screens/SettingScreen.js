import { StyleSheet, SectionList, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const DATA = [
    {
        title: "Appearance",
        data: [{ name: "Text size" }, { name: "Text color" }, { name: "Text style" }]
    },
    {
        title: "Developer",
        data: [{ name: "Name: Animesh Sharma" }, { name: "email: anim_esh@yahoo.co.in" }]
    },
    {
        title: "Version",
        data: [{ name: "1.0.0" }]
    }
];

export default function Einstellung() {
    return (
        <SafeAreaView>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text style={styles.section} > {item.name} </Text>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 25,
        backgroundColor: "#fff",
        padding: 5,
        borderWidth: StyleSheet.hairlineWidth
    },
    section: {
        padding: 5,
        marginVertical: 5,
        fontSize: 15,

    }
});