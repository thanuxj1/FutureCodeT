import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../product/product';
import './ProductDetails.css'; // Import the CSS file

const URL = "http://localhost:5000/products";

function ProductDetails() {
  const [products, setProducts] = useState([]);

  const fetchHandler = async () => {
  try {
    const res = await axios.get(URL);
    setProducts(res.data); // since backend sends array directly
  } catch (err) {
    console.error("Error fetching products:", err);
  }
};


  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
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
      {products.length === 0 ? (
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