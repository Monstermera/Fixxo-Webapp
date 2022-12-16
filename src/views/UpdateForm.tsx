import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext, IProductContext} from '../api/context/ItemContext';
import Breadcrumb from '../sections/Breadcrumb';
import Footer from '../sections/Footer';
import MainMenu from '../sections/MainMenu';

const UpdateForm = () => {
  document.title = 'API | Fixxo.'

  const {id} = useParams()
  const { product, setProduct, get, update } = React.useContext(ProductContext) as IProductContext;

    useEffect(() => {
      get(id);
    
    }, []) // eslint-disable-line

    return (
      <>
        <div className="container mt-5" style={{"maxWidth": "1110px"}}>
          <MainMenu />
          <Breadcrumb currentPage={"API / UPdate"} /> 

          <form onSubmit={update} className="d-grid mb-5">
              <h3 className="display-6 mb-4">Update Product</h3>
              <input value={product.tag} onChange={(e) => setProduct ({...product, tag: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter tag..." />
              <input value={product.name} onChange={(e) => setProduct ({...product, name: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter name..." />
              <select value={product.category} onChange={(e) => setProduct ({...product, category: e.target.value })} className="form-select">
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
                <input value={product.price || ''} onChange={(e) => setProduct ({...product, price: parseInt (e.target.value )})} type="number" className="form-control py-2 mb-3"  placeholder="Enter price..." />
                <input value={product.rating || ''} onChange={(e) => setProduct ({...product, rating: parseInt (e.target.value )})} type="number" className="form-control py-2 mb-3" placeholder="Enter rating.." />
                <input value={product.imageName} onChange={(e) => setProduct ({...product, imageName: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter URL..." />
                <button type="submit" className="btn-product py-2 mt-3">UPDATE PRODUCT</button>      
              </div>
          </form>
        </div>
        <Footer />
      </>
    )
}

export default UpdateForm