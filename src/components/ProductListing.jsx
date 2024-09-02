import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import QuickViewModal from './QuickViewModal';

const ProductListing = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productsPerPage = 6;

    const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(product => category ? product.category === category : true)
        .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : sortOrder === 'desc' ? b.price - a.price : 0);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const displayedProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);


    return (
        <div>
            <div className="flex justify-between items-center mb-6 ">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded"
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded cursor-pointer">
                    <option value="">All Categories</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Wearables">Wearables</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Accessories">Accessories</option>
                </select>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border p-2 rounded cursor-pointer">
                    <option value="">Sort by Price</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProducts.map(product => (
                    <div key={product.id} onClick={() => setSelectedProduct(product)}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            {/* otional */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

            <QuickViewModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />

        </div>

    );
};

export default ProductListing;
