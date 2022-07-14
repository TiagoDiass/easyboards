import { Button, Modal, TextField } from 'components';
import { ModalProps } from 'components/Modal/Modal';
import { CardText as CardTextIcon } from 'styled-icons/bootstrap';

type AddTaskModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  handleAddTask: (taskContent: string) => void;
};

/**
 * Modal where the user can type a task content in order to create a task
 */
export default function AddTaskModal({ isOpen, onClose }: AddTaskModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xsmall' title='Add task'>
      <Modal.Content style={{ paddingBlock: '1rem' }}>
        <TextField
          label='Task content'
          labelFor='task'
          initialValue=''
          placeholder='My awesome example task'
          icon={<CardTextIcon />}
          autoComplete='off'
          autoFocus
        />
      </Modal.Content>

      <Modal.Footer isButtonsRow>
        <Button onClick={onClose} color='primary'>
          Cancel
        </Button>

        <Button color='success'>Add task</Button>
      </Modal.Footer>
    </Modal>
  );
}
