import { Button, Modal, TextField } from 'components';
import { ModalProps } from 'components/Modal/Modal';
import { Board as BoardIcon } from '@styled-icons/fluentui-system-regular';

import { object, SchemaOf, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { FormEvent } from 'react';

type EditBoardForm = {
  boardTitle: string;
};

const validationSchema: SchemaOf<EditBoardForm> = object().shape({
  boardTitle: string().required('Please enter a title for the board')
});

type EditBoardModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  handleEditBoard: (boardTitle: string) => void;
  currentBoardTitle: string | undefined;
};

/**
 * Modal where the user can edit the name of a board
 */
export default function EditBoardModal({
  isOpen,
  onClose,
  handleEditBoard,
  currentBoardTitle
}: EditBoardModalProps) {
  const { control, formState, handleSubmit } = useForm<EditBoardForm>({
    defaultValues: {
      boardTitle: currentBoardTitle || ''
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = handleSubmit((form) => {
    handleEditBoard(form.boardTitle);
  });

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xsmall' title='Edit board'>
      <Modal.Content style={{ paddingBlock: '1rem' }}>
        <form onSubmit={onFormSubmit}>
          <Controller
            name='boardTitle'
            control={control}
            render={({ field, formState }) => (
              <TextField
                label='Board title'
                labelFor='board'
                onInput={field.onChange}
                value={field.value}
                error={formState.errors.boardTitle?.message}
                placeholder='My awesome board'
                icon={<BoardIcon />}
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
          Edit board
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
