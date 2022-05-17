import Title from "./Title";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TERTIARY } from "../colors";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      backgroundColor: "#e0ffff"
    },
    button: {
        marginHorizontal: "20%",
        marginTop: 16,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: TERTIARY,
        height: 40,
        justifyContent: "center"
      },
    header: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 28
      
    },
    text: {
        fontSize: 20,
        textAlign: "center",
    
    },

    textContainer: {
        margin: 20,
        justifyContent: "center"
    }
  });


export default function Introduction() {
    
    return (
      <>
       <View style={styles.container}>
           <View>
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
                <Pressable style={styles.button} onPress={()=> console.log("clicked")}>
                    <Text style={styles.text}>Los geht's</Text>
                </Pressable>
           </View>
       </View>
      </>
    );
  }


