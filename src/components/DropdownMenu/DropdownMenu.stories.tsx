import { ComponentMeta, ComponentStory } from '@storybook/react';
import DropdownMenu from './DropdownMenu';
import { Pencil as PencilIcon, Trash as TrashIcon } from '@styled-icons/evil';

export default {
  title: 'DropdownMenu',
  component: DropdownMenu
} as ComponentMeta<typeof DropdownMenu>;

export const Basic: ComponentStory<typeof DropdownMenu> = () => (
  <DropdownMenu
    items={[
      {
        text: 'One',
        onClick: () => alert('One')
      },
      {
        text: 'Two',
        onClick: () => alert('Two')
      },
      {
        text: 'Three',
        onClick: () => alert('Three')
      }
    ]}
  />
);

export const WithIcons: ComponentStory<typeof DropdownMenu> = () => (
  <DropdownMenu
    items={[
      {
        icon: <PencilIcon />,
        text: 'Edit task',
        onClick: () => alert('EDIT TASK')
      },
      {
        icon: <TrashIcon />,
        text: 'Delete task',
        onClick: () => alert('DELETE TASK')
      }
    ]}
  />
);
