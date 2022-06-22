import {Text, StyleSheet, ScrollView, Pressable, View} from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../Title';
import { ORANGE, PRIMARY, SIZES, TERTIARY } from '../../styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SocialSupportStackParamList } from './SocialNavigation';
import CountDown from 'react-native-countdown-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { differenceInSeconds } from 'date-fns';


/** source for storage code https://aloukissas.medium.com/how-to-build-a-background-timer-in-expo-react-native-without-ejecting-ea7d67478408 */
export default function ThirdLevelCountDown() {
    const {navigate} = useNavigation<NavigationProp<SocialSupportStackParamList>>();

    const timeLimit = 1//14 * 24 * 60 * 60
    const [toggle, setToggle] = useState<Boolean>()
    const [toggleFwd, setToggleFwd] = useState(false)
    const [secondsLeft, setSecondsLeft] = useState<number>()

    const [forceUpdadte, setForceUpdate] = useState(0)

    /** store the timestamp when the start btn was clicked */
    async function recordStartTime (){
        try {
            const now = new Date();
            await AsyncStorage.setItem("@start_time", now.toISOString());
        } catch (err) {
            console.warn(err);
        }
    };
    /** if sthg stored in async as start time challeng is running => hide start btn */
    async function setToggeling(): Promise<Boolean> {
        if( await AsyncStorage.getItem("@start_time")){
            return true
        }else{
            return false
        }
    }

    /** when smth was in async storage then update the timer */
    const setCountDown = async ()  => {
        const startTime =  await AsyncStorage.getItem("@start_time")
        const now = new Date();
        if(startTime){
            const timeLeft =  timeLimit - differenceInSeconds(now, Date.parse(startTime))
            if(timeLeft > 0) {
                return timeLeft
            }else {
                AsyncStorage.clear()
                return 0
            }
        }
        return timeLimit
     }
    
     /** when start btn clicked hide & set timestamp */
    const onClick = () => {
        recordStartTime()
        setCountDown().then(time => setSecondsLeft(time))
        setToggle(prev => !prev)
    }
    const onRestart = () => {
        recordStartTime()
        setSecondsLeft(timeLimit)
        setToggleFwd(prev => !prev)
        setToggle(prev => !prev)
    }
    const onComplete = () => {
        setToggleFwd(prev => !prev)
        setSecondsLeft(timeLimit)
    }
    useEffect(() => {
        setToggeling().then(bool => setToggle(bool)).then()
        setCountDown().then(time => setSecondsLeft(time))
    }, []) 

    return (
      <>
        <Title text="Soziale Unterstützung" color={ORANGE} back />
        <ScrollView contentContainerStyle={styles.container} >
          <Text style={styles.body}>
              Challenge dich selbst – markiere in jedem der 3 Kreise eine Person und schaue in den nächsten 
              2 Wochen, ob du sie vielleicht auf die eine oder andere Weise unterstützen kannst und wie es dir dabei 
              geht.
          </Text>
          { (secondsLeft !== undefined && toggle) && 
              <CountDown
              style={{marginVertical:35}}
              until={secondsLeft}
              onFinish={onComplete}
              size={30}
              digitStyle={{backgroundColor: PRIMARY}}
              digitTxtStyle={{color: 'black'}}
              timeLabelStyle={{color: 'black', fontSize: 14}}
              timeToShow={['D', 'H','M', 'S']}
              timeLabels={{d: "Tage", h: "Stunden", m: 'Minuten', s: 'Sekunden'}}
          />
          }
        {!toggle && 
            <Pressable 
            accessibilityHint="Starte einen 2 wöchigen Countdown"
            onPress={onClick}
            style={styles.button}>
            <Text style={[styles.body, {fontWeight: 'bold'}]}>Start challenge!</Text>
          </Pressable>  
            }
            
            {toggleFwd && 
            <View style={styles.btnContainer}>
                <Pressable 
                    accessibilityHint="Möchtest Du die Challenge neu starten?"
                    onPress={onRestart}
                    style={styles.buttons}>
                <Text style={[styles.body, {fontWeight: 'bold'}]}>Re-start challenge?</Text>
            </Pressable> 
                <Pressable 
                    accessibilityHint="Zum Feedback und Übung beenden"
                    onPress={() => {navigate("Feedback", {level:3} )}}
                    style={styles.buttons}>
                    <Text style={[styles.body, {fontWeight: 'bold'}]}>Weiter</Text>
                </Pressable> 
            </View>
            }       
        </ScrollView>
      </>
    )
  }
  const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        width: '88%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    body: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        textAlign:'center',
        fontSize: SIZES.font,
        lineHeight: SIZES.default_line_height
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center', 
        height: 48,
        minWidth: "70%",
        backgroundColor: TERTIARY,
        marginVertical: 40,
        borderColor: '#808080',
        borderRadius: 30,
        borderWidth: 1
    }, 
    buttons: {
        justifyContent: 'center',
        alignItems: 'center', 
        height: 48,
        minWidth: "30%",
        backgroundColor: TERTIARY,
        marginVertical: 10,
        borderColor: '#808080',
        borderRadius: 30,
        borderWidth: 1
    },
    btnContainer:{
        flexDirection: 'row', 
        width: "100%",
        justifyContent: 'space-evenly'
    }
  })