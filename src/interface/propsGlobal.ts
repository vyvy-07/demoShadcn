import type { ReactNode } from 'react';
import type { LayoutType } from './layoutPage';
// import type { Article } from './articleProps';
import type { Category } from './category';
export interface Article {
  id?: string;
  title?: string;

  publicationTime?: number | undefined;
  hasSapo?: boolean;
  sapo?: string;
  excerpt?: string;
  featuredImage?: string;
  featuredMedia?: {
    id?: string;
    alt?: string;
    name?: string;
    description?: string;
    type?: string;
    resolutions?: { medium: { uri: string } };
  };
  category?: {
    categoryId?: string;
    categoryAlias?: string;
    categoryName?: string;
    // parentCates?: [];
  };
  penName?: string;
  copyright?: string;
  alterCateIds?: [];
  trash?: boolean;
  hasAudio?: string;
  // articleGA?: { DAY?: [{}]; HOUR?: {} };
}

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
