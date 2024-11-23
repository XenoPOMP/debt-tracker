import type { Meta, StoryObj } from '@storybook/react';
import { ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';

import { Button } from './Button';

const meta = {
  title: 'UI Kit/Button',
  component: Button,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  children: 'Click me',
  disabled: false,
} satisfies Partial<Story['args']>;

export const Default: Story = {
  args: {
    ...sharedProps,
  },
};

export const Disabled: Story = {
  args: {
    ...sharedProps,
    disabled: true,
  },
};

export const Accent: Story = {
  args: {
    ...sharedProps,
    variant: 'accent',
  },
};

export const AccentWithIcon: Story = {
  name: 'With icon',
  decorators: [
    () => (
      <Button variant='accent'>
        <Mail size='1.2em' /> Send an email
      </Button>
    ),
  ],
};

export const AsLink: Story = {
  name: 'As link',
  decorators: [
    _story => (
      <Button asChild>
        <Link href='https://www.google.com'>
          <ExternalLink size='1.2em' /> google.com
        </Link>
      </Button>
    ),
  ],
};
