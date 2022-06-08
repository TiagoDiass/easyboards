import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../Button/Button';
import { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    onClose: {
      action: 'closed'
    },

    isOpen: {
      type: 'symbol'
    }
  },
  args: {
    title: 'Modal title',
    size: 'medium'
  }
} as ComponentMeta<typeof Modal>;

export const Basic: ComponentStory<typeof Modal> = (args) => {
  // refactor this later to use a useModalState
  const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button color='success' onClick={openModal}>
        Open Modal
      </Button>

      <Modal {...args} isOpen={isModalOpen}>
        <h2>Congratulations</h2>
        <p>You are inside a modal 😉</p>

        <Button onClick={closeModal} color='danger'>
          Close modal
        </Button>
      </Modal>
    </div>
  );
};
