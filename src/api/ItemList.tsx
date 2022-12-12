import React, { useEffect } from 'react'
import { currencyFormatter } from '../utilities/currencyFormatter';
import { IProductContext, ProductContext } from './context/ItemContext'
import { Product } from './models/ItemModel';
import { NavLink } from 'react-router-dom'


const ItemList: React.FC = () => {
    const { products, getAll, update, remove } = React.useContext(ProductContext) as IProductContext;

    useEffect (() => {
        getAll()

    }, [getAll])

  return (
    <>
    <h3 className="display-6 mb-5">List of Products</h3>

      <div className="col">
        <div className="card">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              products.map((product: Product) => (
                <div key={product.articleNumber} className="mb-3">
                  <div className="card-box">
                    <h6><strong>Article number:</strong> {product.articleNumber}</h6>
                    <h6><strong>Tag:</strong> {product.tag}</h6>
                    <h6><strong>Name:</strong> {product.name}</h6>
                    <h6><strong>Catgory:</strong> {product.category}</h6> 
                    <h6><strong>Price:</strong> {product.price}</h6> 
                    <h6><strong>Rating:</strong> {product.rating} stars</h6> 
                    <h6><strong>URL:</strong> {product.imageName}</h6>         
                    <br/>
                    <div className="update-buttons">
                      <button onClick= {() => remove(product.articleNumber)} className="update-icon"><i className="fa-regular fa-trash fa-lg"></i></button>
                      <NavLink to={`/update/${product.articleNumber}`} >
                        <button className="update-icon"><i className="fa-regular fa-pen fa-lg"></i></button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))
            }
            </div>       
          </div>
        </div>
        
    </>
  )
}

export default ItemList