import { Board, Breadcrumb, SidebarMenu } from 'components';
import * as S from './BoardPage.styles';
import useBoardsList from './logic/useBoardsList';
import useCurrentBoard from './logic/useCurrentBoard';
import useBoardStore from 'store/board/board.store';
import Head from 'next/head';

type BoardPageProps = {
  boardSlug: string;
  toggleTheme: () => void;
};

/**
 * Board page component
 */
export default function BoardPage({ boardSlug, toggleTheme }: BoardPageProps) {
  const [board, setBoard] = useCurrentBoard({ boardSlug });
  const setBoardsAndPartialBoards = useBoardStore(
    (store) => store.actions.setBoardsAndPartialBoards
  );

  if (!board) {
    return <h1>Sem board aqui bro</h1>;
  }

  return (
    <>
      <Head>
        <title>{board.title}</title>
      </Head>

      <S.Wrapper>
        <SidebarMenu
          useBoardsList={useBoardsList}
          toggleTheme={toggleTheme}
          setBoards={setBoardsAndPartialBoards}
        />

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
    </>
  );
}
