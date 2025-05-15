import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { DocxType } from '@/interface/propsGlobal';
import { formatArticleDate } from '@/utils/Format';
import { useState } from 'react';
import PopUpDocx from './PopUpDocx';
import { useFetchAttachmentsDocx } from '@/hooks/useDocx';
const TableGroup = ({
  className,
  posts,
  idTabCurrent,
}: {
  className?: string;
  posts: DocxType[];
  idTabCurrent?: string;
}) => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [dataPopUp, setDataPopUp] = useState({});
  const [idSelected, setIdSelected] = useState('');
  // const [file, setFile] = useState();
  const { data: file } = useFetchAttachmentsDocx(idSelected, openPopUp);
  console.log('file :>> ', file);
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
        {openPopUp && dataPopUp && (
          <PopUpDocx setOpenPopUp={setOpenPopUp} docx={dataPopUp} />
        )}
        <Table className="rounded-0 ">
          <TableHeader>
            <TableRow
              className="h-[44px] text-center bg-grey-bold 
                            text-white heading-4  border-grey-hover"
            >
              <TableHead className="w-[100px]">Số Kí hiệu</TableHead>
              <TableHead className="border-r border-grey">Ban hành</TableHead>
              <TableHead className="border-r border-grey">Trích yếu</TableHead>
              <TableHead className="border-r border-grey">
                Cơ quan ban hành
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts &&
              posts?.map((item, index) => {
                return (
                  <TableRow
                    onClick={() => {
                      setOpenPopUp(true);
                      setDataPopUp(item);
                      if (item?.id) {
                        setIdSelected(item?.id);
                      }
                    }}
                    key={item?.id || index}
                    className={`cursor-pointer body-3 font-normal border-grey-hover ${
                      index % 2 != 0 && 'bg-grey-footer '
                    }`}
                  >
                    {/* <TableCell className="border-r border-grey"></TableCell> */}
                    <TableCell className="border-r border-grey">
                      {item?.documentCode}
                    </TableCell>
                    <TableCell className="border-r border-grey">
                      {item?.effectiveDate &&
                        formatArticleDate(item?.effectiveDate)}
                    </TableCell>
                    <TableCell className="border-r max-w-[400px] whitespace-normal border-grey">
                      {item?.summary}
                    </TableCell>
                    <TableCell className="border-r border-grey">
                      {item?.issuedAgencyName}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableGroup;
