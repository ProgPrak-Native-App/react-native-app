import React, { useState } from 'react';
import { Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Title from '../../Title';
import { parseMotivator } from '../MotivatorProps';
import { BACKGROUND, SHADOW, SIZES } from '../../../styles';
import KopfsachenButton from '../../KopfsachenButton';

export default function OptimismHome({ navigation }: any) {
  const props = parseMotivator('optimism');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
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
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Wenn du Optimismus üben möchtest, kann dir die folgende Aufgabe helfen: Stell dir einen Timer für 10
                Minuten ein. Denke während dieser Zeit an dein bestmögliches zukünftiges Selbst und schreibe es auf
                einem Zettel auf. Lege dir mehrere Zettel für diese Übung bereit. Stell dir dein Leben so vor, wie du es
                dir immer ausgemalt hast. Stell dir vor, du hättest dein Bestes gegeben und all die Dinge erreicht, die
                du im Leben immer erreichen wolltest. Mache dir beim Schreiben keine Gedanken über Grammatik oder
                Rechtschreibung. Konzentriere dich nur darauf, all deine Gedanken und Emotionen in einer lebhaften Weise
                auszudrücken.
              </Text>
              <KopfsachenButton
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('OptimismExercise');
                }}
                style={styles.button}>
                Let's go!
              </KopfsachenButton>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>

      <Title Icon={() => props.icon} color={props.color} text={props.name} />
      <View style={styles.container}>
        <Text style={styles.header}>Finde heraus,{'\n'} was dahinter steckt!</Text>
        <Image source={require('../../../assets/optimism-info-video.png')} />
      </View>

      <View style={styles.containerButtons}>
        <KopfsachenButton onPress={() => navigation.goBack()} style={styles.button}>
          Andere Strategie auswählen
        </KopfsachenButton>
        <KopfsachenButton onPress={() => setModalVisible(true)} style={styles.button}>
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
    shadowColor: SHADOW,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
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
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: SHADOW,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    lineHeight: SIZES.default_line_height,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: SIZES.font,
  },
});
