import React from "react";

import Title from "./Title";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { TERTIARY } from "../colors";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      backgroundColor: "#e0ffff"
    },

    headerContainer: {
        flex: 1,
      },

    header: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 10
    },

    textContainer: {
        flex: 8,
        margin: 20,
        justifyContent: "center"
    },

    text: {
        fontSize: 20,
        textAlign: "center",
    
    },

    buttonContainer:{
        flex: 1,

    },
    button: {
           marginHorizontal: "25%",
           borderWidth: 1,
           borderRadius: 20,
           backgroundColor: TERTIARY,
           justifyContent: "center",
           height: 40
         }
  });


export default function Introduction() {

    const navigation = useNavigation<any>();

    
    return (
      <>
       <View style={styles.container}>
           <View style={styles.headerContainer}>
               <Text style={styles.header}>Herzlich Willkommen!</Text>
           </View>
           <View style={styles.textContainer}>
               <Text style={styles.text}>In dieser App geht es darum deine mentale
                    Gesundheitskompetenz auszubauen: Wir werden an deinen persönlichen Starkmachern arbeiten. 
                    Du wirst jeden Tag nach deiner Stimmung gefragt. Je nachdem, wie deine Stimmung ist, 
                    werden dir verschiedene Übungen vorgeschlagen. Diese Übungen werden dann zu deinem Starkmacherprofil hinzugefügt.
                    Außerdem findest du im Wiki Erklärungen zu psychologischen Begriffen. Falls du externe Hilfe 
                    benötigst, findest du unter Notfallnummern verschiedene Beratungsstellen. Als erstes werden wir dein persönliches Profil anlegen.
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("CreateProfile")}>
                    <Text style={styles.text}>Los geht's</Text>
                </Pressable>
            </View>
       </View>
      </>
    );
  }


