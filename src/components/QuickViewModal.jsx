import React from 'react';

const QuickViewModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <button className="float-right text-red-500" onClick={onClose}>X</button>
        <div className="overflow-hidden lg:h-[40rem]  ">
        <img 
          src={product.image} 
          alt={product.name} 
          className="transform transition-transform duration-500 ease-in-out hover:scale-110 w-full h-full object-cover rounded" 
        />
      </div>
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-lg text-gray-700 mt-2">${product.price}</p>
        <p className="text-sm text-gray-500 mt-2">{product.description}</p>
      </div>
    </div>
  );
};

export default QuickViewModal;
