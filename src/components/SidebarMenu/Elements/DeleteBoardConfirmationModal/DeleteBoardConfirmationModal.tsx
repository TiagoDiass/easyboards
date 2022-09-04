import * as S from './DeleteBoardConfirmationModal.styles';
import { Button, TextField } from 'components';
import Modal, { ModalProps } from 'components/Modal/Modal';
import { Board as BoardIcon } from '@styled-icons/fluentui-system-regular';
import { Board } from 'types';

type DeleteBoardConfirmationModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  handleDeleteBoard: () => void;
  currentBoard: Board;
};

export default function DeleteBoardConfirmationModal({
  isOpen,
  onClose,
  currentBoard
}: DeleteBoardConfirmationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xsmall' title='Delete board'>
      <Modal.Content style={{ paddingBlock: '1rem' }}>
        <form onSubmit={() => {}}>
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
            // onInput={field.onChange}
            // value={field.value}
            // error={formState.errors.boardTitle?.message}
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

        <Button color='danger' outline disabled={true} onClick={() => {}}>
          Yes, delete board
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
