import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../Button/Button';
import Modal from './Modal';
import { useModalState } from 'hooks';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    onClose: {
      action: 'closed'
    },

    isOpen: {
      type: 'symbol'
    },

    size: {
      options: ['xsmall', 'small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  },
  args: {
    title: 'Modal title',
    size: 'medium'
  }
} as ComponentMeta<typeof Modal>;

export const Basic: ComponentStory<typeof Modal> = (args) => {
  const [isModalOpen, openModal, closeModal] = useModalState();

  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>
        I recommend you to put your controls tab aside of the canvas <br />
        To do that, press <kbd>D</kbd>
      </h2>

      <Button color='success' onClick={openModal}>
        Open Modal
      </Button>

      <Modal {...args} isOpen={isModalOpen} onClose={closeModal}>
        <Modal.Content>
          <h1>Congratulations</h1>
          <h2>You are inside a modal 😉</h2>
        </Modal.Content>

        <Modal.Footer>
          <Button onClick={closeModal} color='danger'>
            Close modal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
