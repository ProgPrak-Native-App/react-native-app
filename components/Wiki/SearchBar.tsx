import React from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { BACKGROUND, DARK_GREY } from '../shared/styles';

type Props = {
  value: string;
  onSearch: (text: string) => void;
};

function ClearButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable accessibilityLabel="Suche leeren" accessibilityRole="button" hitSlop={20} onPress={onPress}>
      <FontAwesome5 name="times" resizeMode="contain" size={24} />
    </Pressable>
  );
}

export default function SearchBar({ value, onSearch }: Props) {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 8 }}>
        <View style={styles.searchBar}>
          <View style={styles.searchBarTxt}>
            <FontAwesome5 name="search" resizeMode="contain" size={24} style={{ marginRight: 8 }} />
            <TextInput
              accessibilityLabel="Suche im Wiki"
              accessibilityRole="search"
              onChangeText={onSearch}
              placeholder="Suche im Wiki"
              placeholderTextColor="#4F4F4F"
              style={styles.text}
              value={value}
            />
            {value ? <ClearButton onPress={() => onSearch('')} /> : null}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  searchBar: {
    width: '100%',
    borderRadius: 24,
    borderColor: DARK_GREY,
    borderWidth: 2,
    backgroundColor: BACKGROUND,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchBarTxt: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    padding: 4,
    fontSize: 18,
    flexGrow: 1,
  },
});
