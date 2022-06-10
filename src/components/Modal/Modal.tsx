import * as S from './Modal.styles';
import { Close as CloseIcon } from '@styled-icons/evil';
import { Button } from 'components';
import ModalContent from './Elements/Content';
import ModalFooter from './Elements/Footer';
import { DefaultTheme, StyledComponent } from 'styled-components';

export type ModalSizes = 'small' | 'medium' | 'large';

export type ModalProps = {
  title?: string;
  onClose?: () => void;
  size?: ModalSizes;
  isOpen?: boolean;
  children?: React.ReactNode;
};

interface CompoundedModal extends React.FunctionComponent<ModalProps> {
  /**
   * Compounded component that is used with the content of the Modal
   */
  Content: StyledComponent<'div', DefaultTheme>;

  /**
   * Compounded component that is used with the footer of the Modal
   */
  Footer: StyledComponent<'div', DefaultTheme>;
}

/**
 * Modal component
 */
const Modal: CompoundedModal = ({
  title = 'Atenção',
  size = 'medium',
  isOpen = false,
  children,
  onClose
}: ModalProps) => {
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

        {children}
      </S.Wrapper>
    </S.Backdrop>
  ) : null;
};

Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
