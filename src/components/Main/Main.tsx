import Button from 'components/Button/Button';
import ConfirmationModal from 'components/ConfirmationModal/ConfirmationModal';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import { useModalState } from 'hooks';
import { Pencil as PencilIcon, Trash as TrashIcon } from '@styled-icons/evil';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import * as S from './Main.styles';

/**
 * Component that will have the content of the boilerplate
 */
export default function Main() {
  const [isOpen, open, close] = useModalState();

  return (
    <div style={{ display: 'flex' }}>
      <SidebarMenu />

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

        <DropdownMenu
          items={[
            {
              icon: <PencilIcon />,
              text: 'Edit task',
              onClick: () => console.log('EDIT TASK')
            },
            {
              icon: <TrashIcon />,
              text: 'Delete task',
              onClick: () => console.log('DELETE TASK')
            }
          ]}
        />
      </S.Wrapper>
    </div>
  );
}
