/* eslint import/no-default-export: 0 */
import type { Meta, StoryObj } from '@storybook/vue3';

import Daily001 from '../src/daily-ui-001/Daily001.vue';

const meta: Meta = {
  title: 'Screens/Daily UI 001 (Login)',
  component: Daily001,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

export const Preview: StoryObj = {
  name: 'Login Page',
};
