import React from 'react'
import { ProductContext, IProductContext } from '../api/context/ItemContext';
import Breadcrumb from '../sections/Breadcrumb';
import Footer from '../sections/Footer';
import MainMenu from '../sections/MainMenu';

const CreateForm = () => {
    const { productRequest, setProductRequest, create } = React.useContext(ProductContext) as IProductContext;

    return (
      <>
        <MainMenu />      
        <div className="container" style={{"maxWidth": "1110px"}}>
        <Breadcrumb currentPage={"API / Create"} /> 

          <form onSubmit={create} noValidate className="d-grid mb-5">
              <h3 className="display-6 mb-4">Create Product</h3>
              <input value={productRequest.tag} onChange={(e) => setProductRequest ({...productRequest, tag: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter tag..." />
              <input value={productRequest.name} onChange={(e) => setProductRequest ({...productRequest, name: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter name..." />
              <select value={productRequest.category} onChange={(e) => setProductRequest ({...productRequest, category: e.target.value })} 
                className="form-select">
                <option defaultValue="">Enter category...</option>
                <option value="Tops">Tops</option>
                <option value="Pants">Pants</option>
                <option value="Jeans">Jeans</option>
                <option value="Sets">Sets</option>
                <option value="Sweatshirts">Sweatshirts</option>
                <option value="Shirts">Shirts</option>
                <option value="Dresses">Dresses</option>
                <option value="Tshirts">T-shirts</option>
                <option value="Jackets">Jackets</option>
                <option value="Coats">Coats</option>
                <option value="Shoes">Shoes</option>
                <option value="Bags">Bags</option>
                <option value="Watches">Watches</option>      
              </select> 

              <div className="d-grid mt-3">
                <input value={productRequest.price || ''} onChange={(e) => setProductRequest ({...productRequest, price: parseInt (e.target.value )})} type="number" className="form-control py-2 mb-3"  placeholder="Enter price..." />
                <input value={productRequest.rating || ''} onChange={(e) => setProductRequest ({...productRequest, rating: parseInt (e.target.value )})} type="number" className="form-control py-2 mb-3" placeholder="Enter rating.." />
                <input value={productRequest.imageName} onChange={(e) => setProductRequest ({...productRequest, imageName: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter URL (optional)" />
                <button type="submit" className="btn-product py-2 mt-3">CREATE PRODUCT</button>
              </div>
          </form>      
        </div>
        <Footer />
      </>
    )
}

export default CreateForm