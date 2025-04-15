import type { PropsGlobal } from '@/interface/propsGlobal';

const ArticleCustomCard = ({ dataArticle, className }: PropsGlobal) => {
  return (
    <div className={`${className} flex gap-4 overflow-hidden`}>
      <div className="max-w-[125px] overflow-hidden rounded-none border-none">
        <img
          src={
            dataArticle?.featuredMedia?.resolutions?.medium?.uri ||
            dataArticle?.featuredImage
          }
          alt="Image"
          className="object-cover"
        />
      </div>
      <h4 className="heading-4 line-clamp-2 flex-1  ">{dataArticle?.title}</h4>
    </div>
  );
};

export default ArticleCustomCard;
