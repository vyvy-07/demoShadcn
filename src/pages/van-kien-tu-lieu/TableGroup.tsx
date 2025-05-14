import { Input } from '@/components/ui/input';
import type { DocxType } from '@/interface/propsGlobal';
import TableMain from './Table';
const TableGroup = ({
  className,
  posts,
  idTabCurrent,
}: {
  className?: string;
  posts: DocxType[];
  idTabCurrent?: string;
}) => {
  return (
    <div className={`border border-grey-bold p-3 rounded-[2px] ${className}`}>
      <div
        className="border border-grey-footer bg-grey-hover 
                  rounded-[10px] max-w-[321px] gap-1 w-full h-9
                  flex items-center mt-[2] mb-3 pl-2"
      >
        <img className="w-5" src="/images/icons/search.svg" alt="search" />
        <p className="block text-grey-footer">|</p>
        <Input
          placeholder="Tìm kiếm"
          className=" block border-0 h-full w-full px-1 py-0 text-4 placeholder:text-grey-bold"
        />
      </div>

      <div className="rounded-0 border border-grey-bold">
        <TableMain listDocx={posts} />
      </div>
    </div>
  );
};

export default TableGroup;
