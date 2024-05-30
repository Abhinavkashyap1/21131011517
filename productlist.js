import React from 'react';

const productlist = ({ products, onSelectProduct }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id} onClick={() => onSelectProduct(product.id)}>
          <h3>{product.productName}</h3>
          <p>Company: {product.company}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability}</p>
        </div>
      ))}
    </div>
  );
};

export default productlist;
