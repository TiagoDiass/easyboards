import { Button, Modal, TextField } from 'components';
import { ModalProps } from 'components/Modal/Modal';
import { CardText as CardTextIcon } from 'styled-icons/bootstrap';

import { object, SchemaOf, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { FormEvent } from 'react';

type EditColumnForm = {
  columnName: string;
};

const validationSchema: SchemaOf<EditColumnForm> = object().shape({
  columnName: string().required('Please enter a name for the column')
});

type EditColumnModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  handleEditColumn: (columnName: string) => void;
  currentColumnTitle: string | undefined;
};

/**
 * Modal where the user can edit the name of a column
 */
export default function EditColumnModal({
  isOpen,
  onClose,
  handleEditColumn: handleAddTask,
  currentColumnTitle
}: EditColumnModalProps) {
  const { control, formState, handleSubmit } = useForm<EditColumnForm>({
    defaultValues: {
      columnName: currentColumnTitle || ''
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = handleSubmit((form) => {
    handleAddTask(form.columnName);
  });

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xsmall' title='Edit column'>
      <Modal.Content style={{ paddingBlock: '1rem' }}>
        <form onSubmit={onFormSubmit}>
          <Controller
            name='columnName'
            control={control}
            render={({ field, formState }) => (
              <TextField
                label='Column title'
                labelFor='task'
                onInput={field.onChange}
                value={field.value}
                error={formState.errors.columnName?.message}
                placeholder='My awesome new column'
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
          Edit column
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
