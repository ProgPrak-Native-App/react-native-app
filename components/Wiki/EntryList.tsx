import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Title from '../shared/components/Title';
import SearchBar from './SearchBar';
import { SIZES, TERTIARY } from '../shared/styles';
import WikiClient, { WikiEntry } from '../../api/WikiClient';
import EntryGroup from './EntryGroup';
import { partitionBy } from '../../util';

export default function EntryList() {
  const [allEntries, setAllEntries] = useState<WikiEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // initially retrieve all wiki entries
  useEffect(() => {
    new WikiClient('https://wiki.api.live.mindtastic.lol')
      .getEntries()
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

  return (
    <>
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
});
