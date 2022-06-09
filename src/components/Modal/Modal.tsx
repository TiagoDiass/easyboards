import * as S from './Modal.styles';
import { Close as CloseIcon } from '@styled-icons/evil';
import { Button } from 'components';

export type ModalSizes = 'small' | 'medium' | 'large';

export type ModalProps = {
  title?: string;
  onClose: () => void;
  size?: ModalSizes;
  isOpen: boolean;
  children?: React.ReactNode;
};

/**
 * Modal component
 */
export default function Modal({
  title = 'Atenção',
  size = 'medium',
  isOpen,
  children,
  onClose
}: ModalProps) {
  return isOpen ? (
    <S.Backdrop>
      <S.Wrapper size={size}>
        <S.Header>
          <h3 className='title'>{title}</h3>

          <Button
            className='close-button'
            icon={<CloseIcon />}
            aria-label='Close modal'
            onClick={onClose}
          />
        </S.Header>

        {/* i think a good approach is to create some componentes and here ill only render the children
        
        
          when people want to use the modal, theyll do

          <Modal>
            <Modal.Content>
              The content goes here
            </Modal.Content>
          
            <Modal.Footer>
              The footer goes here, for example we could have two buttons
            </Modal.Footer>
          </Modal>

          basically, the Content will only have a flex-grow set to 1 and some padding

          the footer will have padding
        */}

        <S.ContentWrapper>{children}</S.ContentWrapper>
      </S.Wrapper>
    </S.Backdrop>
  ) : null;
}
