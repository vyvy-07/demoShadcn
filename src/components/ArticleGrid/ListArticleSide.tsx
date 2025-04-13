import type { ArticleProps } from '@/interface/ArticleProps';
import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ArticleCard from '../Articles/ArticleCard';
const ListArticleSide = ({
  className,
  posts,
  lineBreak,
  hasModifiedFirstPost,
  hasContent,
}: ArticleProps) => {
  if (!posts?.length) return null;
  const firstPost = posts[0];

  return (
    <div id="listArtA">
      <SectionTitle title="Mới nhất" />
      {/* Img */}
      {hasModifiedFirstPost && (
        <ArticleCard
          titleStyle="H6"
          dateStyle="D-13"
          cateStyle="DM-14"
          className="image mt-[17px]  border-b-[0.75px] border-[#393939]"
          hasDate={false}
          hasCate={false}
          hasSapo={true}
          dataArticle={firstPost}
          sapoStyle="mb-3"
        />
      )}

      {/* list */}
      <div className="list">
        {posts?.slice(1, posts?.length).map((post, index) => (
          <div
            className={`${
              index != posts?.length - 2
                ? 'border-b-[0.75px]  py-3'
                : 'border-none  pt-3'
            } border-[#393939]  `}
            key={post.id}
          >
            <Link href="/">
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
