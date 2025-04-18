import type { PropsGlobal } from '@/interface/propsGlobal';
import Link from 'next/link';

const SectionTitle = ({
  className,
  title,
  changeColor = false,
  cateAlias,
  lineUnderTitle = false,
}: PropsGlobal) => {
  return (
    <>
      {title && !lineUnderTitle && (
        <div id="section__title" className={`flex gap-2 ${className}`}>
          <div className="w-7 border-b-[4px] border-red-primary"></div>

          <Link
            href="/"
            className="heading-3 title text-red-primary text-[22px] font-bold leading-[30px] uppercase "
          >
            <h3 className="heading-3 text-red-primary"> {title}</h3>
          </Link>

          <div className={`flex-grow border-b border-red-primary`}></div>
        </div>
      )}
      {lineUnderTitle && (
        <Link
          href="/"
          className={`text-center gap-2 ${className} heading-3 justify-center text-red-primary
           text-[22px] block font-bold leading-[30px] uppercase w-full mx-auto`}
        >
          <h3 className="heading-3  pb-1 text-red-primary  ">{title}</h3>
          <hr className="block mx-auto w-[123px] h-[3px]  bg-red-primary" />
        </Link>
      )}
    </>
  );
};

export default SectionTitle;
