import Button from 'components/Button/Button';
import ConfirmationModal from 'components/ConfirmationModal/ConfirmationModal';
import { useState } from 'react';
import * as S from './Main.styles';

/**
 * Component that will have the content of the boilerplate
 */
export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  return (
    <S.Wrapper>
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />

      <Button onClick={open}>Open Small Modal</Button>

      <br />
      <Button onClick={open}>Open Medium Modal</Button>

      <br />
      <Button onClick={open}>Open Large Modal</Button>

      <br />

      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />

      <ConfirmationModal
        isOpen={isOpen}
        onClose={close}
        title='Are you sure?'
        content={
          <>
            You <strong>won't</strong> be able to revert this action
          </>
        }
        cancelButtonProps={{
          children: "No, I'm not sure"
        }}
        confirmButtonProps={{
          color: 'danger',
          children: 'Yes, delete location'
        }}
      />
    </S.Wrapper>
  );
}
