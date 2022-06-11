import { ComponentMeta, ComponentStory } from '@storybook/react';
import ConfirmationModal from './ConfirmationModal';

export default {
  title: 'ConfirmationModal',
  component: ConfirmationModal
} as ComponentMeta<typeof ConfirmationModal>;

export const Basic: ComponentStory<typeof ConfirmationModal> = (args) => <ConfirmationModal {...args} />;
