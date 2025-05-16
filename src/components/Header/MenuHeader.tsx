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
import { formatCatePath, getLinkToCatePage } from '@/utils/utilitiesHandling';
import { navigationMenuTriggerStyle } from '../ui/navigation-menu';

export function NavigationMenuDemo({ data }: { data: Category[] }) {
  if (!data) return null;
  return (
    <>
      {data &&
        Array.isArray(data) &&
        data.slice(0, 6).map((item, index) => (
          <NavigationMenu key={item?.id || index} className="relative z-30">
            <NavigationMenuList>
              {item?.subCates && item?.subCates?.length > 0 ? (
                <NavigationMenuItem
                  className="menu-item relative"
                  key={item?.id || index}
                >
                  <NavigationMenuTrigger className="uppercase cursor-pointer hover:text-red-primary hover:transition-[0.03s] transition-[0.03s]">
                    <Link href={`${getLinkToCatePage(item?.alias || '')}`}>
                      {item?.name}
                    </Link>
                  </NavigationMenuTrigger>

                  {item?.subCates && item?.subCates.length > 0 && (
                    <NavigationMenuContent className=" whitespace-nowrap bg-white ">
                      <ul className="w-full border-0 ">
                        {item.subCates.map(
                          (subCateItem: Category, subIndex) => {
                            return (
                              <li
                                key={subCateItem?.id || subIndex}
                                className="hover:bg-red-hover px-3 py-2"
                              >
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={`${getLinkToCatePage(
                                      // subCateItem?.displayType,
                                      subCateItem?.alias || ''
                                    )}`}
                                  >
                                    {subCateItem?.name}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem>
                  <Link
                    href={`${formatCatePath('', item?.alias)}`}
                    className="uppercase cursor-pointer hover:text-red-primary hover:transition-[0.03s] transition-[0.03s]"
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item?.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        ))}
    </>
  );
}
