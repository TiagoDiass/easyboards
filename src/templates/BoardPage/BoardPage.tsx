import { Board, Breadcrumb, SidebarMenu } from 'components';
import { BoardMock } from 'components/Board/Board.mock';
import * as S from './BoardPage.styles';

type BoardPageProps = {
  boardSlug: string;
};

/**
 * Board page component
 */
export default function BoardPage({ boardSlug }: BoardPageProps) {
  const board = BoardMock;
  console.log(boardSlug);

  return (
    <S.Wrapper>
      <SidebarMenu />

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

        <Board board={board} />
      </S.BoardContent>
    </S.Wrapper>
  );
}
