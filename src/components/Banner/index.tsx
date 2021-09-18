import React from 'react'

import type { TitleImageNameType } from '@other-support/Types'

import { getStorageImageURL } from '@firebase-folder/main'

interface BannerProps {
  banner: TitleImageNameType | undefined
}

const Banner: React.FC<BannerProps> = ({
  banner,
}) => {
  const [imageUrl, setImageUrl] = React.useState<
    string | undefined
  >(undefined)

  React.useEffect(() => {
    const getPublicData = async () => {
      if (!banner) {
        return
      }

      if (!banner.imageName) {
        return
      }

      const imageUrl = await getStorageImageURL({
        imageName: banner.imageName,
      })

      console.log('imageUrl: ', imageUrl)

      setImageUrl(imageUrl)
    }

    getPublicData()
  }, [banner])

  const bannerTitle = React.useMemo(() => {
    if (!banner) {
      return ''
    }

    if (!banner.title) {
      return ''
    }

    return banner.title
  }, banner)

  return (
    <div className="flex flex-col mb-8">
      <div className="flex overflow-wrap-anywhere text-yellow-300 text-4xl border-dashed border-b-2 mb-16 min-h-4rem">
        {bannerTitle}
      </div>
      <div className="aspect-w-16 aspect-h-9 bg-blue-400">
        {imageUrl && (
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
          />
        )}
      </div>
    </div>
  )
}

export default Banner
