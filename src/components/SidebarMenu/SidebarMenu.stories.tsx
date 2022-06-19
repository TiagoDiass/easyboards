import { ComponentMeta, ComponentStory } from '@storybook/react';
import SidebarMenu from './SidebarMenu';

export default {
  title: 'SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof SidebarMenu>;

export const Basic: ComponentStory<typeof SidebarMenu> = () => <SidebarMenu />;
