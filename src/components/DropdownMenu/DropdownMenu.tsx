import * as S from './DropdownMenu.styles';
import { DotsHorizontal } from '@styled-icons/heroicons-outline';
import { useRef, useState } from 'react';
import { useOutsideClick } from 'hooks';

type DropdownMenuItem = {
  onClick?: () => void;
  text: string;
  icon?: React.ReactNode;
};

type DropdownMenuProps = {
  items: DropdownMenuItem[];
};

/**
 * Dropdown menu component
 */
export default function DropdownMenu({ items }: DropdownMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const menuRef = useRef(null);

  const handleOpenCloseMenu = () => {
    isMenuOpen ? closeMenu() : openMenu();
  };

  useOutsideClick(menuRef, closeMenu);

  const handleItemClick = (item: DropdownMenuItem) => {
    if (item.onClick) item.onClick();

    closeMenu();
  };

  return (
    <S.Wrapper ref={menuRef}>
      <S.MenuButton minimal icon={<DotsHorizontal />} onClick={handleOpenCloseMenu} />

      <S.MenuListWrapper isOpen={isMenuOpen}>
        <S.MenuList>
          {items.map((item, index) => (
            <S.MenuItem key={index} onClick={() => handleItemClick(item)}>
              {!!item.icon && item.icon}
              {item.text}
            </S.MenuItem>
          ))}
        </S.MenuList>
      </S.MenuListWrapper>
    </S.Wrapper>
  );
}
