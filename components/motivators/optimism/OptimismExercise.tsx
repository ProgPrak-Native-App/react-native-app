import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import Title from '../../shared/components/Title';
import { getMotivatorByType } from '../model';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { BACKGROUND, GREY, MOTIVATOR, SIZES, STYLES } from '../../shared/styles';
import KopfsachenButton from '../../shared/components/button/KopfsachenButton';
import * as Clipboard from 'expo-clipboard';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { MotivatorRoutes } from '../MotivatorNavigator';

function formatTime(seconds: number) {
  return (
    Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0') +
    ':' +
    (seconds % 60).toString().padStart(2, '0')
  );
}

export default function OptimismExercise() {
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();

  const props = getMotivatorByType('optimism');
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState(['', '', '']);

  function updateText(newText: string, index: number) {
    setText((currentText) => {
      currentText[index] = newText;
      return currentText;
    });
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(
      'Du hast die Übung geschafft! \nHier sind deine Notizen: \n\n' + text[0] + '\n' + text[1] + '\n' + text[2]
    );
  };

  function getModal() {
    return (
      <Modal
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        transparent={true}
        visible={modalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(!modalVisible);
          }}
          style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalView, STYLES.shadow]}>
              <AntDesign
                accessibilityHint={'Schließen'}
                color="black"
                name="close"
                onPress={() => setModalVisible(!modalVisible)}
                size={35}
                style={{ position: 'absolute', right: 12, top: 12, zIndex: 1 }}
              />
              <Text style={styles.modalText}>Du hast die Übung geschafft! {'\n'} Hier sind deine Notizen:</Text>
              <View style={styles.resultContainer}>
                <Text style={styles.modalText}>{text[0]}</Text>
                <Text style={styles.modalText}>{text[1]}</Text>
                <Text style={styles.modalText}>{text[2]}</Text>
              </View>
              <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
                <KopfsachenButton
                  accessibilityHint={'Übung abschließen'}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate('Feedback', { motivator: 'optimism' });
                  }}
                  style={[styles.button, STYLES.shadow]}>
                  Fertig
                </KopfsachenButton>
                <KopfsachenButton
                  accessibilityHint={'Ergebnisse in Zwischenablage kopieren'}
                  onPress={() => {
                    copyToClipboard().then(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success));
                  }}
                  style={[styles.button, STYLES.shadow]}>
                  Kopieren in die Zwischenablage
                </KopfsachenButton>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    );
  }

  function getCountdown() {
    return (
      <View style={styles.container}>
        <View style={styles.countdown}>
          <CountdownCircleTimer
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[600, 400, 200, 0]}
            duration={600}
            isPlaying={isPlaying}
            key={key}
            onComplete={() => {
              setKey((prevKey) => prevKey + 1);
              setIsPlaying(false);
            }}
            size={140}>
            {({ remainingTime, color }) => <Text style={{ color, fontSize: 30 }}>{formatTime(remainingTime)}</Text>}
          </CountdownCircleTimer>
        </View>
      </View>
    );
  }

  return (
    <>
      {getModal()}

      <Title Icon={() => props.icon} back={true} color={props.color} text={props.name} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        keyboardVerticalOffset={20}
        style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            {getCountdown()}
            <View style={styles.countdownButtonContainer}>
              <KopfsachenButton
                accessibilityHint={'Start countdown'}
                onPress={() => setIsPlaying(true)}
                style={[styles.taskButton, STYLES.shadow]}>
                Start
              </KopfsachenButton>
              <KopfsachenButton
                accessibilityHint={'Reset countdown'}
                onPress={() => {
                  setKey((prevKey) => prevKey + 1);
                  setIsPlaying(false);
                }}
                style={[styles.taskButton, STYLES.shadow]}>
                Reset
              </KopfsachenButton>
              <KopfsachenButton
                accessibilityHint={'Stop countdown'}
                onPress={() => setIsPlaying(false)}
                style={[styles.taskButton, STYLES.shadow]}>
                Stop
              </KopfsachenButton>
            </View>

            <View style={styles.container}>
              <TextInput
                accessibilityHint={'Trage hier eine Situation ein...'}
                multiline={true}
                onChangeText={(newText) => updateText(newText, 0)}
                placeholder="Trage hier eine Situation ein..."
                style={styles.input}
              />
              <TextInput
                accessibilityHint={'Trage hier eine Situation ein...'}
                multiline={true}
                onChangeText={(newText) => updateText(newText, 1)}
                placeholder="Trage hier eine Situation ein..."
                style={styles.input}
              />
              <TextInput
                accessibilityHint={'Trage hier eine Situation ein...'}
                multiline={true}
                onChangeText={(newText) => updateText(newText, 2)}
                placeholder="Trage hier eine Situation ein..."
                style={styles.input}
              />
              <KopfsachenButton
                accessibilityHint={'Übung abschliesßen'}
                accessibilityLabel={'Fertig'}
                onPress={() => setModalVisible(true)}
                style={[styles.taskButton, { marginBottom: 20 }]}>
                Done
              </KopfsachenButton>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    paddingTop: 45,
    margin: 20,
    minWidth: '80%',
    backgroundColor: BACKGROUND,
    borderRadius: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  modalText: {
    lineHeight: SIZES.default_line_height,
    textAlign: 'center',
    fontSize: SIZES.font,
  },
  countdown: {
    marginTop: 15,
  },
  input: {
    minHeight: SIZES.target_size,
    fontSize: SIZES.font,
    width: '80%',
    borderWidth: 1,
    paddingLeft: 15,
    marginBottom: 15,
    backgroundColor: MOTIVATOR.SECURITYNET,
    borderRadius: 20,
  },
  countdownButtonContainer: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  taskButton: {
    width: '25%',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
    textAlign: 'center',
  },
  button: {
    minWidth: '30%',
    maxWidth: '50%',
    marginHorizontal: 10,
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
    textAlign: 'center',
  },
  resultContainer: {
    minWidth: '80%',
    backgroundColor: GREY,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 10,
    marginBottom: 15,
  },
});
