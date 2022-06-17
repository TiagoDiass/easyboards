import * as S from './DropdownMenu.styles';
import { DotsHorizontal } from '@styled-icons/heroicons-outline';
import { useState } from 'react';

/**
 * Dropdown menu component
 */
export default function DropdownMenu() {
  const [, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  // const closeMenu = () => setIsMenuOpen(false);

  return (
    <S.Wrapper>
      <S.MenuButton minimal icon={<DotsHorizontal />} onClick={openMenu} />

      <S.MenuListWrapper>
        <S.MenuList>
          <S.MenuItem>Download</S.MenuItem>
          <S.MenuItem>Create a Copy</S.MenuItem>
          <S.MenuItem>Mark as Draft</S.MenuItem>
          <S.MenuItem>Delete</S.MenuItem>
          <S.MenuItem>Attend a Workshop</S.MenuItem>
        </S.MenuList>
      </S.MenuListWrapper>
    </S.Wrapper>
  );
}
