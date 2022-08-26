import { ScrollView, StyleSheet, Text } from 'react-native';
import React, { ComponentType } from 'react';
import Title from '../shared/components/Title';
import { SIZES, TERTIARY } from '../shared/styles';
import OriginalMarkdownComponent, {
  MarkdownIt,
  MarkdownProps,
  RenderRules,
  renderRules,
} from 'react-native-markdown-display';
import { WikiStackScreenProps } from './Navigation';
import { mdAccordionPlugin, mdAccordionRenderRule } from './markdownAccordion';

// the library documents the wrong type, not including the "children" prop :(
const Markdown = OriginalMarkdownComponent as ComponentType<MarkdownProps & { children: string }>;

const markdownIt = MarkdownIt().use(mdAccordionPlugin);

const markdownRenderRules: RenderRules = {
  ...renderRules,
  accordion: mdAccordionRenderRule,
  inline: renderRules.text,
};

export default function EntryView({ route }: WikiStackScreenProps<'WikiEntry'>) {
  const wikiEntry = route.params;

  return (
    <>
      <Title back color={TERTIARY} text={wikiEntry.title} />
      <ScrollView>
        <Text style={styles.title}>{wikiEntry.title}</Text>
        <Markdown markdownit={markdownIt} rules={markdownRenderRules} style={markdownStyles}>
          {wikiEntry.content}
        </Markdown>
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
  paragraph: {
    paddingHorizontal: 30,
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
});
