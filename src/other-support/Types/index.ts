import { ReactNode } from 'react'
import { FirebaseLoginFormItemKeyType } from '@other-support/Enums'

export type Nullable<T> = T | null

export type Int = number & { __int__: void }

export type ExtractChildrenType<
  TAll extends { type: any },
  P
> = Extract<TAll, { type: P }>

export type TStateCasses<
  T extends { type: any },
  TState
> = {
  [P in T['type']]: (
    action: ExtractChildrenType<T, P>
  ) => TState
}

export type ReactNodeCasses<
  T extends { type: any }
> = {
  [P in T['type']]: (
    action: ExtractChildrenType<T, P>
  ) => ReactNode
}

export type StringKeyObject = { [k: string]: any }
export type StringKeyBooleanValueObject = {
  [k: string]: boolean
}

export type FirebaseLoginFormItemType = {
  [FirebaseLoginFormItemKeyType.email]: string
  [FirebaseLoginFormItemKeyType.password]: string
}

export type GidAndNameType = {
  gid: string
  name: string
}

export type TitleType = {
  title: string
}

export type TitleImageNameType = {
  title: string
  imageName: string
}

export type TitleSubTitleImageNameType = {
  title: string
  subTitle: string
  imageName: string
}

export type TitleSubTitleImageNameListType =
  Array<TitleSubTitleImageNameType>

export type ImageNameObject = {
  imageName?: string
}

export type ImageNameObjectListType =
  ImageNameObject[]

export type TitleSubTitleImagesType = {
  title: string
  subTitle: string
  text: string
  images: ImageNameObjectListType
}

export type TitleSubTitleImagesListType =
  TitleSubTitleImagesType[]
