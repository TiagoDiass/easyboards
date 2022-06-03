import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  },

  args: {
    children: 'New task',
    color: 'primary',
    size: 'medium',
    fullWidth: false
  }
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const IrrelevantContainer = styled.div<{ dark?: boolean }>`
  padding: 3rem;
  background-color: ${(p) => (p.dark ? '#151515' : '#EEE')};
`;

export const Outline: ComponentStory<typeof Button> = (args) => {
  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <IrrelevantContainer dark>
        <Button {...args} color='primary' />
      </IrrelevantContainer>

      <IrrelevantContainer>
        <Button {...args} color='secondary' />
      </IrrelevantContainer>

      <IrrelevantContainer>
        <Button {...args} color='success' />
      </IrrelevantContainer>

      <IrrelevantContainer>
        <Button {...args} color='danger' />
      </IrrelevantContainer>
    </div>
  );
};

Outline.args = {
  outline: true
};

Outline.argTypes = {
  color: {
    type: 'symbol' // user cannot change the color prop on this story
  }
};
