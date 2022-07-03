import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { SIZES, TERTIARY } from '../../styles';
import { props } from './L';

export default function P({ puffer }: { puffer: props }) {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>
          <Text style={styles.accent}>P</Text>ufferzeit einplanen:
        </Text>
        <Text style={styles.description}>
          Faustregel: Etwa 1/3 des geschätzten Zeitaufwandes als Reserve einplanen.{' '}
        </Text>
        <Text
          style={{
            fontSize: SIZES.font,
            marginBottom: 10,
          }}>
          Mit (1/3) Pufferzeit ergibt das:{' '}
        </Text>

        <View style={styles.txtContainer}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.puffer}>{puffer.days}</Text>
            <Text style={styles.text}>Tage</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.puffer}>{puffer.hours}</Text>
            <Text style={styles.text}>Stunden</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.puffer}>{puffer.mins}</Text>
            <Text style={styles.text}>Minuten</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    top: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  label: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: 'white',
    height: 48,
    width: 48,
    textAlign: 'center',
    fontSize: SIZES.font,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  txtContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
  },
  text: {
    fontSize: 14,
  },
  textInput: {
    backgroundColor: 'white',
    minHeight: 48,
    paddingHorizontal: 10,
    minWidth: '88%',
    fontSize: SIZES.font,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  heading: {
    alignSelf: 'flex-start',
    fontSize: SIZES.font,
    marginTop: SIZES.default_line_height,
  },
  accent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006646',
  },
  description: {
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    marginVertical: SIZES.default_line_height,
    fontSize: SIZES.font,
  },
  puffer: {
    fontSize: SIZES.font,
  },
  btn: {
    backgroundColor: TERTIARY,
    minHeight: 48,
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
});
