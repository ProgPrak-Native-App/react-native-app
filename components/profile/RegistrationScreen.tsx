
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Title from "../Title";
import Input from "./Input";



import { useNavigation } from "@react-navigation/native";
import { TERTIARY } from "../../colors";


//mail
//password
//repeatpassword
//age

const styles = StyleSheet.create({

    button: {
        marginHorizontal: "25%",
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: TERTIARY,
        justifyContent: "center",
        height: 40
    },
    buttonText: {
        fontSize: 20,
        textAlign: "center",
    },

    inputContainer : {
        marginVertical:  10,
        marginHorizontal: 20,
    },
    label: {
        fontSize: 16
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 25
    }
});


export default function RegistrationScreen(){

    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [repeatPassword, onChangeRepeatPassword] = React.useState("");
    const [age, onChangeAge] = React.useState("");

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>            
                <Title text="Mein Profil" />
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Mailadresse</Text>
                    <TextInput 
                        autoCorrect={false}
                        style ={styles.input} 
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="Bitte Mailadresse eingeben"
                    />
                </View>
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                    <TextInput
                        autoCorrect={false} 
                        style ={styles.input} 
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder="Bitte Passwort eingeben"
                    />
                </View>
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Passwort Wiederholen</Text>
                    <TextInput 
                        autoCorrect={false}
                        style ={styles.input} 
                        onChangeText={onChangeRepeatPassword}
                        value={repeatPassword}
                        placeholder="Bitte Mailadresse eingeben"
                    />
                </View>
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Alter</Text>
                    <TextInput 
                        autoCorrect={false}
                        style ={styles.input} 
                        onChangeText={onChangeAge}
                        value={age}
                        placeholder="Bitte Alter eingeben"
                    />
                </View>
                <Pressable onPress={() => console.log("Not implemented")} style={styles.button}>
                    <Text style={styles.buttonText}>
                        Weiter
                    </Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}