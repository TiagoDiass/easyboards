import * as S from './SidebarMenu.styles';
import {
  ChevronsLeft as ChevronLeftIcon,
  ChevronsRight as ChevronRightIcon,
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
import { useState } from 'react';
import Link from 'next/link';
import { PartialBoard } from 'types';

export type SidebarMenuProps = {
  /**
   * Function that returns the a list of PartialBoard objects to be shown in the sidebar
   */
  useBoardsList: () => PartialBoard[];
};

/**
 * Component that will be used as a menu in the app
 */
export default function SidebarMenu({ useBoardsList }: SidebarMenuProps) {
  const boardsList = useBoardsList();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const expandSidebar = () => setIsSidebarExpanded(true);
  const collapseSidebar = () => setIsSidebarExpanded(false);

  return isSidebarExpanded ? (
    <S.Wrapper aria-label='Sidebar menu'>
      <S.CollapseButton title='Collapse sidebar' isSidebarExpanded={true} onClick={collapseSidebar}>
        <ChevronLeftIcon />
      </S.CollapseButton>

      <S.Logo>
        <span className='blue'>React</span>
        <span className='secondary'>Trello</span>
      </S.Logo>

      <S.BoardsListWrapper aria-label='Your boards list'>
        <S.BoardsListLabel>
          your boards
          <button className='add-board-button' title='Add new board'>
            <PlusIcon />
          </button>
        </S.BoardsListLabel>

        <S.BoardsList>
          {boardsList.map((boardItem) => (
            <S.BoardsListItem key={boardItem.id}>
              <Link href={`/boards/${boardItem.slug}`}>
                <a>
                  <BoardIcon />
                  {boardItem.title}
                </a>
              </Link>

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
            </S.BoardsListItem>
          ))}
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
  ) : (
    <S.CollapseButton title='Expand sidebar' isSidebarExpanded={false} onClick={expandSidebar}>
      <ChevronRightIcon />
    </S.CollapseButton>
  );
}
