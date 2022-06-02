import React, { version } from "react";
import { View, Pressable, Image, Text, StyleSheet } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

type Props = {
    title: String,
    icon: string,
}

export default function ProfileOption({title, icon}: Props) {
    return (
        <Pressable style={styles.container}>
            <View style={styles.elementcontainer}>
                <View style={styles.iconcontainer}>
                    <FontAwesome5 name={icon} size={20}/>
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
            <AntDesign name="right" size={20}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 25,
        marginTop: 15,
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        marginLeft: 10,
    },
    textcontainer: {
        flexGrow: 0,
        flexShrink: 1,
        justifyContent: "center"
    },
    elementcontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 25,
    },
    iconcontainer: {
        marginTop: 5,
    },
})