import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import * as S from './Main.styles';

/**
 * Component that will have the content of the boilerplate
 */
export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <S.Wrapper>
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
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />

      <Button onClick={open}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={close}>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
        <h1>modaallllalalsalasl</h1>
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
