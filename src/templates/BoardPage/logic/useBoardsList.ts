import useBoardStore from 'store/board/board.store';
import { Board } from 'types';

export default function useBoardsList(): Board[] {
  const boards = useBoardStore((store) => store.state.boards);

  return boards;
}
