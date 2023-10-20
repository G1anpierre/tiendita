type ProductInfoType = {
  id: number
  value: number
}

export type RatingType = {
  count: number
  rate: number
}

export type ProductType = {
  id: number
  title: string
  category: string
  description: string
  image: string
  price: number
  rating: RatingType
  quantity?: number
}

// AllProducts Type

export type RatingItemType = {
  count: number
  rate: number
}

export type ProductItemType = {
  id: number
  title: string
  category: string
  description: string
  image: string
  price: number
  rating: RatingItemType
  quantity?: number
}
