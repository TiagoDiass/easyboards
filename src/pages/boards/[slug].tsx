import { useRouter } from 'next/router';
import BoardPageTemplate from 'templates/BoardPage/BoardPage';

type BoardProps = {
  toggleTheme: () => void;
};

export default function Board({ toggleTheme }: BoardProps) {
  const router = useRouter();
  const boardSlug = router.query.slug as string;

  return <BoardPageTemplate boardSlug={boardSlug} toggleTheme={toggleTheme} />;
}
