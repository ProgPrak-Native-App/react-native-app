import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import React from 'react';
import Title from '../../Title';
import { SIZES, TERTIARY } from '../../../styles';
import { WikiStackScreenProps } from './WikiNavigation';

const WikiEntry = ({ route, navigation }: WikiStackScreenProps<'WikiEntry'>) => {
  const Data = route.params;

  if (Data) {
    return (
      <>
        <Title back color={TERTIARY} text={Data.title} />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{Data.title}</Text>
          <Text style={styles.textContainer}>
            {Data.contents.map((item, idx) => item.type === 'url' ? (
              <Text key={idx} style={[styles.content, { textDecorationLine: 'underline' }]}>
                {item.content + ' '}
              </Text>
            ) : (
              <Text key={idx} style={{ fontSize: 18 }}>
                {item.content + ' '}
              </Text>
            )
            )}
          </Text>
        </ScrollView>
      </>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  textContainer: {
    textAlign: 'left',
    lineHeight: 30,
  },
  content: {
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  container: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    fontSize: SIZES.font,
  },
});
export default WikiEntry;
