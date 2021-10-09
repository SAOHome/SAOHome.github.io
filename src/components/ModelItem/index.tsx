import React from 'react'
import classNames from 'classnames'

import type { TitleSubTitleImagesType } from '@other-support/Types'

interface ModelItemProps {
  item: TitleSubTitleImagesType | undefined
  buttonPress?: () => void
}

const ModelItem: React.FC<ModelItemProps> = ({
  item,
  buttonPress,
}) => {
  if (!item) {
    return <></>
  }

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
