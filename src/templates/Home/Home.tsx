import { Button } from 'components';
import Head from 'next/head';
import Link from 'next/link';
import useBoardStore from 'store/board/board.store';
import { PlusCircleFill as PlusIcon } from '@styled-icons/bootstrap';
import * as S from './Home.styles';
import { useModalState } from 'hooks';
import useHandleAddBoard from 'logic/useHandleAddBoard/useHandleAddBoard';
import AddBoardModal from 'components/Modals/AddBoardModal/AddBoardModal';

export default function Home() {
  const boards = useBoardStore((store) => store.state.boards);
  const setBoards = useBoardStore((store) => store.actions.setBoardsAndPartialBoards);
  const [isAddBoardModalOpen, openAddBoardModal, closeAddBoardModal] = useModalState();

  const handleAddBoard = useHandleAddBoard({
    boards,
    setBoards,
    closeAddBoardModal
  });

  return (
    <>
      <Head>
        <title>EasyBoards | Home</title>
      </Head>

      <S.Wrapper>
        <S.Title>
          👋 Hey! Welcome to <strong>EasyBoards</strong>
        </S.Title>

        <S.Description>
          With this app, you can <strong>easily</strong> manage your tasks by creating specific
          boards to specific contexts, separating them into columns and task cards.
        </S.Description>

        {boards.length > 0 ? (
          <S.SelectBoardWrapper>
            <span className='select-a-board-text'>
              Select a board to start managing your tasks 😉
            </span>

            <ul className='boards-list'>
              {boards.map((board) => (
                <li className='boards-list-item' key={board.id}>
                  <Link href={`/boards/${board.slug}`}>
                    <a>{board.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </S.SelectBoardWrapper>
        ) : (
          <S.CreateABoardWrapper>
            <span className='no-boards-text'>It seems you have no boards yet 😕</span>

            <Button color='success' size='medium' icon={<PlusIcon />} onClick={openAddBoardModal}>
              Create a new board
            </Button>
          </S.CreateABoardWrapper>
        )}
      </S.Wrapper>

      {isAddBoardModalOpen && (
        <AddBoardModal
          isOpen={isAddBoardModalOpen}
          onClose={closeAddBoardModal}
          handleAddBoard={handleAddBoard}
        />
      )}
    </>
  );
}
