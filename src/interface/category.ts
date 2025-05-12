export interface Category {
  id?: string;
  name?: string;
  alias?: string;
  type?: string;
  isDisplayOnMenu?: boolean;
  parentId?: string;
  displayType?: string;
  subCates?: [
    {
      id?: string;
      name?: string;
      alias?: string;
      isDisplayOnMenu?: boolean;
      parentId?: string;
      type?: string;
      subCates?: [
        {
          id?: string;
          type?: string;
          name?: string;
          alias?: string;
          isDisplayOnMenu?: boolean;
          parentId?: string;
        }
      ];
    }
  ];
}
