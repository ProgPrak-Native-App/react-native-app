import { View, Text, TextInput, StyleSheet, Pressable, Modal, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { AntDesign} from "@expo/vector-icons";
import { PRIMARY, SIZES, TERTIARY} from '../../styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Event } from '@react-native-community/datetimepicker';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications'

/** source code for notifications: 
 * https://anilvermaspeaks.medium.com/how-local-notifications-works-in-react-native-expo-538d1cfc2240 
 * https://docs.expo.dev/versions/latest/sdk/notifications/#cancelschedulednotificationasyncidentifier-string-promisevoid%3Cbr%3E%0A
 * */


 Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true, 
        shouldPlaySound: false,
        shouldSetBadge: false
    })
})

/** setting up notification content & trigger
 * date ==== time & date user picked */
const triggerNotifications = async (date: Date) => {    
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "got mail",
        body: 'ma dudes'
      },
      trigger:date
    });
  }

/** need to ask for permission on ios */
async function registerForPushNotificationsAsync() {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
}

export default function TextPopUp ( { toggle} : {toggle: () => void}) {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState<any>('date');
  
    const onChange = (event: Event, date?: Date | undefined) => {
      const currentDate = date;
      if(currentDate){
          setDate(currentDate);
        }
    };
  
    const showMode = (currentMode: any | undefined) => {
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
        console.log('hi')
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    /** alert poping up to ask again if user certain they want to receive
     * a notification, to make it less frustrating
     */
    const handleSetNotification = () => {
        Alert.alert(
            "Benachrichtigung  ",
            `Du wirst um ${date.toLocaleString()} erinnert`,
            [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { text: "OK", onPress: () =>  {
                    triggerNotifications(date),
                    registerForPushNotificationsAsync() }
                }
              ]
            )
    }

  return ( 
    <Modal transparent={true}>
        <View style={styles.overlay}>
            <View style={styles.popup}>
                <View>
                    <Pressable 
                        onPress={showDatepicker}
                        accessibilityHint="Datum auswählen "
                        style={({ pressed }) => [{backgroundColor: pressed? PRIMARY: TERTIARY}, styles.btn]}>
                        <Text style={styles.btnTxt}>Tag auswählen </Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable 
                        accessibilityHint="Tageszeit auswählen "
                        style={({ pressed }) => [{backgroundColor: pressed? PRIMARY: TERTIARY}, styles.btn]}
                        onPress={showTimepicker} >
                        <Text style={styles.btnTxt}>Uhrzeit auswählen  </Text>
                    </Pressable>
                </View>
    
                <DateTimePicker
                    dayOfWeekFormat={'{dayofweek.abbreviated(2)}'}
                            dateFormat="dayofweek day month"
                            minimumDate={new Date()}
                            display='default'
                    style={{ paddingHorizontal: "12%", alignSelf:'center', minHeight: 48}}
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
                
                <Text style={{alignSelf:'center', marginVertical: 10}}>
                    Benachrichtigung um: {date.toLocaleString()}</Text>
                <Pressable
                    accessibilityHint="Notification setzen"
                    onPress={handleSetNotification}
                    style={({ pressed }) => [{backgroundColor: pressed? PRIMARY: TERTIARY}, styles.btn]}>
                    <Text style={styles.btnTxt}>Fertig</Text>
                </Pressable>
                <Pressable
                    accessibilityHint="Fenster schließen"
                    onPress={toggle}
                    style={styles.close}>
                    <AntDesign name="close" size={30} style={{alignSelf: 'center'}}/>
                </Pressable>
            </View> 
        </View> 
    </Modal>
    )
}

const styles = StyleSheet.create({
    dtp:{
        justifyContent: 'center',
    },
    btnTxt:{
        fontSize: SIZES.font,
    },

    btn:{
        minHeight: 48, 
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,

        justifyContent: 'center',
        alignItems:'center'
    },
  overlay: {
    backgroundColor: 'rgba(0.5,0.5,0.5,0.5)',
    height: "100%",
    width: "100%",
    position: 'absolute'
},
  popup: {
    zIndex: 100, 
    alignSelf: 'center',
    top: "30%",
    minHeight: "30%",
    minWidth: "80%",
    backgroundColor: '#f2f2f2',
    borderRadius: 15,
    justifyContent: 'center'
  },
  container: {
    marginHorizontal: 20,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  safe: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 20,

    alignSelf: 'center', 
    alignItems: 'center',
  
    width: "100%",
    backgroundColor: PRIMARY,
  },
  label: {
    fontSize: SIZES.font,
    paddingLeft: 10,
    marginTop: 10,
  },
  close:{
    position: 'absolute',   
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 48,
    height: 48,
    width: 48,
    justifyContent: 'center',
    top: -25, 
    right: -25,
  },
})