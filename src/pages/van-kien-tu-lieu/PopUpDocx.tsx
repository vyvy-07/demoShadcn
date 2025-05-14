import type { DocxType } from '@/interface/propsGlobal';

const PopUpDocx = ({ docx }: { docx: DocxType }) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-white z-90 ">
      {docx?.decisionType}

      {docx?.fieldType}
    </div>
  );
};

export default PopUpDocx;
