import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

/* --------- Wiki Header: basically just styles and serach   ----------------- */
const WikiHeader = ({onSearch}: {onSearch: (text: string) => void}) => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 8}}>
        <View style={styles.searchBar}>
          <View style={styles.searchBarTxt}>
            <FontAwesome5 name='search' resizeMode='contain' size={24} style={{marginRight: 8}} />
            <TextInput
              accessibilityLabel='Suche im Wiki'
              onChangeText={onSearch}
              placeholder='Suche im Wiki'
              placeholderTextColor='#4F4F4F'
              style={styles.text}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  searchBar: {
    width: '100%',
    borderRadius: 24,
    borderColor: '#808080',
    borderWidth: 2,
    backgroundColor: '#f2f2f2',
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
  },
});

export default WikiHeader;
