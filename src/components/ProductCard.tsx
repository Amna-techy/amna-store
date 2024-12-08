import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
    </div>
  );
};

export default ProductCard;
