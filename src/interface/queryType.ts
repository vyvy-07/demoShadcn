export interface QueryType {
  limit?: number;
  skip?: number;
  title?: string;
  isFeature?: boolean;
  sort?: string;
  cateId?: string;
  cateAlias?: string;
  tag?: string;
  listType?: string;
  categoryId?: string;
  type?: string;
  includeChildCate?: boolean;
  isRandomArrange?: boolean;
  randomArrange?: boolean;
  detailAlias?: string;
  preview?: boolean;
  params?: { preview?: boolean };
}
