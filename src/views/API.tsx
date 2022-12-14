import React from 'react'
import MainMenu from '../sections/MainMenu'
import Footer from '../sections/Footer'
import Breadcrumb from '../sections/Breadcrumb'
import ItemList from '../api/ItemList'
import ProductProvider from '../api/context/ItemContext'
import { NavLink } from 'react-router-dom'

const API =  () => {
    document.title = 'Contacts | Fixxo.'

    return (
    <ProductProvider>
        <MainMenu />        
        <div className="container" style={{"maxWidth": "1110px"}}>
        <Breadcrumb currentPage={"API"} /> 
            <div className="d-flex justify-content-end">
                <NavLink to={`/create/`} >
                    <button type="submit" className="btn-product">Create new product</button>
                </NavLink>
            </div>
        <ItemList />  
        </div>
        <Footer />
    </ProductProvider>
        
    )
}

export default API