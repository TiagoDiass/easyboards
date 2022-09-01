import { Board, Breadcrumb, SidebarMenu } from 'components';
import * as S from './BoardPage.styles';
import usePartialBoards from './logic/usePartialBoards';
import useCurrentBoard from './logic/useCurrentBoard';

type BoardPageProps = {
  boardSlug: string;
  toggleTheme: () => void;
};

/**
 * Board page component
 */
export default function BoardPage({ boardSlug, toggleTheme }: BoardPageProps) {
  const [board, setBoard] = useCurrentBoard({ boardSlug });

  if (!board) {
    return <h1>Sem board aqui bro</h1>;
  }

  return (
    <S.Wrapper>
      <SidebarMenu useBoardsList={usePartialBoards} toggleTheme={toggleTheme} />

      <S.BoardContent>
        <S.BoardContentTopSection>
          <Breadcrumb
            items={[
              {
                text: 'Your boards'
              },
              {
                text: board.title
              }
            ]}
          />

          <S.BoardTitle>{board.title}</S.BoardTitle>
        </S.BoardContentTopSection>

        <Board board={board} setBoard={setBoard} key={board.id} />
      </S.BoardContent>
    </S.Wrapper>
  );
}
