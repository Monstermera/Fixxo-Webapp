export interface ProductItem {
    tag: string
    articleNumber: string 
    name: string
    description?: string
    category: string
    price: number
    rating?: number
    imageName: string
    quantity?: string
}

export interface ProductGridType {
    items: ProductItem[]
    title?: string
}

export interface ProductCardType {
    item: ProductItem
}