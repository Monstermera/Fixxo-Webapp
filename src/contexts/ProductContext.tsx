import { useState, useContext, createContext } from 'react'
import { ProductItem } from '../models/ProductModel'

interface ProductProviderType {
  children: any
}

export interface ProductContextType {
  product: ProductItem
  products: ProductItem[]
  featuredProducts: ProductItem[]
  flashSaleOneProducts: ProductItem[]
  flashSaleTwoProducts: ProductItem[]

  getProduct: (articleNumber?: string) => void
  getProducts: () => void
  getFeaturedProducts: (take: number) => void
  getFlashSaleOneProducts: (take: number) => void
  getFlashSaleTwoProducts: (take: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string= 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: ProductItem = { tag: '', articleNumber: '', name: '', description: '', category: '', price: 0, rating: 0, imageName: '' }

    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<ProductItem[]>([])
    const [flashSaleOneProducts, setFlashSaleOneProducts] = useState<ProductItem[]>([])
    const [flashSaleTwoProducts, setFlashSaleTwoProducts] = useState<ProductItem[]>([])


    const getProduct = async (articleNumber?: string) => {
      if (articleNumber !== undefined) {
        const res = await fetch(`{baseUrl}/product/details/${articleNumber}`)
      setProduct(await res.json())
      }
    }
  
    const getProducts = async () => {
      const res = await fetch(baseUrl)
      setProducts(await res.json())
    }
  
    const getFeaturedProducts = async (take: number = 0) => {
      let url = `${baseUrl}/featured`

      if (take !==0 )
        url += `/${take}`

      const res = await fetch(url)
      setFeaturedProducts(await res.json())
    }

    const getFlashSaleOneProducts = async (take: number = 0) => {
      let url = `${baseUrl}/twoFor29`

      if (take !==0 )
        url += `/${take}`

      const res = await fetch(url)
      setFlashSaleOneProducts(await res.json())
    }

    
    const getFlashSaleTwoProducts = async (take: number = 0) => {
      let url = `${baseUrl}/twoFor49`

      if (take !==0 )
        url += `/${take}`

      const res = await fetch(url)
      setFlashSaleTwoProducts(await res.json())
    }


    return <ProductContext.Provider value={{ product, getProduct, products, getProducts, featuredProducts, getFeaturedProducts, flashSaleOneProducts, getFlashSaleOneProducts, flashSaleTwoProducts, getFlashSaleTwoProducts }}>
        {children}
    </ProductContext.Provider>
}
   

