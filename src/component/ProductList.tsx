import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import { AppDispatch, RootState } from '../redux/store';
import { Link } from 'react-router-dom';
import '../css/ProductList.css'

const ProductList: React.FC = () => {
  const dispatch:AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const searchQueryRef = useRef<HTMLInputElement>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearchChange = () => {
    const query = searchQueryRef.current?.value.toLowerCase() || '';
    setFilteredProducts(products.filter(product =>
      product.title.toLowerCase().includes(query)
    ));
  };


  return (
    <div className='main-body'>
      <input
        className='input-field'
        type="text"
        placeholder="Search products by name..."
        ref={searchQueryRef}
        onChange={handleSearchChange}
      />
      <main className='grid-container'>
        {filteredProducts.map((product) => (
          <article className='product' key={product.id}>
            <section className='image-box'>
            <img className='image' src={product.avatar} alt={product.title}/>
            </section>
            <section className='detail-box'>
            <h2>{product.title}</h2>
            <p>₹ {product.price}</p>
            <p>{product.description.slice(0,35)}...</p>
            <Link to={`/product/${product.id}`}><button className='view-details' >View Details</button></Link>
            </section>
          </article>
        ))}
      </main>
    </div>
  );
};

export default ProductList;
