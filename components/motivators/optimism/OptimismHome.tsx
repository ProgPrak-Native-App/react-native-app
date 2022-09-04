import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Title from '../../shared/components/Title';
import { getMotivatorByType } from '../model';
import { BACKGROUND, SIZES, STYLES } from '../../shared/styles';
import KopfsachenButton from '../../shared/components/button/KopfsachenButton';
import { AntDesign } from '@expo/vector-icons';
import { OptimismScreenProps } from './Optimism';

export default function OptimismHome({ navigation }: OptimismScreenProps) {
  const props = getMotivatorByType('optimism');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
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
                accessibilityHint={'Übung beginnen'}
                color="black"
                name="close"
                onPress={() => setModalVisible(!modalVisible)}
                size={35}
                style={{ position: 'absolute', right: 12, top: 12, zIndex: 1 }}
              />

              <Text style={styles.modalText}>
                Wenn du Optimismus üben möchtest, kann dir die folgende Aufgabe helfen: {'\n\n'}
                Stell dir einen Timer für 10 Minuten ein. Denke während dieser Zeit an dein bestmögliches zukünftiges
                Selbst und schreibe es hier oder auf einem Zettel auf. Lege dir mehrere Zettel für diese Übung bereit.
                Stell dir dein Leben so vor, wie du es dir immer ausgemalt hast. Stell dir vor, du hättest dein Bestes
                gegeben und all die Dinge erreicht, die du im Leben immer erreichen wolltest. Mache dir beim Schreiben
                keine Gedanken über Grammatik oder Rechtschreibung. Konzentriere dich nur darauf, all deine Gedanken und
                Emotionen in einer lebhaften Weise auszudrücken.
              </Text>
              <KopfsachenButton
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('OptimismExercise');
                }}
                style={[styles.button, STYLES.shadow]}>
                Let's go!
              </KopfsachenButton>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>

      <Title Icon={() => props.icon} back={true} color={props.color} text={props.name} />
      <View style={styles.container}>
        <Text style={styles.header}>Finde heraus,{'\n'} was dahinter steckt!</Text>
        <Image source={require('../../../assets/optimism-info-video.png')} />
      </View>

      <View style={styles.containerButtons}>
        <KopfsachenButton
          accessibilityHint={'Zurück'}
          onPress={() => navigation.goBack()}
          style={[styles.button, STYLES.shadow]}>
          Andere Strategie auswählen
        </KopfsachenButton>
        <KopfsachenButton
          accessibilityHint={'Das will ich üben'}
          onPress={() => setModalVisible(true)}
          style={[styles.button, STYLES.shadow]}>
          Das will ich üben
        </KopfsachenButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerButtons: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '40%',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
    textAlign: 'center',
  },
  header: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: BACKGROUND,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    lineHeight: SIZES.default_line_height,
    paddingBottom: 10,
    paddingTop: 25,
    textAlign: 'center',
    fontSize: SIZES.font,
  },
});
