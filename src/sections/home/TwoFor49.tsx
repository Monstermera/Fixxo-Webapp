import React from 'react'
import ProductCard from '../../components/ProductCard'
import TwoFor49 from '../../assets/images/twoFor49.png'
import { ProductGridType } from '../../models/ProductModel'

const TwoForUsdRight: React.FC<ProductGridType> = ({items = []}) => {

  return (
    <section className="flashsales container">
        <div className="image-box-2"> 
            <div id="left" className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4" >
                {
                    items.map(product => <ProductCard key={product.articleNumber} item={product} />)
                }      
            </div>
        </div>
        <div className="flashsales-box d-none d-lg-flex">
            <img src={TwoFor49} alt="Girl with autumn clothes" />
            <div className="flashsales-body">
                <h1>2 FOR USD $49</h1>
                <button className="btn-white">FLASH SALE</button>
            </div>
        </div>
    </section>
    )
}

export default TwoForUsdRight