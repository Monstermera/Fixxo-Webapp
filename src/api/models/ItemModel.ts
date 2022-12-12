export interface Product {
    articleNumber: string
    tag: string
    name: string
    description?: string
    category: string
    price: number
    rating?: number
    imageName?: string
}

export interface ProductRequest {
    tag: string
    name: string
    description?: string
    category: string
    price: number
    rating?: number
    imageName?: string
}