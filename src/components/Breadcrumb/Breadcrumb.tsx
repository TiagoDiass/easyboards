import * as S from './Breadcrumb.styles';
import { ChevronRight } from '@styled-icons/evil';

type BreadcrumbItem = {
  text: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

/**
 * Breadcrumb component
 */
export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <S.Wrapper>
      {items.map((breadcrumbItem, index, allItems) => {
        const isThisTheLastItem = index === allItems.length - 1;

        return (
          <S.Item key={breadcrumbItem.text}>
            <span>{breadcrumbItem.text}</span>

            {!isThisTheLastItem && <ChevronRight aria-label='Right arrow icon' />}
          </S.Item>
        );
      })}
    </S.Wrapper>
  );
}
