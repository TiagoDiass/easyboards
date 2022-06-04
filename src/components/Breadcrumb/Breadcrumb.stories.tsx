import { ComponentMeta, ComponentStory } from '@storybook/react';
import Breadcrumb from './Breadcrumb';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    items: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof Breadcrumb>;

export const Basic: ComponentStory<typeof Breadcrumb> = () => (
  <Breadcrumb
    items={[
      {
        text: 'Source of everything'
      },
      {
        text: 'Your boards'
      },
      {
        text: 'Board with a random name'
      }
    ]}
  />
);
