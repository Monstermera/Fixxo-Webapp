import { ProductItem } from "./ProductModel"

export interface CartItem {
    quantity: number
    articleNumber: string
    product: ProductItem
}

export interface CartItemType {
    item: CartItem  
}