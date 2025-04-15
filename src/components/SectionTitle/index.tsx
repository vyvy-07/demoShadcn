import type { PropsGlobal } from '@/interface/ArticleProps';
import Link from 'next/link';

const SectionTitle = ({
  className,
  title,
  changeColor = false,
  cateAlias,
}: PropsGlobal) => {
  return (
    <>
      {title && (
        <div id="section__title" className={`flex gap-2 ${className}`}>
          <div className="w-7 border-b-[4px] border-red-primary"></div>

          <Link
            href="/"
            className="title text-red-primary text-[22px] font-bold leading-[30px] uppercase "
          >
            {title}
          </Link>

          <div className={`flex-grow border-b border-red-primary`}></div>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
