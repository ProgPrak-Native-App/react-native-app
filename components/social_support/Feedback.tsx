import { View, Text, Pressable, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5} from "@expo/vector-icons";
import { ORANGE, PRIMARY, RED, SIZES, TERTIARY } from '../../styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SocialSupportStackParamList, SocialSupportStackScreenProps } from './SocialNavigation';
import Title from '../Title';

export default function Feedback ({route}: SocialSupportStackScreenProps<'SupportExercise'>){
    const level = route.params.level
    const {navigate} = useNavigation<NavigationProp<SocialSupportStackParamList>>();
    const [comment, setComment] = useState("")

    return (
        <>
            <Title text="Soziale Unterstützung" color={ORANGE} back />
            <ScrollView style={styles.container}>
                <Text style={styles.heading}>Wie hat Dir die Übung gefallen?</Text> 
                <View style={styles.buttons}>
                <Pressable 
                    accessibilityHint="Drücke hier falls Dir die Uebung gefallen hat"
                    style={[styles.feedback, {backgroundColor: PRIMARY}]}>
                    <FontAwesome5 style={styles.icons} name="smile-beam" size={30} color="black" />
                    <Text style={styles.text}>Gut</Text>
                    
                </Pressable>
                <Pressable 
                    accessibilityHint="Drücke hier falls Dir die Uebung nicht gefallen hat"
                    style={[styles.feedback, {backgroundColor: RED}]}>
                    <FontAwesome5 style={styles.icons} name="frown" size={30} color="black" />
                    <Text style={styles.text}>Schlecht</Text>
                </Pressable>
            </View>

            <Text style={styles.label}>Kommentar (optional):</Text>
            <TextInput 
                placeholder="Dein Feedback..."
                accessibilityLabel="Dein Feedback"
                accessibilityHint="Optional: Hinterlasse hier dein Feedback"
                placeholderTextColor='#4F4F4F'
                style={styles.input}
                value={comment}
                onChangeText={(n) => setComment(n)}
            /> 
            <View style={styles.buttons}>
            <Pressable 
                accessibilityHint="Zurück zum Intro Screen"
                style={[styles.button, {marginRight: 20}]} onPress={()=> {navigate("IntroScreen")}}>
                <Text style={[styles.text]}>Andere Startegie ausprobieren</Text>
            </Pressable>
            <Pressable 
                accessibilityHint="Übung beenden"
                style={styles.button} onPress={() =>{console.log("Done")}}>
                <Text style={styles.text}>Done</Text>
            </Pressable>
            </View>
          </ScrollView>
      </>
    )
  }
  
const styles = StyleSheet.create({
    container: {
          marginVertical: 10,
          width: "90%",
          height: "100%",
          alignSelf: 'center'
    },
    heading: {
        marginVertical: 5,
        fontSize: SIZES.font * 1.3,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        fontSize: SIZES.font,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        minWidth: 48,
        width: "100%",
        paddingVertical: 10, 
        paddingHorizontal: 15,
        marginBottom: 20,
        borderRadius: 15,
    },
    icons:{  
        alignSelf: 'center',
        marginBottom: 2,
    },
    label:{
        marginTop: 20,
        marginBottom: 10,
        width: "100%",
        fontSize: SIZES.font,  
        marginLeft: 5,
    },
    text: {
        textAlign: 'center',
        fontSize: SIZES.font,
        lineHeight: SIZES.default_line_height,
    },
    buttons:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%", 
    },
    feedback:{
        justifyContent: 'center',
        marginTop: 20,
        width: "48%",
        borderRadius: 20,
        minHeight: 48,

        borderColor: '#808080',
        borderWidth: 1,
        padding: 8,
        shadowColor: 'grey',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 100,
        shadowRadius: 1,
        elevation: 5
      },
    button:{
        flexGrow: 0,
        flexShrink: 1,
        justifyContent: 'center',
        marginTop: 10,
        width: "60%",
        
        backgroundColor: TERTIARY,
        minHeight: 48,
        borderColor: '#808080',
        borderRadius: 20,
        borderWidth: 1,

        padding: 10,
        shadowColor: 'grey',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 100,
        shadowRadius: 1,
    },
})