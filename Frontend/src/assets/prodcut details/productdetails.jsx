import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../product/product';
import './ProductDetails.css';

const URL = "http://localhost:5000/products";

function ProductDetails() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHandler = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(URL);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
      setError("Failed to delete product.");
    }
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map((product) =>
      product._id === updatedProduct._id ? updatedProduct : product
    ));
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      
      {loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={fetchHandler} className="retry-button">
            Retry
          </button>
        </div>
      ) : products.length === 0 ? (
        <p className="no-products">No products found.</p>
      ) : (
        <div className="products-list">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              onDelete={deleteProduct}
              onUpdate={updateProduct}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductDetails;