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
 * Modal where user will be able to create a task
 */
export default function AddTaskModal({ isOpen, onClose, handleAddTask }: AddTaskModalProps) {
  const { control, formState, handleSubmit } = useForm<AddTaskForm>({
    defaultValues: {
      taskContent: ''
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = handleSubmit((form) => {
    handleAddTask(form.taskContent);
  });

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xsmall' title='Add task'>
      <Modal.Content style={{ paddingBlock: '1rem' }}>
        <form onSubmit={onFormSubmit}>
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

        <Button color='success' disabled={!formState.isValid} onClick={onSubmit}>
          Add task
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
