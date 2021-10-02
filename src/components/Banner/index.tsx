import React from 'react'

const bannerTitle = 'RECA'

const Banner: React.FC = () => {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex overflow-wrap-anywhere text-yellow-300 text-4xl border-dashed border-b-2 min-h-3 mb-4 lg:mb-16">
        {bannerTitle}
      </div>
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XA06aQqJAVA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Banner
