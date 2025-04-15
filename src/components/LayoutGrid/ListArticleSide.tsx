import type { PropsGlobal } from '@/interface/articleProps';
import Link from 'next/link';
import ArticleCard from '../Articles/ArticleCard';
import SectionTitle from '../SectionTitle';
const ListArticleSide = ({
  className,
  posts,
  lineBreak,
  hasModifiedFirstPost,
  hasContent,
}: PropsGlobal) => {
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
