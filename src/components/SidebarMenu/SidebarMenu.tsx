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
import { EditBoardModal, DeleteBoardConfirmationModal, HelpModal } from './Elements';
import { useHandleEditBoard, useHandleDeleteBoard } from './logic';
import AddBoardModal from 'components/Modals/AddBoardModal/AddBoardModal';
import useHandleAddBoard from 'logic/useHandleAddBoard/useHandleAddBoard';

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
  const boards = useBoardsList();
  const [currentBoard, setCurrentBoard] = useState<Board | null>(null);

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const expandSidebar = () => setIsSidebarExpanded(true);
  const collapseSidebar = () => setIsSidebarExpanded(false);

  const [isEditBoardModalOpen, openEditBoardModal, closeEditBoardModal] = useModalState();
  const [
    isDeleteBoardConfirmationModalOpen,
    openDeleteBoardConfirmationModal,
    closeDeleteBoardConfirmationModal
  ] = useModalState();
  const [isAddBoardModalOpen, openAddBoardModal, closeAddBoardModal] = useModalState();
  const [isHelpModalOpen, openHelpModal, closeHelpModal] = useModalState();

  const handleEditBoard = useHandleEditBoard({
    boards: boards,
    closeEditBoardModal,
    setBoards: setBoards
  });

  const handleDeleteBoard = useHandleDeleteBoard({
    boards: boards,
    setBoards,
    closeDeleteBoardConfirmationModal
  });

  const handleAddBoard = useHandleAddBoard({
    boards,
    setBoards,
    closeAddBoardModal
  });

  return isSidebarExpanded ? (
    <S.Wrapper aria-label='Sidebar menu'>
      <S.CollapseButton title='Collapse sidebar' isSidebarExpanded={true} onClick={collapseSidebar}>
        <ChevronLeftIcon />
      </S.CollapseButton>

      <S.Logo>
        <Link href='/'>
          <a>
            <span className='blue'>Easy</span>
            <span className='secondary'>Boards</span>
          </a>
        </Link>
      </S.Logo>

      <S.BoardsListWrapper aria-label='Your boards list'>
        <S.BoardsListLabel>
          your boards
          <button className='add-board-button' title='Add new board' onClick={openAddBoardModal}>
            <PlusIcon />
          </button>
        </S.BoardsListLabel>

        <S.BoardsList>
          {boards.map((boardItem) => (
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
                      openDeleteBoardConfirmationModal();
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
        <Button fullWidth icon={<QuestionCircleIcon />} minimal onClick={openHelpModal}>
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

      {isAddBoardModalOpen && (
        <AddBoardModal
          isOpen={isAddBoardModalOpen}
          onClose={closeAddBoardModal}
          handleAddBoard={handleAddBoard}
        />
      )}

      {isHelpModalOpen && <HelpModal isOpen={isHelpModalOpen} onClose={closeHelpModal} />}
    </S.Wrapper>
  ) : (
    <S.CollapseButton title='Expand sidebar' isSidebarExpanded={false} onClick={expandSidebar}>
      <ChevronRightIcon />
    </S.CollapseButton>
  );
}
