import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../add prodcut/addproduct.css"

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // <-- here

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await axios.post('http://localhost:5000/products', formData);
      if (res.status === 201) {
        setMessage('✅ Product added successfully!');
        setFormData({ name: '', price: '', quantity: '' }); // Clear form

        // Assuming your backend returns the new product's ID as res.data.id
        const productId = res.data.id;

        // Redirect to product details page
        navigate(`/product-details`);
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to add product. Please check inputs.');
    }
  };

  return (
    <div className="add-product-container">
      <h2 className="add-product-title">Add Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <label className="form-label">
          Product Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            className="form-input"
          />
        </label>
        <label className="form-label">
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="1"
            className="form-input"
          />
        </label>
        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
      {message && (
        <p className={`message ${message.includes('✅') ? 'success' : 'error'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default AddProduct;
