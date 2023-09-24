import React from 'react';

import { Parallax } from 'react-parallax';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import Text from '../components/UI/Text';
import DefaultPerk from './Perks/Default'
import PerkCards from './Perks/PerkCards'
import Galley from './Perks/Galley'
import clsx from 'clsx';

function PerkItems({ data }) {
  switch (data.variant){
    case 'cards':
      return (
          <PerkCards data={data} />
      )
    case 'gallery':
      return (
          <Galley data={data} />
      )
    default:
      return (
          <DefaultPerk data={data} />
      )
  }
}

export default function Perks({ data }) {
  
  const bgImage = typeof data?.bg_photo?.bg_image === 'string' ? data?.bg_photo?.bg_image : data?.bg_photo?.bg_image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  return (
    <Parallax
        bgImage={bgImage}
        bgImageAlt={data?.bg_photo?.alt}
        disabled={data?.bg_photo?.enable_parallax === true}
    >
      <section className='bg-white bg-opacity-50 dark:bg-[#0d0d10]'>
        
        <Container>
          <div className='flex w-full flex-col md:flex-row mb-12'>
            <div className={clsx('w-full',{
              ' md:w-1/2' : data?.content
            })}>
              {data?.title && (
                <Title
                  Tag='h2'
                  variant='xl'
                  className={clsx(`mx-auto mt-8 pt-0 md:pt-2  md:pr-6 md:mb-10 text-perkTitle leading-10`,{
                    ' md:max-w-md' : data?.content
                  })}>
                  {data?.title}
                </Title>
              )}
            </div>
            <div className='w-full md:w-1/2'>
                {data?.content && (
                  <Text className={`mx-auto mt-8 max-w-6xl`}>
                    {data?.content}
                  </Text>
                )}
            </div>
          </div>
          
          <PerkItems data={data} />
        </Container>
      </section>
    </Parallax>
  );
}
