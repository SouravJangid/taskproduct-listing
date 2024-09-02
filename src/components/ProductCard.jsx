import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border bg-slate-200 p-4 rounded hover:shadow-lg cursor-pointer">
   <div className="overflow-hidden h-[25rem] w-full">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110 rounded" 
        />
      </div>
      <h3 className="text-lg font-bold mt-4">{product.name}</h3>
      <p className="text-gray-600 mt-2">${product.price}</p>
      <p className="text-sm text-gray-500 mt-2">{product.description}</p>
    </div>
  );
};

export default ProductCard;
