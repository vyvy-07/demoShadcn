import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';

import type { Category } from '@/interface/category';
import type { PropsGlobal } from '@/interface/propsGlobal';
import Link from 'next/link';
import { Input } from '../ui/input';
const Header = (dataCategory: PropsGlobal) => {
  const data = dataCategory.dataCategory;
  return (
    <header>
      <>
        <img srcSet="/images/banners/header.png 2x" alt="" />
      </>
      <div className="my-5 flex items-center justify-between border-[#393939] border-y-[1px]">
        <div className="flex items-center">
          <div className="w-5">
            <img src="/images/icons/menu.svg" alt="" />
          </div>
          <Menubar className="border-none rounded-none shadow-none ">
            {data &&
              Array.isArray(data) &&
              data?.slice(0, 6).map((item: Category, index) => (
                <MenubarMenu key={item?.id || index}>
                  <MenubarTrigger className="uppercase cursor-pointer">
                    {item?.name}
                  </MenubarTrigger>

                  <MenubarContent className="rounded-none bg-white border-0">
                    <MenubarSeparator />
                    {item?.subCates &&
                      item?.subCates?.map((subCateItem: Category, subIndex) => (
                        <MenubarItem key={subCateItem?.id || subIndex}>
                          <Link href={`${subCateItem?.alias}`}>
                            {subCateItem?.name}
                          </Link>
                        </MenubarItem>
                      ))}
                  </MenubarContent>
                </MenubarMenu>
              ))}
          </Menubar>
        </div>
        <div className="flex items-center gap-1">
          <Input
            placeholder="Tìm kiếm"
            className="block rounded-none focus-visible:--tw-ring-shadow-none border-none max-w-[300px]  outline-none  shadow-none"
          />
          |
          <img
            className="block w-6 h-6 "
            src="/images/icons/search.svg"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
