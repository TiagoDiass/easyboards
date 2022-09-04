import { Button, Modal, TextField } from 'components';
import { ModalProps } from 'components/Modal/Modal';
import { LayoutColumn as ColumnIcon } from '@styled-icons/remix-fill';

import { object, SchemaOf, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { FormEvent } from 'react';

type EditColumnForm = {
  columnTitle: string;
};

const validationSchema: SchemaOf<EditColumnForm> = object().shape({
  columnTitle: string().required('Please enter a title for the column')
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
  handleEditColumn,
  currentColumnTitle
}: EditColumnModalProps) {
  const { control, formState, handleSubmit } = useForm<EditColumnForm>({
    defaultValues: {
      columnTitle: currentColumnTitle || ''
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = handleSubmit((form) => {
    handleEditColumn(form.columnTitle);
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
            name='columnTitle'
            control={control}
            render={({ field, formState }) => (
              <TextField
                label='Column title'
                labelFor='column'
                onInput={field.onChange}
                value={field.value}
                error={formState.errors.columnTitle?.message}
                placeholder='My awesome new column'
                icon={<ColumnIcon />}
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
