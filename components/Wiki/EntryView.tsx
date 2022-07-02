import { ScrollView, StyleSheet, Text } from 'react-native';
import React, { ComponentType } from 'react';
import Title from '../Title';
import { SIZES, TERTIARY } from '../../styles';
import OriginalMarkdownComponent, { MarkdownProps } from '@jonasmerlin/react-native-markdown-display';
import { WikiStackScreenProps } from './Navigation';

const Markdown = OriginalMarkdownComponent as ComponentType<MarkdownProps & { children: string }>;

export default function EntryView({ route, navigation }: WikiStackScreenProps<'WikiEntry'>) {
  const wikiEntry = route.params;

  return (
    <>
      <Title back color={TERTIARY} text={wikiEntry.title} />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{wikiEntry.title}</Text>
        <Markdown style={markdownStyles}>{wikiEntry.content}</Markdown>
      </ScrollView>
    </>
  );
}

// no-unused-styles doesn't understand that we are passing the whole style object to Markdown
/* eslint-disable react-native/no-unused-styles */
const markdownStyles = StyleSheet.create({
  body: {
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
  },
});
/* eslint-enable react-native/no-unused-styles */

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  container: {
    paddingHorizontal: 40,
    fontSize: SIZES.font,
  },
});
