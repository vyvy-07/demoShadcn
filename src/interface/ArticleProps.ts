export interface Article {
  id?: string;
  title?: string;
  className?: string;
  changeColor?: boolean;
  cateAlias?: string;
  hasCate?: boolean;
  hasDate?: boolean;
  publicationTime: number;
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
    parentCates?: [];
  };
  penName?: string;
  copyright?: string;
  alterCateIds?: [];
  trash?: boolean;
  hasAudio?: string;
  articleGA?: { DAY?: [{}]; HOUR?: {} };
}
