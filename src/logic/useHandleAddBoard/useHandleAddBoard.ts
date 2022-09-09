import { BOARDS_KEY } from 'constants/local-storage-keys';
import { useRouter } from 'next/router';
import { Board } from 'types';
import convertStringToSlug from 'utils/convertStringToSlug/convertStringToSlug';
import { v4 as uuid } from 'uuid';

type UseHandleAddBoardParams = {
  boards: Board[];
  setBoards: (boards: Board[]) => void;
  closeAddBoardModal: () => void;
};

type HandleAddBoardParams = {
  boardTitle: string;
  startWithKanbanTemplate: boolean;
};

export default function useHandleAddBoard({
  boards,
  setBoards,
  closeAddBoardModal
}: UseHandleAddBoardParams) {
  const router = useRouter();

  return ({ boardTitle, startWithKanbanTemplate }: HandleAddBoardParams) => {
    const newBoard: Board = {
      id: uuid(),
      title: boardTitle,
      slug: convertStringToSlug(boardTitle),
      columns: startWithKanbanTemplate
        ? [
            {
              id: uuid(),
              title: 'To do ✏️',
              tasks: []
            },
            {
              id: uuid(),
              title: 'Doing 🔨',
              tasks: []
            },
            {
              id: uuid(),
              title: 'Done ✅',
              tasks: []
            }
          ]
        : []
    };

    const newBoards: Board[] = [...boards, newBoard];

    setBoards(newBoards);
    localStorage.setItem(BOARDS_KEY, JSON.stringify(newBoards));
    router.push(`/boards/${newBoard.slug}`);

    closeAddBoardModal();
  };
}
