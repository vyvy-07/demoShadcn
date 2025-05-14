import ButtonDelete from '@/components/Button/ButtonDelete';
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
const TableMain = ({
  className,
  listDocx,
}: {
  className?: string;
  listDocx: DocxType[];
}) => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [dataPopUp, setDataPopUp] = useState({});

  return (
    <>
      {openPopUp && <PopUpDocx docx={dataPopUp} />}
      <Table className="rounded-0">
        <TableHeader>
          <TableRow
            className="h-[44px] text-center bg-grey-bold 
                            text-white heading-4  border-grey-hover"
          >
            <TableHead className="w-[100px]">
              {/* <Checkbox onClick={() => console.log('eee :>> ', 'eee')} /> */}
            </TableHead>
            <TableHead className="w-[100px]"> Số Kí hiệu</TableHead>
            <TableHead className="border-r border-grey">Ban hành</TableHead>
            <TableHead className="border-r border-grey">Trích yếu</TableHead>
            <TableHead className="border-r border-grey">
              Cơ quan ban hành
            </TableHead>
            <TableHead className="border-r">Xóa</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listDocx &&
            listDocx?.map((item, index) => {
              return (
                <TableRow
                  onClick={() => {
                    setOpenPopUp(true);
                    setDataPopUp(item);
                  }}
                  key={item?.id || index}
                  className={`body-3 font-normal border-grey-hover ${
                    index % 2 != 0 && 'bg-grey-footer '
                  }`}
                >
                  <TableCell className="border-r border-grey"></TableCell>
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
                  <TableCell className="">
                    <ButtonDelete />
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </>
  );
};

export default TableMain;
