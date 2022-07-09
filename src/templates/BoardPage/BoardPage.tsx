import { Board, Breadcrumb, SidebarMenu } from 'components';
import * as S from './BoardPage.styles';
import useBoardsList from './logic/useBoardsList';
import useCurrentBoard from './logic/useCurrentBoard';

type BoardPageProps = {
  boardSlug: string;
};

/**
 * Board page component
 */
export default function BoardPage({ boardSlug }: BoardPageProps) {
  const board = useCurrentBoard({ boardSlug });

  if (!board) {
    return <h1>Sem board aqui bro</h1>;
  }

  return (
    <S.Wrapper>
      <SidebarMenu useBoardsList={useBoardsList} />

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
