import type { PropsGlobal } from '@/interface/propsGlobal';
import { formatArticleDate } from '@/utils/Format';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import IconTypeArticle from '../IconTypeArticle';
import Link from 'next/link';

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
  iconType = 'left',
}: PropsGlobal) => {
  return (
    <div className={`${className} flex gap-4 overflow-hidden`}>
      <div
        className={`relative flex rounded-none border-none`}
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
        <IconTypeArticle
          className={
            iconType == 'align'
              ? 'absolute top-[50%] left-1/2 -translate-[50%] z-20 '
              : 'absolute bottom-0 right-0  z-20 '
          }
          type={dataArticle?.type || ''}
          styleImg={iconType == 'align' ? 'w-[50px]' : 'w-[22px]'}
        />
      </div>
      <div className=" flex-1  ">
        <Link href={`/${dataArticle?.alias}` || '#'}>
          <h4 className={`${twMerge(titleStyle)} line-clamp-3`}>
            {dataArticle?.title}
          </h4>
        </Link>
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
