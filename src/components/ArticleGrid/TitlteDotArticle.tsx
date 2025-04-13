import type { ArticleProps } from '@/interface/ArticleProps';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const TitlteDotArticle = ({ dataArticle, className }: ArticleProps) => {
  return (
    <div>
      <div className={`${className} flex items-start gap-2 `}>
        <Link className="h-auto " href="/">
          {/* <IconTypeArticle type={dataArticle?.type} /> */}
          <img
            src="/icons/icon-red.svg"
            className="h-4 w-4 inline-block mb-1 mr-2"
          ></img>
          {dataArticle?.title}
        </Link>
      </div>
    </div>
  );
};

export default TitlteDotArticle;
