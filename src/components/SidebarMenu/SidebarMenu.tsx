import * as S from './SidebarMenu.styles';
import {
  ChevronsLeft as ChevronLeftIcon,
  ChevronsRight as ChevronRightIcon,
  // Settings as SettingsIcon,
  Plus as PlusIcon
} from '@styled-icons/feather';
import {
  QuestionCircle as QuestionCircleIcon,
  Board as BoardIcon
} from '@styled-icons/fluentui-system-regular';
import { Pencil as PencilIcon, Trash as TrashIcon } from '@styled-icons/evil';
import { DarkTheme as ThemesIcon } from '@styled-icons/fluentui-system-regular';

import { Button } from 'components';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import { useState } from 'react';
import Link from 'next/link';
import { Board } from 'types';
import { useModalState } from 'hooks';
import EditBoardModal from './Elements/EditBoardModal/EditBoardModal';
import useHandleEditBoard from './logic/useHandleEditBoard/useHandleEditBoard';
import useHandleDeleteBoard from './logic/useHandleDeleteBoard/useHandleDeleteBoard';
import DeleteBoardConfirmationModal from './Elements/DeleteBoardConfirmationModal/DeleteBoardConfirmationModal';

export type SidebarMenuProps = {
  /**
   * Function that returns a list of PartialBoard objects to be shown in the sidebar
   */
  useBoardsList: () => Board[];

  setBoards: (boards: Board[]) => void;

  /**
   * Function used to change the application's theme between light and dark themes
   */
  toggleTheme: () => void;
};

/**
 * Component that will be used as a menu in the app
 */
export default function SidebarMenu({ useBoardsList, toggleTheme, setBoards }: SidebarMenuProps) {
  const boardsList = useBoardsList();
  const [currentBoard, setCurrentBoard] = useState<Board | null>(null);

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const expandSidebar = () => setIsSidebarExpanded(true);
  const collapseSidebar = () => setIsSidebarExpanded(false);

  const [isEditBoardModalOpen, openEditBoardModal, closeEditBoardModal] = useModalState();
  const [
    isDeleteBoardConfirmationModalOpen,
    openDeleteBoardConfirmationModalOpen,
    closeDeleteBoardConfirmationModal
  ] = useModalState();

  const handleEditBoard = useHandleEditBoard({
    boards: boardsList,
    closeEditBoardModal,
    setBoards: setBoards
  });

  const handleDeleteBoard = useHandleDeleteBoard({
    boards: boardsList,
    setBoards,
    closeDeleteBoardConfirmationModal
  });

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
                    onClick: () => {
                      setCurrentBoard(boardItem);
                      openEditBoardModal();
                    }
                  },
                  {
                    icon: <TrashIcon />,
                    text: 'Delete board',
                    onClick: () => {
                      setCurrentBoard(boardItem);
                      openDeleteBoardConfirmationModalOpen();
                    }
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

        {/* <Button fullWidth icon={<SettingsIcon />} minimal>
          Settings
        </Button> */}

        <Button fullWidth icon={<ThemesIcon />} minimal onClick={toggleTheme}>
          Toggle theme
        </Button>
      </S.SecondaryOptions>

      {isEditBoardModalOpen && (
        <EditBoardModal
          isOpen={isEditBoardModalOpen}
          onClose={closeEditBoardModal}
          handleEditBoard={(boardTitle) => handleEditBoard(currentBoard!.id, boardTitle)}
          currentBoardTitle={currentBoard?.title}
        />
      )}

      {isDeleteBoardConfirmationModalOpen && (
        <DeleteBoardConfirmationModal
          isOpen={isDeleteBoardConfirmationModalOpen}
          onClose={closeDeleteBoardConfirmationModal}
          currentBoard={currentBoard!}
          handleDeleteBoard={() => handleDeleteBoard(currentBoard!.id)}
        />
      )}
    </S.Wrapper>
  ) : (
    <S.CollapseButton title='Expand sidebar' isSidebarExpanded={false} onClick={expandSidebar}>
      <ChevronRightIcon />
    </S.CollapseButton>
  );
}
