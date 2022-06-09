import Button from 'components/Button/Button';
import Modal, { ModalSizes } from 'components/Modal/Modal';
import { useState } from 'react';
import * as S from './Main.styles';

/**
 * Component that will have the content of the boilerplate
 */
export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<ModalSizes>('small');

  const open = (size: ModalSizes) => {
    setSize(size);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  return (
    <S.Wrapper>
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />

      <Button onClick={() => open('small')}>Open Small Modal</Button>

      <br />
      <Button onClick={() => open('medium')}>Open Medium Modal</Button>

      <br />
      <Button onClick={() => open('large')}>Open Large Modal</Button>

      <br />

      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />

      <Modal isOpen={isOpen} onClose={close} size={size} title='Editar perfil'>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>

        <h1>modaallllalalsalasl</h1>
        <Button onClick={close} color='danger'>
          Close modal
        </Button>
      </Modal>
    </S.Wrapper>
  );
}
