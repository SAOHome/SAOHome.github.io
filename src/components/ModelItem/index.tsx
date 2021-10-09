import React from 'react'
import Image from 'next/image'

import classNames from 'classnames'
import Slider from 'react-slick'

import type { TitleSubTitleImagesType } from '@other-support/Types'

import { getStorageImageURL } from '@firebase-folder/main'

const settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

interface ModelItemProps {
  item: TitleSubTitleImagesType | undefined
  buttonPress?: () => void
}

const ModelItem: React.FC<ModelItemProps> = ({
  item,
  buttonPress,
}) => {
  const [imageUrls, setImageUrls] =
    React.useState<(string | undefined)[]>([])

  React.useEffect(() => {
    const getPublicData = async () => {
      setImageUrls([])

      if (!item) {
        return ''
      }

      if (!item.images) {
        return ''
      }

      const returnImageUrls = await Promise.all(
        item.images.map(
          each =>
            new Promise<string | undefined>(
              resolve => {
                const asyncFunc = async () => {
                  if (!each.imageName) {
                    resolve(undefined)
                    return
                  }

                  const imageUrl =
                    await getStorageImageURL({
                      imageName: each.imageName,
                    })

                  resolve(imageUrl)
                }

                asyncFunc()
              }
            )
        )
      )

      setImageUrls(returnImageUrls)
    }

    getPublicData()
  }, [item])

  const itemTitle = React.useMemo(() => {
    if (!item) {
      return ''
    }

    if (!item.title) {
      return ''
    }

    return item.title
  }, [item])

  const itemSubTitle = React.useMemo(() => {
    if (!item) {
      return ''
    }

    if (!item.subTitle) {
      return ''
    }

    return item.subTitle
  }, [item])

  const itemText = React.useMemo(() => {
    if (!item) {
      return ''
    }

    if (!item.text) {
      return ''
    }

    return item.text
  }, [item])

  const imageContainer = React.useMemo(() => {
    if (imageUrls.length < 1) {
      return
    }

    if (imageUrls.length > 1) {
      return (
        <Slider {...settings}>
          {imageUrls.map((each, index) => (
            <div
              key={`slide-image-${index}`}
              className="aspect-w-16 aspect-h-9 bg-green-50"
            >
              {each && (
                <Image
                  alt="item-list-unit-image"
                  className="w-full h-full object-cover"
                  src={each}
                  layout="fill"
                />
              )}
            </div>
          ))}
        </Slider>
      )
    }

    return (
      <div className="aspect-w-16 aspect-h-9 bg-green-50">
        {imageUrls[0] && (
          <Image
            alt="item-list-unit-image"
            className="w-full h-full object-cover"
            src={imageUrls[0]}
            layout="fill"
          />
        )}
      </div>
    )
  }, [imageUrls])

  if (!item) {
    return <></>
  }

  return (
    <div
      className={classNames('fixed inset-0 flex')}
    >
      <div
        className={classNames(
          'shadow-md relative flex w-11/12 h-5/6 m-auto lg:max-h-full lg:max-w-3xl bg-white rounded-2xl pl-4 pt-4 pb-4'
        )}
      >
        <button
          className="absolute top-4 right-4 w-7 h-7 text-yellow-300 bg-black hover:opacity-50"
          onClick={buttonPress}
        >
          X
        </button>
        <div className="flex flex-1 flex-col overflow-y-scroll overflow-x-hidden">
          <div className="pr-12">
            <div className="my-12 min-h-4 md:min-h-9 lg:min-h-6">
              {imageContainer}
            </div>

            <div className="whitespace-pre-wrap overflow-wrap-anywhere mb-2 text-2xl text-pink-300">
              {itemTitle}
            </div>
            <div className="whitespace-pre-wrap overflow-wrap-anywhere text-black-500">
              {itemSubTitle}
            </div>

            <div className="whitespace-pre-wrap overflow-wrap-anywhere text-black-500">
              {itemText}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelItem
