import type { PropsGlobal } from '@/interface/propsGlobal';
import { twMerge } from 'tailwind-merge';

const ArticleCustomCard = ({
  dataArticle,
  className,
  titleStyle,
}: PropsGlobal) => {
  return (
    <div className={`${className} flex gap-4 overflow-hidden`}>
      <div className="max-w-[125px] h-[70px] rounded-none border-none">
        <img
          src={
            dataArticle?.featuredMedia?.resolutions?.medium?.uri ||
            dataArticle?.featuredImage
          }
          alt="Image"
          className="object-cover"
        />
      </div>
      <h4 className={`${twMerge(titleStyle)} line-clamp-3 `}>
        {dataArticle?.title}
      </h4>
    </div>
  );
};

export default ArticleCustomCard;
