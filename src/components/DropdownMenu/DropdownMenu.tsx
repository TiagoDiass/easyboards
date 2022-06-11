import * as S from './DropdownMenu.styles';
import { DotsHorizontal } from '@styled-icons/heroicons-outline';

/**
 * Dropdown menu component
 */
export default function DropdownMenu() {
  return (
    <S.Wrapper>
      <S.MenuButton minimal icon={<DotsHorizontal />} />

      <S.MenuList>
        <S.MenuItem>Download</S.MenuItem>
        <S.MenuItem>Create a Copy</S.MenuItem>
        <S.MenuItem>Mark as Draft</S.MenuItem>
        <S.MenuItem>Delete</S.MenuItem>
        <S.MenuItem>Attend a Workshop</S.MenuItem>
      </S.MenuList>
    </S.Wrapper>
  );
}
