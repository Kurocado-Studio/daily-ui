import { Card, type CardProps } from '@kurocado-studio/ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Daily001 } from '../src/daily-ui-001/Daily001';

const meta: Meta<CardProps> = {
  component: Daily001,
  argTypes: {
    children: {
      description: 'Is the Input disabled?',
    },
    className: {
      control: 'text',
      description: 'Optional Tailwind CSS class for styling',
    },
  },
  tags: ['autodocs'],
};

export const WithCardBody: StoryObj<CardProps> = {
  name: 'With Card Body',
  args: {
    children: (
      <Card.Body>
        <p className='text-sm'>Card body</p>
      </Card.Body>
    ),
  },
  tags: ['autodocs'],
};

export const WithCardHeader: StoryObj<CardProps> = {
  name: 'With Card Header',
  args: {
    children: (
      <>
        <Card.Header>
          <h1 className='text-3xl'>Card header</h1>
        </Card.Header>
        <Card.Body>
          <p className='text-base'>Card body</p>
        </Card.Body>
      </>
    ),
  },
  tags: ['autodocs'],
};

export const WithCardFooter: StoryObj<CardProps> = {
  name: 'With Card Footer',
  args: {
    children: (
      <>
        <Card.Header>
          <h1 className='text-3xl'>Card header</h1>
        </Card.Header>
        <Card.Body>
          <p className='text-base'>Card body</p>
        </Card.Body>
        <Card.Footer>
          <p className='text-base'>Card footer</p>
        </Card.Footer>
      </>
    ),
  },
  tags: ['autodocs'],
};

/* eslint import/no-default-export: 0 */
export default meta;
