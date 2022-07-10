import { View, Text, StyleSheet, Pressable, Modal, Alert, TouchableHighlight, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BACKGROUND, DARK_GREEN, PRIMARY, SIZES, WHITE } from '../../styles';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';

/** source code for notifications:
 * https://anilvermaspeaks.medium.com/how-local-notifications-works-in-react-native-expo-538d1cfc2240
 * https://docs.expo.dev/versions/latest/sdk/notifications/#cancelschedulednotificationasyncidentifier-string-promisevoid%3Cbr%3E%0A
 * */

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

/** setting up notification content & trigger
 * date ==== time & date user picked */
const triggerNotifications = async (date: Date) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'KopfSACHEN',
      body: 'Zeit deinen Tagesplan zu kontrollieren',
    },
    trigger: date, // {seconds: 2}, //date,
  });
};

/** need to ask for permission on ios */
async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  console.log('hey', finalStatus, existingStatus);
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    Alert.alert('Fehler', 'Um erinnert zu werden, musst Du uns erlauben Dir Benachrichtigungen zu senden');
  }
}

export default function TimeModal({ toggle }: { toggle: () => void }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');

  // for iOS 14 bc there are some UI problems....
  const displayOptions =
    Platform.OS === 'ios' ? (Platform.Version.startsWith('14') ? 'default' : 'spinner') : 'default';

  let style = {};
  if (Platform.OS === 'ios') {
    if (Platform.Version.startsWith('14')) {
      style = {
        flex: 0,
        height: '100%',
        width: '60%',
        marginLeft: '30%',
        alignSelf: 'center',
        justifyContent: 'center',
      };
    }
  }

  const onChange = (event: DateTimePickerEvent, newDate?: Date | undefined) => {
    const currentDate = newDate;
    if (currentDate) {
      setDate(currentDate);
    }
  };

  const showMode = (currentMode: string) => {
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleOnPressOk = () => {
    triggerNotifications(date);
  };
  /** alert poping up to ask again if user certain they want to receive
   * a notification, to make it less frustrating
   */
  const handleSetNotification = () => {
    Alert.alert('Benachrichtigung', `Du wirst um ${date.toLocaleString()} erinnert`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: handleOnPressOk,
      },
    ]);
  };

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <View>
            <Pressable
              accessibilityHint="Datum auswählen"
              onPress={showDatepicker}
              style={[{ backgroundColor: mode === 'date' ? PRIMARY : WHITE }, styles.btn]}>
              <Text style={styles.btnTxt}>Tag auswählen </Text>
            </Pressable>
          </View>
          <View>
            <Pressable
              accessibilityHint="Tageszeit auswählen "
              onPress={showTimepicker}
              style={[{ backgroundColor: mode === 'time' ? PRIMARY : WHITE }, styles.btn]}>
              <Text style={styles.btnTxt}>Uhrzeit auswählen </Text>
            </Pressable>
          </View>
          <TouchableHighlight style={styles.container}>
            <View style={{ backgroundColor: WHITE }}>
              <View style={{ marginTop: 10 }}>
                {mode === 'date' && (
                  <DateTimePicker
                    dateFormat="dayofweek day month"
                    dayOfWeekFormat={'{dayofweek.abbreviated(2)}'}
                    display={displayOptions}
                    is24Hour={true}
                    locale="de-DE"
                    minimumDate={new Date()}
                    mode="date"
                    onChange={onChange}
                    style={style}
                    testID="dateTimePicker"
                    value={date}
                  />
                )}
                {mode === 'time' && (
                  <DateTimePicker
                    display={displayOptions}
                    is24Hour={true}
                    locale="de-DE"
                    mode="time"
                    onChange={onChange}
                    style={style}
                    testID="timePicker"
                    value={date}
                  />
                )}
              </View>
            </View>
          </TouchableHighlight>
          <Text style={{ alignSelf: 'center', marginVertical: 10, fontSize: SIZES.font }}>
            Benachrichtigung um:{' '}
            {date.toLocaleString([], {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
          <Pressable
            accessibilityHint="Notification setzen"
            onPress={handleSetNotification}
            style={({ pressed }) => [{ backgroundColor: pressed ? WHITE : PRIMARY }, styles.btn]}>
            <Text style={styles.btnTxt}>Speichere Benachrichtung</Text>
          </Pressable>
          <Pressable
            accessibilityHint="Fenster schließen"
            onPress={toggle}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : WHITE }, styles.btn]}>
            <Text style={styles.btnTxt}>Schließen</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  btnTxt: {
    fontSize: SIZES.font,
  },
  btn: {
    minHeight: SIZES.target_size,
    borderColor: DARK_GREEN,
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    borderTopColor: PRIMARY,
    borderTopWidth: 1,
  },
  overlay: {
    backgroundColor: 'rgba(0.5,0.5,0.5,0.5)',
    height: '100%',
    width: '100%',
    position: 'absolute',
    flex: 0,
    justifyContent: 'flex-end',
  },
  popup: {
    flex: 0,
    minHeight: '70%',
    width: '100%',
    paddingBottom: 30,
    backgroundColor: BACKGROUND,
    borderRadius: 15,
    justifyContent: 'flex-end',
  },
});
