import React from 'react'
import Image from '../resolvers/Image'
import Container from '../components/UI/Container'
import Text from '../components/UI/Text'
import Title from '../components/UI/Title'
import Buttons from '../components/UI/Buttons'
import clsx from 'clsx'
import { Parallax } from 'react-parallax';

export default function ContentImage({ data }) {
  const isReversed = data?.variant === 'reversed'
  const bgImage = typeof data?.bg_photo?.bg_image === 'string' ? data?.bg_photo?.bg_image : data?.bg_photo?.bg_image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  return (
    <Parallax
        bgImage={bgImage}
        bgImageAlt={data?.bg_photo?.alt}
        disabled={data?.bg_photo?.enable_parallax === true}
    >
      <section className="bg-white bg-opacity-50">
        <Container className="max-w-7xl">
          <div
            className={clsx(
              'flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-10',
              { 'md:flex-row-reverse': isReversed },
              { 'md:flex-row': !isReversed },
            )}
          >
            {data?.photo?.image && (
              <div className="w-full md:w-6/12 lg:w-7/12 text-center">
                  <Image
                    src={data?.photo?.image}
                    alt={data?.photo?.alt}
                    className="h-36 md:h-60vh w-full object-cover filter grayscale hover:grayscale-0"
                  />
              </div>
            )}
            <div className="w-full md:w-6/12 lg:w-5/12">
              <div className="mx-auto max-w-2xl">
                {data?.title && (
                  <Title Tag="h2" variant="lg">
                    {data?.title}
                  </Title>
                )}
                {data?.content && (
                  <Text className="mt-4 lg:text-lg lg:leading-relaxed">
                    {data?.content}
                  </Text>
                )}
                {data?.buttons && (
                  <Buttons buttons={data?.buttons} className="mt-4" />
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Parallax>
  )
}
