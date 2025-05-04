/* eslint import/no-default-export: 0 */
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Daily001 from '../src/daily-ui-001/Daily001.vue';

const meta = {
  title: 'Card',
  component: Daily001,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onClick: fn(),
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
