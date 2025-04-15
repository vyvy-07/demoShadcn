import type { ReactNode } from 'react';
import type { LayoutType } from './layoutPage';
import type { Article } from './articleProps';
import type { Category } from './category';

export interface PropsGlobal {
  id?: string;
  title?: string;
  url?: string;
  posts?: Article[];
  layoutPage?: LayoutType;
  lineBreak?: boolean;
  hasModifiedFirstPost?: boolean;
  hasContent?: string;
  children?: ReactNode;
  hasMiniArticle?: boolean;
  className?: string;
  changeColor?: boolean;
  cateAlias?: string;
  hasCate?: boolean;
  hasDate?: boolean;
  hasSapo?: boolean;

  titleStyle?: string;
  dateStyle?: string;
  cateStyle?: string;
  subtitleStyle?: string;
  sapoStyle?: string;
  align?: string;
  dataArticle?: Article;
  dataCategory?: Category[];
  postsSide?: Article[];
}
