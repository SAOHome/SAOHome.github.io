import React from 'react'

import type { TitleSubTitleImagesType } from '@other-support/Types'

interface ModelItemProps {
  item: TitleSubTitleImagesType | undefined
}

const ModelItem: React.FC<ModelItemProps> = ({
  item,
}) => {
  if (!item) {
    return <></>
  }

  return <></>
}

export default ModelItem
