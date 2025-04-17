import Link from 'next/link';
import ArticleCard from '../Articles/ArticleCard';
import SectionTitle from '../SectionTitle';
import type { PropsGlobal } from '@/interface/propsGlobal';
const ListArticleSide = ({
  className,
  posts,
  hasModifiedFirstPost,
  hasContent,
  title,
  hasTitle = true,
  hasBorder = false,
}: PropsGlobal) => {
  if (!posts?.length) return null;
  const firstPost = posts[0];
  console.log('title :>> ', title);
  return (
    <div id="listArtA">
      {hasTitle && (
        <SectionTitle className="mb-5" title={title || 'Mới nhất'} />
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
            <Link href="/" className="font-medium">
              {/* <IconTypeArticle type={post.type} /> */}
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListArticleSide;
