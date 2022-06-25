import * as S from './SidebarMenu.styles';
import {
  ChevronsLeft as ChevronLeftIcon,
  Settings as SettingsIcon,
  Plus as PlusIcon
} from '@styled-icons/feather';
import {
  QuestionCircle as QuestionCircleIcon,
  Board as BoardIcon
} from '@styled-icons/fluentui-system-regular';
import { Pencil as PencilIcon, Trash as TrashIcon } from '@styled-icons/evil';

import { Button } from 'components';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';

const Dropdown = () => (
  <DropdownMenu
    items={[
      {
        icon: <PencilIcon />,
        text: 'Edit board',
        onClick: () => console.log('EDIT TASK')
      },
      {
        icon: <TrashIcon />,
        text: 'Delete board',
        onClick: () => console.log('DELETE TASK')
      }
    ]}
    ariaLabel='Board related actions'
  />
);

/**
 * Component that will be used as a menu in the app
 */
export default function SidebarMenu() {
  return (
    <S.Wrapper>
      <S.CollapseButton title='Collapse sidebar'>
        <ChevronLeftIcon />
      </S.CollapseButton>

      <S.Logo>
        <span className='blue'>React</span>
        <span className='secondary'>Trello</span>
      </S.Logo>

      <S.BoardsListWrapper>
        <S.BoardListLabel>
          your boards
          <button className='add-board-button' title='Add new board'>
            <PlusIcon />
          </button>
        </S.BoardListLabel>

        <S.BoardsList>
          <S.BoardsListItem>
            <a href='#'>
              <BoardIcon />
              Work
            </a>

            <Dropdown />
          </S.BoardsListItem>

          <S.BoardsListItem>
            <a href='#'>
              <BoardIcon />
              Cool project
            </a>

            <Dropdown />
          </S.BoardsListItem>

          <S.BoardsListItem>
            <a href='#'>
              <BoardIcon />
              iOS App
            </a>

            <Dropdown />
          </S.BoardsListItem>
        </S.BoardsList>
      </S.BoardsListWrapper>

      <S.SecondaryOptions>
        <Button fullWidth icon={<QuestionCircleIcon />} minimal>
          Help
        </Button>

        <Button fullWidth icon={<SettingsIcon />} minimal>
          Settings
        </Button>
      </S.SecondaryOptions>
    </S.Wrapper>
  );
}
