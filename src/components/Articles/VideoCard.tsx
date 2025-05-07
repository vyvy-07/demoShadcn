import { AspectRatio } from '@/components/ui/aspect-ratio';
import type { PropsGlobal } from '@/interface/propsGlobal';
import {
  formatArticleDate,
  formatDetailArticleDate,
  formatPodcastArticleDate,
  formatReadArticleDate,
  formatTapChiInArticleDate,
} from '@/utils/Format';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import IconTypeArticle from '../IconTypeArticle';

const VideoCard = ({
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
  iconType = 'left',
}: PropsGlobal) => {
  if (!dataArticle?.type) return null;
  return (
    <div className={className}>
      <AspectRatio
        className="relative overflow-hidden rounded-none border-none"
        ratio={16 / 9}
      >
        <Image
          width={500}
          height={500}
          src={dataArticle?.featuredMedia?.resolutions?.medium?.uri || ''}
          alt="Image"
          className="w-full h-full object-cover"
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
      </AspectRatio>
      {(hasCate || hasDate) && (
        <div
          className={twMerge(
            'flex gap-2 items-center mt-2 body-2',
            align === 'center' && 'justify-center',
            subtitleStyle
          )}
        >
          {dataArticle?.category?.categoryName} |{' '}
          {dataArticle?.publicationTime &&
            formatPodcastArticleDate(dataArticle?.publicationTime)}{' '}
        </div>
      )}
      <div className="mt-3 min-h-[42px]">
        <div
          className={`${twMerge(
            titleStyle,
            align === 'center' && 'text-center'
          )} `}
        >
          <Link
            className="h-auto line-clamp-2"
            href={`/video/${dataArticle?.alias}` || '#'}
          >
            {/* <IconTypeArticle type={dataArticle?.type} /> */}
            <h4> {dataArticle?.title}</h4>
          </Link>
        </div>

        {hasSapo && (
          <div className={twMerge('mt-2 text-[#7b7b7b]', sapoStyle)}>
            {dataArticle?.sapo || dataArticle?.excerpt}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
