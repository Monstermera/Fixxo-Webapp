import React, {useEffect} from 'react'
import MainMenu from '../sections/MainMenu'
import PamelaTopPicks from '../sections/home/PamelaTopPicks'
import ShowCase from '../sections/home/ShowCase'
import Footer from '../sections/Footer'
import WebshopInfo from '../sections/home/WebshopInfo'
import ProductGrid from '../sections/ProductGrid'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import TwoFor29 from '../sections/home/TwoFor29'
import TwoFor49 from '../sections/home/TwoFor49'

const HomeView: React.FC = () => {
  document.title = 'Fixxo.'

  const { featuredProducts, getFeaturedProducts, flashSaleOneProducts, getFlashSaleOneProducts, flashSaleTwoProducts, getFlashSaleTwoProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeaturedProducts(8)
    getFlashSaleOneProducts(4)
    getFlashSaleTwoProducts(4)
  }, [])

  return (
    <>
      <div className="gradient-grey">
        <MainMenu /> 
        <ShowCase />
      </div>
      <ProductGrid title="Featured Products" items={featuredProducts} />
      <PamelaTopPicks />
      <TwoFor29 items={flashSaleOneProducts}/>
      <TwoFor49 items={flashSaleTwoProducts}/>
      <WebshopInfo />
      <Footer /> 
    </>
  )
}

export default HomeView