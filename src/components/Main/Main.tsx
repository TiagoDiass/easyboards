import Button from 'components/Button/Button';
import ConfirmationModal from 'components/ConfirmationModal/ConfirmationModal';
import { useModalState } from 'hooks';
import useBoardStore from 'store/board/board.store';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import * as S from './Main.styles';

/**
 * Component that will have the content of the boilerplate
 */
export default function Main() {
  const [isOpen, open, close] = useModalState();
  const useBoardsList = () => {
    const partialBoards = useBoardStore((store) => store.state.partialBoards);

    return partialBoards;
  };

  return (
    <div style={{ display: 'flex' }}>
      <SidebarMenu useBoardsList={useBoardsList} />

      <S.Wrapper>
        <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />

        <Button onClick={open}>Open Modal</Button>

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
    </div>
  );
}
