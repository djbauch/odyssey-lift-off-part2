import React from 'react';
import '@apollo/space-kit/reset.css';
import { colors as SKColors } from '@apollo/space-kit/colors';
import { Global } from '@emotion/react';

const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const unit = 8;
export const widths = {
  largePageWidth: 1600,
  regularPageWidth: 1100,
  textPageWidth: 800,
};
export const colors = {
  primary: SKColors.indigo.base,
  secondary: SKColors.teal.base,
  accent: SKColors.pink.base,
  background: SKColors.silver.light,
  text: SKColors.black.base,
  textSecondary: SKColors.grey.dark,
  ...SKColors,
};

const GlobalStyles = () => (
  <Global
    styles={{
      'html': {
        height: '100%',
      },
      body: {
        height: '100%',
        margin: 0,
        padding: 0,
        fontFamily: "'Source Sans Pro', sans-serif",
        backgroundColor: colors.background,
        color: colors.text,
      },
      '#root': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        backgroundImage: 'url("/space_kitty_pattern.png")',
      },
      '*': {
        boxSizing: 'border-box',
      },
      h1: {
        margin: 0,
        fontWeight: 600,
        fontSize: 40,
        lineHeight: 1,
      },
      h2: {
        margin: 0,
        fontWeight: 600,
        fontSize: 36,
      },
      h3: {
        margin: 0,
        fontWeight: 600,
        fontSize: 30,
      },
      h5: {
        margin: 0,
        fontWeight: 600,
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: 4,
      },
    }}
  />
);

export default GlobalStyles;

export { IconRun } from '@apollo/space-kit/icons/IconRun';
export { IconView } from '@apollo/space-kit/icons/IconView';
export { IconTime } from '@apollo/space-kit/icons/IconTime';
export { IconBook } from '@apollo/space-kit/icons/IconBook';
export { IconYoutube } from '@apollo/space-kit/icons/IconYoutube';
export { IconArrowRight } from '@apollo/space-kit/icons/IconArrowRight';
export { IconDoubleArrowRight } from '@apollo/space-kit/icons/IconDoubleArrowRight';
export { ApolloIcon } from '@apollo/space-kit/icons/ApolloIcon';
export { Button } from '@apollo/space-kit/Button';
