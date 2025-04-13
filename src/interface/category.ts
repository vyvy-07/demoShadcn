export interface category {
  id: string;
  name: string;
  alias: string;
  isDisplayOnMenu: boolean;
  parentId: string;
  subCates: [
    {
      id: string;
      name: string;
      alias: string;
      isDisplayOnMenu: boolean;
      parentId: string;
    }
  ];
}
