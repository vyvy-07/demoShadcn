import { Table, TableCell, TableRow } from '@/components/ui/table';
import { HEADER_TABLE_DOCX } from '@/constant/headerTableDocx';
import type { DocxType } from '@/interface/propsGlobal';
import { formatArticleDate } from '@/utils/Format';
import { type Dispatch, type SetStateAction } from 'react';

const PopUpDocx = ({
  docx,
  setOpenPopUp,
}: {
  docx: DocxType;
  setOpenPopUp: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="fixed overflow-hidden
       top-0 left-0 w-full h-screen z-50"
    >
      <div
        onClick={() => setOpenPopUp(false)}
        className="bg-grey-bold opacity-[0.5] overflow-hidden
      absolute top-0 left-0 w-full h-screen  z-90 "
      ></div>
      <div
        className="absolute max-w-[80%] mx-auto top-1/2 left-1/2
      translate-[-50%] 
     w-full h-[80%] bg-grey-hover z-90 flex justify-between"
      >
        <div className="px-8 py-6">
          <h1 className="heading-3 py-2">Chi tiết văn bản</h1>
          <Table className="max-w-[900px] p-2 border border-grey-bold">
            {/* <TableBody> */}
            <TableCell
              className={`heading-4 font-normal border-grey-hover p-0`}
            >
              {HEADER_TABLE_DOCX &&
                HEADER_TABLE_DOCX?.map((item, index: number) => {
                  return (
                    <TableRow
                      key={index}
                      className={`${
                        index % 2 == 0 && 'bg-grey-footer'
                      } border-r border-grey`}
                    >
                      <TableCell
                        className={`heading-3 border-r border-grey-bold 
                        ${index % 2 == 0 && 'bg-red'}`}
                      >
                        {item?.title}
                      </TableCell>
                      <TableCell className="heading-3 font-normal border-grey-hover p-2 whitespace-normal">
                        {item?.key === 'effectiveDate' && docx?.[item?.key]
                          ? docx?.effectiveDate &&
                            formatArticleDate(docx?.effectiveDate)
                          : docx?.[item?.key] ?? ''}
                      </TableCell>
                    </TableRow>
                  );
                })}
              <TableRow className={`border-r border-grey `}>
                <TableCell className={`heading-3 border-r border-grey-bold `}>
                  Tệp đính kèm
                </TableCell>
                <TableCell className="heading-3  font-normal border-grey-hover p-2 whitespace-normal">
                  sasas{' '}
                </TableCell>
              </TableRow>
            </TableCell>
          </Table>
        </div>

        <div
          onClick={() => setOpenPopUp(false)}
          className="absolute top-[-20px] right-0 text-[20px] font-bold "
        >
          X
        </div>
      </div>
    </div>
  );
};

export default PopUpDocx;
