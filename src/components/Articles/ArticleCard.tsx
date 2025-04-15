import { AspectRatio } from '@/components/ui/aspect-ratio';
import type { Article, PropsGlobal } from '@/interface/articleProps';
import { formatArticleDate } from '@/utils/Format';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
interface CardProps extends PropsGlobal {
  dataArticle: Article;
}

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
}: CardProps) => {
  const url =
    'https://api.nongthonviet.com.vn/media/2025/04/09/67f629249f9c5248f66aea69_tang-truong-kinh-te-tphcm_medium.jpg';

  return (
    <div className={className}>
      <AspectRatio
        className="overflow-hidden rounded-none border-none"
        ratio={16 / 9}
      >
        <img
          src={dataArticle?.featuredImage || url}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="mt-3">
        <div
          className={`${twMerge(
            titleStyle,
            align === 'center' && 'text-center'
          )} `}
        >
          <Link className="h-auto line-clamp-2" href="/">
            {/* <IconTypeArticle type={dataArticle?.type} /> */}
            {dataArticle?.title}
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
                {formatArticleDate(dataArticle?.publicationTime)}
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
