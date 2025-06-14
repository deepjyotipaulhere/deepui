import '../src/index.scss';
import type { Preview } from '@storybook/react-vite';
import { ThemeProvider } from '../src/theme/ThemeProvider';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => React.createElement(ThemeProvider, null, Story(context)),
  ],
};

export default preview;