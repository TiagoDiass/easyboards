import useBoardStore from 'store/board/board.store';
import { Board } from 'types';

type UseCurrentBoardParams = {
  boardSlug: string;
};

type UseCurrentBoardResult = Board | null;

export default function useCurrentBoard({
  boardSlug
}: UseCurrentBoardParams): UseCurrentBoardResult {
  const boards = useBoardStore((store) => store.state.boards);

  const currentBoard = boards.find((board) => board.slug === boardSlug);

  return currentBoard || null;

  // tem que rever essa lógica aqui meu mano
}
