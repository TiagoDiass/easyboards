import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Email as EmailIcon } from 'styled-icons/material-outlined';
import TextField from './TextField';

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'Email',
    labelFor: 'email',
    initialValue: '',
    placeholder: 'jhon.doe@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: 'symbol' }
  }
} as ComponentMeta<typeof TextField>;

export const Basic: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const WithIcon: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} autoComplete='off' />
  </div>
);

WithIcon.args = {
  icon: <EmailIcon />
};

export const Disabled: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

Disabled.args = {
  disabled: true,
  value: 'tiago@email.com'
};

export const WithError: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithError.args = {
  error: 'Invalid email',
  value: 'invalid-email@test.com',
  icon: <EmailIcon />
};
