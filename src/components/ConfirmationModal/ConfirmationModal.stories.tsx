import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'components';
import { useModalState } from 'hooks';
import ConfirmationModal from './ConfirmationModal';
import { Trash as TrashIcon } from '@styled-icons/ionicons-outline';

export default {
  title: 'ConfirmationModal',
  component: ConfirmationModal
} as ComponentMeta<typeof ConfirmationModal>;

export const Basic: ComponentStory<typeof ConfirmationModal> = () => {
  const [isModalOpen, openModal, closeModal] = useModalState();
  const onConfirm = () => {
    closeModal();
    alert('Congrats, you closed the modal!');
  };

  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>
        I recommend you to put your controls tab aside of the canvas <br />
        To do that, press <kbd>D</kbd>
      </h2>

      <Button color='danger' onClick={openModal} icon={<TrashIcon />}>
        Delete board
      </Button>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title='Delete board'
        content={
          <>
            Are you sure you want to delete this board? <br /> This action is unreversible!
          </>
        }
        cancelButtonProps={{
          children: "No, I'm not sure"
        }}
        confirmButtonProps={{
          color: 'danger',
          children: 'Yes, delete board',
          onClick: onConfirm
        }}
      />
    </div>
  );
};
