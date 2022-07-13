import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';
import { RenderFunction } from 'react-native-markdown-display';
import Accordion from './Accordion';
import React from 'react';

/**
 * Markdown-It plugin to turn sections delimited by h2 headings into accordions.
 */
export function mdAccordionPlugin(md: MarkdownIt) {
  md.core.ruler.after('block', 'accordion', (state) => {
    let currentIndex = 0;

    function next(type: string, tag?: string): { token: Token; index: number } | null {
      const found = state.tokens.findIndex(
        (token, i) => i >= currentIndex && token.type === type && (tag === undefined || token.tag === tag)
      );
      if (found === -1) {
        return null;
      } else {
        return {
          index: found,
          token: state.tokens[found],
        };
      }
    }

    while (currentIndex < state.tokens.length) {
      const headingOpen = next('heading_open', 'h2');
      if (!headingOpen) {
        return;
      }
      currentIndex = headingOpen.index;

      const headingText = next('inline');
      if (!headingText) {
        continue;
      }

      const headingClose = next('heading_close', 'h2');
      if (!headingClose) {
        continue;
      }

      const accordionOpen = new Token('accordion_open', '', 1);
      accordionOpen.block = true;
      accordionOpen.content = headingText.token.content;

      state.tokens.splice(headingOpen.index, 3, accordionOpen);

      const accordionClose = new Token('accordion_close', '', -1);
      accordionClose.block = true;

      const nextHeadingOpen = next('heading_open');
      if (nextHeadingOpen) {
        // close the accordion before the next heading
        state.tokens.splice(nextHeadingOpen.index, 0, accordionClose);
      } else {
        // no more headings, so this will be the last accordion containing all remaining tokens
        state.tokens.push(accordionClose);
      }
    }
  });
}

/**
 * react-native-markdown-display renderer rule for accordions.
 */
export const mdAccordionRenderRule: RenderFunction = (node, children) => {
  return (
    <Accordion key={node.key} title={node.content}>
      {children}
    </Accordion>
  );
};
