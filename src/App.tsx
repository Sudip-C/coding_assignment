import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';
import Navbar from './component/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
    </Router>
  );
};

export default App;
