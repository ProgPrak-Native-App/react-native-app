import React from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {
    title: string;
    //TODO: icon  
    icon?: string 
    description: string;
}


export default function Motivator({title, description}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.titletext}>{title}</Text>
            <Text>Description here</Text>
            <Text style={styles.descriptiontext}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titletext: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    descriptiontext: {
        fontSize: 20,
        textAlign: "center"
    },
    textcontainer: {
        flex: 1,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 150,
        justifyContent: "center"
    },
    container: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 64,
        height: 64,
    }
})