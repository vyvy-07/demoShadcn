import type { PropsGlobal } from '@/interface/ArticleProps';
import Link from 'next/link';

const TitlteDotArticle = ({ dataArticle, className }: PropsGlobal) => {
  return (
    <div className={`${className} flex items-start gap-2 `}>
      <Link className="h-auto " href="/">
        <img
          src="/icons/icon-red.svg"
          className="h-4 w-4 inline-block mb-1 mr-2"
        ></img>
        {dataArticle?.title}
      </Link>
    </div>
  );
};

export default TitlteDotArticle;
