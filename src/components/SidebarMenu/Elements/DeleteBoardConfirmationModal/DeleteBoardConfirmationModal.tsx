import * as S from './DeleteBoardConfirmationModal.styles';
import { Button, TextField } from 'components';
import Modal, { ModalProps } from 'components/Modal/Modal';
import { Board as BoardIcon } from '@styled-icons/fluentui-system-regular';
import { Board } from 'types';
import { FormEvent, useState } from 'react';

type DeleteBoardConfirmationModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  handleDeleteBoard: () => void;
  currentBoard: Board;
};

export default function DeleteBoardConfirmationModal({
  isOpen,
  onClose,
  currentBoard,
  handleDeleteBoard
}: DeleteBoardConfirmationModalProps) {
  const [confirmationText, setConfirmationText] = useState('');

  const handleConfirmationTextInputChange = (value: string) => {
    setConfirmationText(value);
  };

  const isFormValid = confirmationText === currentBoard.slug;

  const handleSubmit = () => {
    if (isFormValid) handleDeleteBoard();
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xsmall' title='Delete board'>
      <Modal.Content style={{ paddingBlock: '1rem' }}>
        <form onSubmit={handleFormSubmit}>
          <S.ActionAbout data-testid='action-about'>
            Are you absolutely sure? This action <strong>cannot</strong> be undone.
            <br /> This will permanently delete the <strong>"{currentBoard.title}"</strong> board.
          </S.ActionAbout>

          <S.ActionLabel>
            Please type <strong>{currentBoard.slug}</strong> to confirm.
          </S.ActionLabel>

          <TextField
            labelFor='boardSlug'
            aria-label='Textfield for the confirmation text'
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onInput={handleConfirmationTextInputChange as any}
            value={confirmationText}
            icon={<BoardIcon />}
            autoComplete='off'
            autoFocus
          />
        </form>
      </Modal.Content>

      <Modal.Footer isButtonsRow>
        <Button onClick={onClose} color='primary'>
          Cancel
        </Button>

        <Button color='danger' outline disabled={!isFormValid} onClick={handleSubmit}>
          Yes, delete board
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
