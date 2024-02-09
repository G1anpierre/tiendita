type RatingType = {
  count: number
  rate: number
}

type ProductType = {
  id: number
  title: string
  category: string
  description: string
  image: string
  price: number
  rating: RatingType
  quantity?: number
} & {quantity: number; generalSize: string[]}

type ProductsType = {
  data: ProductType[]
}

type ProductItemType = {
  id: number
  title: string
  category: string
  description: string
  image: string
  price: number
  rating: RatingItemType
  quantity?: number
}

type RatingItemType = {
  count: number
  rate: number
}
