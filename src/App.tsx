import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App: React.FC = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", gap:'10px'}}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
      <Footer/>
    </Router></div>
  );
};

export default App;
