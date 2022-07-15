import { Button, Modal, TextField } from 'components';
import { ModalProps } from 'components/Modal/Modal';
import { CardText as CardTextIcon } from 'styled-icons/bootstrap';

import { object, SchemaOf, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { FormEvent } from 'react';

type AddTaskForm = {
  taskContent: string;
};

const validationSchema: SchemaOf<AddTaskForm> = object().shape({
  taskContent: string().required('Please enter a text for the task')
});

type AddTaskModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  handleAddTask: (taskContent: string) => void;
};

/**
 * Modal where the user can type a task content in order to create a task
 */
export default function AddTaskModal({ isOpen, onClose }: AddTaskModalProps) {
  const { control, formState, getValues } = useForm<AddTaskForm>({
    defaultValues: {
      taskContent: ''
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
  });

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    formState.isValid && handleSubmit();
  };

  const handleSubmit = () => {
    const { taskContent } = getValues();

    console.log('Olha a task que eu vou add xD');
    console.log(taskContent);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xsmall' title='Add task'>
      <Modal.Content style={{ paddingBlock: '1rem' }}>
        <form onSubmit={handleFormSubmit}>
          <Controller
            name='taskContent'
            control={control}
            render={({ field, formState }) => (
              <TextField
                label='Task content'
                labelFor='task'
                onInput={field.onChange}
                value={field.value}
                error={formState.errors.taskContent?.message}
                placeholder='My awesome example task'
                icon={<CardTextIcon />}
                autoComplete='off'
                autoFocus
              />
            )}
          />
        </form>
      </Modal.Content>

      <Modal.Footer isButtonsRow>
        <Button onClick={onClose} color='primary'>
          Cancel
        </Button>

        <Button color='success' disabled={!formState.isValid} onClick={handleSubmit}>
          Add task
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
