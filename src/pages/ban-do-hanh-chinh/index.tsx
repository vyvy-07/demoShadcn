import Container from '@/components/Container/Container';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import React from 'react';

const AdministrativeMap = () => {
  return (
    <MainLayout>
      <Container>
        {/* <SectionTitle title="Bản đồ hành chính" className="mb-5" /> */}
        <Image
          width={1000}
          height={1000}
          alt="Bản đồ du lịch Vĩnh Long"
          className="mx-auto w-full"
          src="https://vinhlong.dcs.vn/Style%20Library/TouchScroll/images/vl.gif"
        />
      </Container>
    </MainLayout>
  );
};

export default AdministrativeMap;
