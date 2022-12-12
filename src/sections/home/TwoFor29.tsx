import React from 'react'
import ProductCard from '../../components/ProductCard'
import TwoFor29 from '../../assets/images/twoFor29.png'
import { ProductGridType } from '../../models/ProductModel'

const TwoForUsdLeft: React.FC<ProductGridType> = ({items = []}) => {

  return (
    <section className="flashsales container">
        <div className="flashsales-box d-none d-lg-flex">
            <img src={TwoFor29} alt="Girl with summer clothes" />
            <div className="flashsales-body">
                <h1>2 FOR USD $29</h1>
                <button className="btn-white">FLASH SALE</button>
            </div>
        </div>
        <div className="image-box-1"> 
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
                {
                    items.map(product => <ProductCard key={product.articleNumber} item={product} />)
                }      
            </div>
        </div>
    </section>
  )
}

export default TwoForUsdLeft