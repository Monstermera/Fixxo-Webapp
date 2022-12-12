import React, { useEffect } from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductGrid from '../sections/ProductGrid'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductsView: React.FC = () => {
  const { products, getProducts } = useProductContext() as ProductContextType

  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <> 
      <MainMenu />
      <Breadcrumb  currentPage="Products" />
      <ProductGrid title="Products" items={products} />
      <Footer />
    </>
  )
}

export default ProductsView