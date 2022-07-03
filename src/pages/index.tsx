import { Main } from 'components';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  router.push('/boards/initial-board');

  return <Main />;
}
