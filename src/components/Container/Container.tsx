import { ReactNode } from 'react';
interface PropClass {
  className?: string;
  children: ReactNode;
}
const Container = ({ className, children }: PropClass) => {
  return (
    <div
      className={`max-w-[1240px] max-lg:px-4 mx-auto  ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
