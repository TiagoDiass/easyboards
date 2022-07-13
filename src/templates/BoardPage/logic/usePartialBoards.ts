import useBoardStore from 'store/board/board.store';
import { PartialBoard } from 'types';

export default function usePartialBoards(): PartialBoard[] {
  const partialBoards = useBoardStore((store) => store.state.partialBoards);

  return partialBoards;
}
