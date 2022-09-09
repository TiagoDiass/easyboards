import { useRouter } from 'next/router';
import BoardPageTemplate from 'templates/BoardPage/BoardPage';

export default function Board() {
  const router = useRouter();
  const boardSlug = router.query.slug as string;

  return <BoardPageTemplate boardSlug={boardSlug} />;
}
