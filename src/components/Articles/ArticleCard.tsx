import { AspectRatio } from '@/components/ui/aspect-ratio';
import type { PropsGlobal } from '@/interface/propsGlobal';
import { formatArticleDate } from '@/utils/Format';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const ArticleCard = ({
  dataArticle,
  hasDate = true,
  hasCate = true,
  hasSapo = false,
  titleStyle,
  dateStyle,
  cateStyle,
  subtitleStyle,
  sapoStyle,
  align,
  className,
}: PropsGlobal) => {
  return (
    <div className={className}>
      <AspectRatio
        className="overflow-hidden rounded-none border-none"
        ratio={16 / 9}
      >
        <Image
          width={500}
          height={500}
          src={dataArticle?.featuredMedia?.resolutions?.medium?.uri || ''}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="mt-3 min-h-[42px]">
        <div
          className={`${twMerge(
            titleStyle,
            align === 'center' && 'text-center'
          )} `}
        >
          <Link
            className="h-auto line-clamp-2"
            href={`/tin-tuc/${dataArticle?.alias}` || '#'}
          >
            {/* <IconTypeArticle type={dataArticle?.type} /> */}
            <h4> {dataArticle?.title}</h4>
          </Link>
        </div>

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
          <div className={twMerge('mt-2 text-[#7b7b7b]', sapoStyle)}>
            {dataArticle?.sapo || dataArticle?.excerpt}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
