import React, { type ReactNode } from 'react';
import styled from 'styled-components';
// const IMG =styled.img`
//   width: ;
// `

// w-fit h-4 inline-block mr-[5px] mb-[2px]
const IconTypeArticle = ({
  type,
  className,
  styleImg = 'w-5 h-4 inline-block ',
}: {
  type: string;
  className: ReactNode;
  styleImg: string;
}) => {
  return (
    <div className={`${className}`}>
      {type == 'Audio' && (
        <img
          src="/images/icons/audio.svg"
          className={`${styleImg}`}
          alt="nongthonviet"
        />
      )}
      {(type == 'Phóng sự ảnh' || type == 'PhongSuAnh') && (
        <img
          src="/images/icons/image.svg"
          className={`${styleImg}`}
          alt="nongthonviet"
        />
      )}
      {type == 'Video' && (
        <img
          src="/images/icons/play.svg"
          className={`${styleImg}`}
          alt="nongthonviet"
        />
      )}
    </div>
  );
};

export default IconTypeArticle;
