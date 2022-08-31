import React, { useEffect, useMemo, useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Title from '../shared/components/Title';
import SearchBar from './SearchBar';
import { BACKGROUND, SIZES, STYLES, TERTIARY } from '../shared/styles';
import WikiClient, { WikiEntry } from '../../api/WikiClient';
import EntryGroup from './EntryGroup';
import { partitionBy } from '../../util';
import KopfsachenButton from '../shared/components/button/KopfsachenButton';

export default function EntryList() {
  const [allEntries, setAllEntries] = useState<WikiEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);

  // initially retrieve all wiki entries
  useEffect(() => {
    new WikiClient('https://wiki.api.live.mindtastic.lol')
      .getEntries()
      .catch(() => {
        setModalVisible(true);
        return [];
      })
      .then((entries) => entries.sort((a, b) => a.title.localeCompare(b.title)))
      .then(setAllEntries);
  }, []);

  // filter and partition entries whenever allEntries or searchTerm change
  const filteredEntries = useMemo(
    () =>
      partitionBy(
        allEntries.filter((element) => element.title.toLowerCase().includes(searchTerm.toLowerCase())),
        (element) => element.title.charAt(0).toUpperCase()
      ),
    [allEntries, searchTerm]
  );

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
              <Text style={styles.modalText}>
                Es besteht leider keine Verbundung zu unserem Server :( probiere es später nochmal.
              </Text>
              <KopfsachenButton
                accessibilityHint={'Übung abschließen'}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={[styles.button, STYLES.shadow]}>
                Schließen
              </KopfsachenButton>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    );
  }

  return (
    <>
      {getModal()}

      <Title color={TERTIARY} text="Wiki" />
      <SearchBar onSearch={setSearchTerm} value={searchTerm} />
      <ScrollView>
        <View style={styles.container}>
          {Object.entries(filteredEntries).map(([letter, entries]) => (
            <View key={letter}>
              <EntryGroup entries={entries} letter={letter} />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 24,
    marginVertical: 8,
    marginBottom: SIZES.font * SIZES.font,
    zIndex: -1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    minWidth: '80%',
    backgroundColor: BACKGROUND,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    lineHeight: SIZES.default_line_height,
    textAlign: 'center',
    fontSize: SIZES.font,
  },
  button: {
    marginTop: 10,
    minWidth: '30%',
    maxWidth: '50%',
    marginHorizontal: 10,
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
    textAlign: 'center',
  },
});
