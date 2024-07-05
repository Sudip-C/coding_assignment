import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import '../css/ProductDetail.css'

const ProductDetail: React.FC = () => {
  // const { id } = useParams<{ id: string }>();
  // const product = useSelector((state: RootState) =>
  //   state.products.items.find((item) => +(item.id) === Number(id))
  // );
const product={avatar
  : 
  "https://loremflickr.com/640/480/fashion",
  category
  : 
  "Computers",
  description
  : 
  "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  id
  : 
  "1",
  price
  : 
  "429.00",
  title
  : 
  "Awesome Cotton Sausages"}
  if (!product) return <div className='product_not_found'><h1>Product not found...</h1></div>;

  return (
    <main className='main' >
    <article className="article">
      <header className='header'>
        <h1>{product?.title}</h1>
        <hr></hr>
        <p><span className="price">₹ {product?.price}</span></p>
      </header>
      <section className="figure">
        <img  src={product?.avatar} alt={product?.title}/>
      </section>
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
