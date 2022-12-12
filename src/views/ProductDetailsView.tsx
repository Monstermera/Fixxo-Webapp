import React, {useContext} from 'react'
import Banner from '../sections/Banner'
import Breadcrumb from '../sections/Breadcrumb'
import MainMenu from '../sections/MainMenu'
import Footer from '../sections/Footer'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductDetailsView: React.FC = () => {
    const productContext = useProductContext () as ProductContextType

    return (
      <>
        <MainMenu />
        <Banner />
        <Breadcrumb currentPage="Product Signal"/>
        <Footer />
      </>
    )
}

export default ProductDetailsView