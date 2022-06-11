import { Modal, Button } from 'components';
import { ButtonProps } from 'components/Button/Button';
import { ModalProps } from 'components/Modal/Modal';
import * as S from './ConfirmationModal.styles';

export type ConfirmationModalProps = Pick<ModalProps, 'isOpen' | 'onClose' | 'title'> & {
  confirmButtonProps?: Pick<ButtonProps, 'color' | 'children' | 'disabled' | 'onClick'>;
  cancelButtonProps?: Pick<ButtonProps, 'color' | 'children'>;
  content: React.ReactNode;
};

/**
 * Modal used to confirm some user action
 */
export default function ConfirmationModal({
  title,
  isOpen,
  onClose,
  confirmButtonProps,
  cancelButtonProps,
  content
}: ConfirmationModalProps) {
  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose} size='xsmall'>
      <Modal.Content>
        <S.MessageWrapper>
          <S.ConfirmationMessage>{content}</S.ConfirmationMessage>
        </S.MessageWrapper>
      </Modal.Content>

      <Modal.Footer>
        <S.ButtonsRow>
          <Button
            onClick={onClose}
            {...cancelButtonProps}
            color={cancelButtonProps?.color || 'primary'}
          />

          <Button {...confirmButtonProps} color={confirmButtonProps?.color || 'danger'} />
        </S.ButtonsRow>
      </Modal.Footer>
    </Modal>
  );
}
