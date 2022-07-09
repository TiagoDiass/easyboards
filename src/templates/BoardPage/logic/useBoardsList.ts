import useBoardStore from 'store/board/board.store';
import { PartialBoard } from 'types';

export default function useBoardsList(): PartialBoard[] {
  const partialBoards = useBoardStore((store) => store.state.partialBoards);

  return partialBoards;
}
