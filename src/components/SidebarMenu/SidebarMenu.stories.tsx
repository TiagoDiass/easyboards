import { ComponentMeta, ComponentStory } from '@storybook/react';
import SidebarMenu from './SidebarMenu';

export default {
  title: 'SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    useBoardsList: {
      type: 'function'
    },
    setBoards: {
      type: 'function'
    }
  },
  args: {
    useBoardsList: () => [
      {
        id: 'board-1-id',
        title: 'Cool project',
        slug: 'cool-project',
        columns: []
      },
      {
        id: 'board-2-id',
        title: 'Work',
        slug: 'work',
        columns: []
      },
      {
        id: 'board-3-id',
        title: 'iOS App',
        slug: 'ios-app',
        columns: []
      }
    ]
  }
} as ComponentMeta<typeof SidebarMenu>;

export const Basic: ComponentStory<typeof SidebarMenu> = (args) => <SidebarMenu {...args} />;
