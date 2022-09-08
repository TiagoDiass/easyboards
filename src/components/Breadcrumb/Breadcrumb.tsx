import * as S from './Breadcrumb.styles';
import { ChevronRight } from '@styled-icons/evil';
import Link from 'next/link';

type BreadcrumbItem = {
  text: string;
  to?: string;
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
            {!breadcrumbItem.to ? (
              <span>{breadcrumbItem.text}</span>
            ) : (
              <Link href={breadcrumbItem.to}>
                <a>{breadcrumbItem.text}</a>
              </Link>
            )}

            {!isThisTheLastItem && <ChevronRight aria-label='Right arrow icon' />}
          </S.Item>
        );
      })}
    </S.Wrapper>
  );
}
