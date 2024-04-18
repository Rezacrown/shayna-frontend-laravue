export type ProductAPI = {
  id: number
  name: string
  type: string
  slug: string
  price: number
  quantity: number
  description: string
  images: {
    id: number
    product_id: number
    photo: string
    is_default: number | boolean
  }[]
}

export type ProductAPIResponse = {
  data: {
    data: { data: ProductAPI }
  }
}

export type ProductAPIResponseByID = {
  data: { data: ProductAPI[] }
}
