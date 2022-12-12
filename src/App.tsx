import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import ProductsView from './views/ProductsView';
import NotFoundView from './views/NotFoundView';
import { ProductProvider } from './contexts/ProductContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import API from './views/API';
import UpdateForm from './views/UpdateForm';
import ProductHandleProvider from './api/context/ItemContext';
import CreateForm from './views/CreateForm';

const App: React.FC = () => {

  return (
     <BrowserRouter>
     <ShoppingCartProvider>
     <ProductProvider>
      <ProductHandleProvider>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/api" element={<API/>} />
        <Route path="/update/:id" element={<UpdateForm />} />
        <Route path="/create" element={<CreateForm />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </ProductHandleProvider>
    </ProductProvider>
    </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;