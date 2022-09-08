import { Board, Breadcrumb } from 'components';
import * as S from './BoardPage.styles';
import useCurrentBoard from './logic/useCurrentBoard';
import Head from 'next/head';

type BoardPageProps = {
  boardSlug: string;
};

/**
 * Board page component
 */
export default function BoardPage({ boardSlug }: BoardPageProps) {
  const [board, setBoard] = useCurrentBoard({ boardSlug });

  if (!board) {
    return <h1>Sem board aqui bro</h1>;
  }

  return (
    <>
      <Head>
        <title>{board.title}</title>
      </Head>

      <S.BoardContent>
        <S.BoardContentTopSection>
          <Breadcrumb
            items={[
              {
                text: 'Your boards',
                to: '/'
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
    </>
  );
}
