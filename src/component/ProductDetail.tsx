import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useSelector((state: RootState) =>
    state.products.items.find((item) => +(item.id) === Number(id))
  );

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <img src={product.avatar} alt={product.title}/>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
