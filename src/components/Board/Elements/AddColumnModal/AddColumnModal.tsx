import { Button, Modal, TextField } from 'components';
import { ModalProps } from 'components/Modal/Modal';
import { LayoutColumn as ColumnIcon } from '@styled-icons/remix-fill';
import { object, SchemaOf, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { FormEvent } from 'react';

type AddColumnForm = {
  columnTitle: string;
};

const validationSchema: SchemaOf<AddColumnForm> = object().shape({
  columnTitle: string().required('Please enter a title for the column')
});

type AddColumnModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  handleAddColumn: (columnTitle: string) => void;
};

/**
 * Modal where the user can type a column name in order to create a column
 */
export default function AddColumnModal({ isOpen, onClose, handleAddColumn }: AddColumnModalProps) {
  const { control, formState, handleSubmit } = useForm<AddColumnForm>({
    defaultValues: {
      columnTitle: ''
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = handleSubmit((form) => {
    handleAddColumn(form.columnTitle);
  });

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xsmall' title='Add column'>
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
                placeholder='My awesome example column'
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
          Add column
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
