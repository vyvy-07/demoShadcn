import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import type { category } from '@/interface/category';
import Link from 'next/link';
import { Input } from '../ui/input';
const Header = (dataCategory: any) => {
  const data = dataCategory?.dataCategory;
  return (
    <div>
      <>
        <img srcSet="/banners/header.png 2x" alt="" />
      </>
      <div className="my-5 flex items-center justify-between border-[#393939] border-y-[1px]">
        <div className="flex items-center">
          <div className="w-5">
            <img src="/icons/menu.svg" alt="" />
          </div>
          <Menubar className="border-none rounded-none shadow-none ">
            {data &&
              data?.slice(0, 6).map((item: category, index: number) => (
                <MenubarMenu key={item?.id || index}>
                  <MenubarTrigger className="uppercase cursor-pointer">
                    {item?.name}
                  </MenubarTrigger>

                  <MenubarContent className="rounded-none bg-white border-0">
                    <MenubarSeparator />
                    {item?.subCates?.length > 0 &&
                      item?.subCates?.map((subCateItem, subIndex) => (
                        <MenubarItem key={subCateItem?.id || subIndex}>
                          <Link href={subCateItem?.alias}>
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
          <img className="block w-6 h-6 " src="/icons/search.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
