import type { PropsGlobal } from '@/interface/propsGlobal';
import { formatArticleDate } from '@/utils/Format';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const ArticleCustomCard = ({
  dataArticle,
  className,
  titleStyle,
  width = 125,
  height = 70,
  hasDate = false,
  hasCate = false,
  hasSapo = false,
  dateStyle,
  cateStyle,
  subtitleStyle,
  sapoStyle,
  align,
}: PropsGlobal) => {
  return (
    <div className={`${className} flex gap-4 overflow-hidden`}>
      <div
        className={`
      flex rounded-none border-none`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <Image
          width={width}
          height={height}
          src={
            dataArticle?.featuredMedia?.resolutions?.medium?.uri ||
            dataArticle?.featuredImage ||
            ''
          }
          alt={dataArticle?.featuredMedia?.alt || 'Image'}
          className="w-full object-cover"
        />
      </div>
      <div className=" flex-1  ">
        <h4 className={`${twMerge(titleStyle)} line-clamp-3`}>
          {dataArticle?.title}
        </h4>
        {(hasCate || hasDate) && (
          <div
            className={twMerge(
              'flex gap-2 items-center mt-2',
              align === 'center' && 'justify-center',
              subtitleStyle
            )}
          >
            {hasDate && (
              <div className={dateStyle}>
                {dataArticle?.publicationTime &&
                  formatArticleDate(dataArticle?.publicationTime)}
              </div>
            )}
            {hasDate && hasCate && <div className="dot"></div>}
            {hasCate && (
              <div className={cateStyle}>
                {dataArticle?.category?.categoryName}
              </div>
            )}
          </div>
        )}

        {hasSapo && (
          <div className={twMerge('mt-2 text-[#7b7b7b] ', sapoStyle)}>
            {dataArticle?.sapo || dataArticle?.excerpt}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleCustomCard;
