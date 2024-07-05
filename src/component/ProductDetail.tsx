import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import '../css/ProductDetail.css'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useSelector((state: RootState) =>
    state.products.items.find((item) => +(item.id) === Number(id))
  );

  if (!product) return <div className='product_not_found'><h1>Product not found...</h1></div>;

  return (
    <main className='main' >
    <article className="article">
      <section className="figure">
        <img  src={product?.avatar} alt={product?.title}/>
      </section>
      <header className='header'>
        <h1>{product?.title}</h1>
        <hr></hr>
        <p><span className="price">₹ {product?.price}</span></p>
      </header>
      <section className="section">
        <h2>Product Details :</h2>
        <p>Category: <span className="category">{product?.category}</span></p>
        <p><span className="description">{product?.description}</span></p>
      </section>
      </article>
  </main>
  );
};

export default ProductDetail;
