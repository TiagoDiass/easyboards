import { ComponentMeta, ComponentStory } from '@storybook/react';
import Main from './Main';

export default {
  title: 'Main',
  component: Main
} as ComponentMeta<typeof Main>;

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />;
