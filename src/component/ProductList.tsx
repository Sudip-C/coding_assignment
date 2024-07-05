import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import { AppDispatch, RootState } from '../redux/store';
import { Link } from 'react-router-dom';
import '../css/ProductList.css'
import Shimmer from './Shimmer';

const ProductList: React.FC = () => {
  const dispatch:AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const loading = useSelector((state: RootState) => state.products.status);
  const searchQueryRef = useRef<HTMLInputElement>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

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
    setCurrentPage(1); 
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
   
    <div className='main-body'>
      <input
        className='input-field'
        type="text"
        placeholder="Search products by name..."
        ref={searchQueryRef}
        onChange={handleSearchChange}
      />
      {loading==="loading"?(<Shimmer/>):(
        <div>
        <main className='grid-container'>
        {currentItems.map((product) => (
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
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}            
          >
            {index + 1}
          </button>
        ))}
      </div>
      </div>)}
      
    </div>
  );
};

export default ProductList;
