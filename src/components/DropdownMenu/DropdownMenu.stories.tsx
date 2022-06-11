import { ComponentMeta, ComponentStory } from '@storybook/react';
import DropdownMenu from './DropdownMenu';

export default {
  title: 'DropdownMenu',
  component: DropdownMenu
} as ComponentMeta<typeof DropdownMenu>;

export const Basic: ComponentStory<typeof DropdownMenu> = (args) => <DropdownMenu {...args} />;
