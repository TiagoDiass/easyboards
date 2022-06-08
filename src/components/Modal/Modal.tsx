import * as S from './Modal.styles';

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
  children
}: ModalProps) {
  return isOpen ? (
    <S.Backdrop>
      <S.Wrapper size={size}>
        <S.Header>
          <h3 className='title'>{title}</h3>
        </S.Header>

        {children}
      </S.Wrapper>
    </S.Backdrop>
  ) : null;
}
