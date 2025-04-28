import type { PropsGlobal } from '@/interface/propsGlobal';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const ArticleCustomCard = ({
  dataArticle,
  className,
  titleStyle,
}: PropsGlobal) => {
  return (
    <div className={`${className} flex gap-4 overflow-hidden`}>
      <div className="max-w-[125px] h-[70px] rounded-none border-none">
        <Image
          width={125}
          height={70}
          src={
            dataArticle?.featuredMedia?.resolutions?.medium?.uri ||
            dataArticle?.featuredImage ||
            ''
          }
          alt="Image"
          className=" w-full object-cover"
        />
      </div>
      <div className=" flex-1 line-clamp-3 ">
        <h4 className={`${twMerge(titleStyle)} block`}>{dataArticle?.title}</h4>
      </div>
    </div>
  );
};

export default ArticleCustomCard;
