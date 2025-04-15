import { AspectRatio } from '@/components/ui/aspect-ratio';
interface CardPerson {
  className?: string;
  horizonCard?: boolean;
}
const ArticlePerson = ({ className, horizonCard = false }: CardPerson) => {
  const url =
    'https://api.nongthonviet.com.vn/media/2025/04/09/67f629249f9c5248f66aea69_tang-truong-kinh-te-tphcm_medium.jpg';

  return (
    <>
      {!horizonCard && (
        <div className={`${className}`}>
          <AspectRatio
            className="overflow-hidden rounded-none border-none"
            ratio={16 / 9}
          >
            <img
              src="/images/person1.png"
              alt="Image"
              className=" object-cover"
            />
          </AspectRatio>
          <div className="bg-grey text-center py-2">
            <h1 className="uppercase text-[16px] text-black-main ">
              TỔNG BÍ THƯ
            </h1>
            <h2 className="uppercase text-[18px] font-bold text-red-primary ">
              Tô Lâm
            </h2>
          </div>
        </div>
      )}
      {horizonCard && (
        <div
          className={`${className} relative flex justify-between items-center p-3`}
        >
          <div className="absolute top-0 z-[-1] left-0">
            <img src="/images/bg-ps.png" className="w-full h-full" alt="" />
          </div>
          <img
            srcSet="/images/person2.png 2x"
            alt="Image"
            className=" object-cover"
          />
          <div className="bg-transparent text-center py-2">
            <h1 className="uppercase text-[16px] text-black-main ">
              PHÓ BÍ THƯ TỈNH ỦY CHỦ TỊCH UBND TỈNH
            </h1>
            <h2 className="uppercase text-[18px] font-bold text-red-primary ">
              LỮ QUANG NGỜI
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticlePerson;
