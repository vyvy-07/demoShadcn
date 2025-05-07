// 'use client';

import type { Category } from '@/interface/category';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './MenuBarShadcn';

export function NavigationMenuDemo({ data }: { data: Category[] }) {
  if (!data) return null;
  return (
    <>
      {data &&
        Array.isArray(data) &&
        data.slice(0, 6).map((item, index) => (
          <NavigationMenu key={item?.id || index}>
            <NavigationMenuList>
              <NavigationMenuItem
                className="menu-item relative"
                key={item?.id || index}
              >
                <NavigationMenuTrigger className="uppercase cursor-pointer hover:text-red-primary hover:transition-[0.03s] transition-[0.03s]">
                  <Link href={`${item?.alias || '#'}`}>{item?.name}</Link>
                </NavigationMenuTrigger>

                <NavigationMenuContent className=" whitespace-nowrap bg-white ">
                  {item?.subCates && item?.subCates.length > 0 && (
                    <ul className="w-full border-0 ">
                      {item.subCates.map((subCateItem, subIndex) => (
                        <li
                          key={subCateItem?.id || subIndex}
                          className="hover:bg-red-hover px-3 py-2"
                        >
                          <NavigationMenuLink asChild>
                            <Link href={`${subCateItem?.alias || '#'}`}>
                              {subCateItem?.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ))}
    </>
  );
}
