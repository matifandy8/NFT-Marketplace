export interface ProductItem {
  _id: string
  name: string
  description: string
  price: number
  image: string
  addtocart: ProductItem
}