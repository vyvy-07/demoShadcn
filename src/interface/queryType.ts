export interface QueryType {
  limit?: number;
  skip?: number;
  isFeature?: boolean;
  sort?: string;

  tag?: string;

  categoryId?: string;
  type?: string;
  includeChildCate?: boolean;
  isRandomArrange?: boolean;
}
