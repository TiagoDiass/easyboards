import * as S from './AddBoardModal.styles';
import { Button, Modal, TextField, Checkbox } from 'components';
import { ModalProps } from 'components/Modal/Modal';

import {
  QuestionCircle as QuestionCircleIcon,
  Board as BoardIcon
} from '@styled-icons/fluentui-system-regular';
import { boolean, object, SchemaOf, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { FormEvent } from 'react';

type AddBoardForm = {
  boardTitle: string;
  startWithKanbanTemplate?: boolean;
};

const validationSchema: SchemaOf<AddBoardForm> = object().shape({
  boardTitle: string().required('Please enter a title for the board'),
  startWithKanbanTemplate: boolean()
});

type AddBoardModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  handleAddBoard: (params: { boardTitle: string; startWithKanbanTemplate: boolean }) => void;
};

/**
 * Modal where the user can type a board title in order to create a board
 */
export default function AddBoardModal({ isOpen, onClose, handleAddBoard }: AddBoardModalProps) {
  const { control, formState, handleSubmit } = useForm<AddBoardForm>({
    defaultValues: {
      boardTitle: '',
      startWithKanbanTemplate: true
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = handleSubmit((form) => {
    handleAddBoard({
      boardTitle: form.boardTitle,
      startWithKanbanTemplate: !!form.startWithKanbanTemplate
    });
  });

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xsmall' title='Add board'>
      <Modal.Content style={{ paddingBlock: '1rem' }}>
        <S.Form onSubmit={onFormSubmit}>
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
                placeholder='My awesome new board'
                icon={<BoardIcon />}
                autoComplete='off'
                autoFocus
              />
            )}
          />

          <S.CheckboxWrapper>
            <Controller
              name='startWithKanbanTemplate'
              control={control}
              render={({ field }) => (
                <Checkbox
                  label='Start with a Kanban template'
                  labelFor='startWithKanbanTemplate'
                  isChecked={field.value}
                  onCheck={field.onChange}
                />
              )}
            />

            <span
              className='help'
              title='By checking this checkbox, your new board will be created with three columns based
              on the Kanban standard'
            >
              <QuestionCircleIcon />
            </span>
          </S.CheckboxWrapper>
        </S.Form>
      </Modal.Content>

      <Modal.Footer isButtonsRow>
        <Button onClick={onClose} color='primary'>
          Cancel
        </Button>

        <Button color='success' disabled={!formState.isValid} onClick={onSubmit}>
          Add board
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
