import Link from 'next/link';
import ArticleCard from '../Articles/ArticleCard';
import SectionTitle from '../SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';
import { formatArticleDate } from '@/utils/Format';
const ListArticleSide = ({
  className,
  posts,
  hasModifiedFirstPost,
  hasDate,
  title,
  hasTitle = true,
  hasBorder = false,
  titleCenter = false,
}: PropsGlobal) => {
  if (!posts?.length) return null;
  const firstPost = posts[0];
  return (
    <div
      id="listArtA"
      className={`${className} ${hasBorder && 'border py-3 px-5'}`}
    >
      {hasTitle && !titleCenter && (
        <SectionTitle className="mb-5" title={title || 'Mới nhất'} />
      )}
      {hasTitle && titleCenter && (
        <SectionTitle
          lineUnderTitle={true}
          className=""
          title={title || 'Mới nhất'}
        />
      )}
      {/* Img */}
      {hasModifiedFirstPost && (
        <ArticleCard
          titleStyle="H6"
          dateStyle="D-13"
          cateStyle="DM-14"
          className="image  border-b-[0.75px] border-[#393939]"
          hasDate={false}
          hasCate={false}
          hasSapo={true}
          dataArticle={firstPost}
          sapoStyle="mb-3 line-clamp-2"
        />
      )}

      {/* list */}
      <div className="list">
        {posts?.slice(1, posts?.length).map((post, index) => (
          <div
            className={`${
              index != posts?.length - 2
                ? 'border-b-[0.75px] py-3'
                : 'border-none  pt-3'
            } border-[#393939]  `}
            key={post.id}
          >
            <Link href="/" className="font-medium line-clamp-3">
              {/* <IconTypeArticle type={post.type} /> */}
              {post.title}
            </Link>
            {/* {hasDate && <>{post?.publicationTime}</>} */}
            {hasDate && (
              <div className={'flex gap-2 items-center mt-2'}>
                {hasDate && (
                  <div className="DM-14">{post?.category?.categoryName}</div>
                )}
                {hasDate && (
                  <div className="">
                    <img src="images/icons/schedule.png" alt="" />
                  </div>
                )}
                {hasDate && (
                  <div className="DM-14">
                    {post?.publicationTime &&
                      formatArticleDate(post?.publicationTime)}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListArticleSide;
