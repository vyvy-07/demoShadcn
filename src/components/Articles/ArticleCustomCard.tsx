import type { PropsGlobal } from '@/interface/propsGlobal';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { AspectRatio } from '../ui/aspect-ratio';

const ArticleCustomCard = ({
  dataArticle,
  className,
  titleStyle,
}: PropsGlobal) => {
  return (
    <div className={`${className} flex gap-4 overflow-hidden`}>
      <div className="w-[125px] h-[70px] flex rounded-none border-none">
        <Image
          width={125}
          height={70}
          src={
            dataArticle?.featuredMedia?.resolutions?.medium?.uri ||
            dataArticle?.featuredImage ||
            ''
          }
          alt={dataArticle?.featuredMedia?.alt || 'Image'}
          className="w-full object-cover"
        />
      </div>
      <h4 className={`${twMerge(titleStyle)} line-clamp-3  block flex-1`}>
        {dataArticle?.title}
      </h4>
    </div>
  );
};

export default ArticleCustomCard;
