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
