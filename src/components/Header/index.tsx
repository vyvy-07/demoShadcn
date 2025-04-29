import type { PropsGlobal } from '@/interface/propsGlobal';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '../ui/input';
import { NavigationMenuDemo } from './MenuHeader';
const Header = (dataCategory: PropsGlobal) => {
  const data = dataCategory?.dataCategory || [];
  return (
    <header>
      <Link href="/">
        <Image
          width={1280}
          height={100}
          src="/images/banners/header.png"
          alt="Vinh Long"
        />
        {/* <title>Vĩnh Long</title> */}
      </Link>
      <div className="my-5 flex items-center justify-between border-[#393939] border-y-[1px]">
        <div className="flex items-center">
          <div className="w-5">
            <img src="/images/icons/menu.svg" alt="" />
          </div>

          <NavigationMenuDemo data={data} />
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
