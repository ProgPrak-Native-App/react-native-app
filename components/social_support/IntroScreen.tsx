import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Title from '../Title'
import { ORANGE, TERTIARY, SIZES } from '../../styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { SocialSupportStackParamList } from './SocialNavigation'

export default function SocialStart() {
  const {navigate} = useNavigation<NavigationProp<SocialSupportStackParamList>>();
  return (
    <>
        <Title text="Soziale Unterstützung" color={ORANGE} />
        <ScrollView >
            <View style={styles.container}>
            <Text style={styles.text}>Anderen Personen tragen eine Menge dazu bei, wie es uns geht und können helfen zurechtzukommen.</Text> 
                <Text style={[styles.text, {marginTop: SIZES.default_pSpace}]}>Gerade auch wir allein vielleicht einmal an unsere 
                Grenzen stoßen – frei nach dem Motto gemeinsam sind wir stark! </Text>
            <Pressable style={styles.button} 
                accessibilityHint="Mehr zur Übung"
                onPress={()=> {navigate("IntroVideoScreen")}}>
                <Text style={styles.text}>Let's Go</Text>
            </Pressable>
            </View>
        </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: "80%",
        height: "100%",
        alignSelf: 'center',
        flexDirection: 'column',
        flex: 0,
    },
    text: {
        flex: 0,
        textAlign: 'center',
        fontSize: SIZES.font,
        lineHeight: SIZES.default_line_height,
    },
    button:{
        marginTop: 30,
        width: "100%",
        borderRadius: 20,
        backgroundColor: TERTIARY,
        minHeight: 48,
        padding: 10,
        borderColor: '#808080',
        borderWidth: 1,

        shadowColor: 'grey',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 100,
        shadowRadius: 1,

    },
})