import React from 'react';
import ProductListing from './components/ProductListing';
import products from './data/products';

function App() {
  return (
    <div className="container mx-auto p-6 bg-slate-100">
      <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
      <ProductListing products={products} />
    </div>
  );
}

export default App;
