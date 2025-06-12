import React, { useState } from 'react';
import axios from 'axios';
import '../product/product.css'; // Import the CSS file

const URL = "http://localhost:5000/products";

function Product({ product, onDelete, onUpdate }) {
  const { _id, name, price, quantity } = product;
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name, price, quantity });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    try {
      const res = await axios.put(`${URL}/${_id}`, formData);
      onUpdate(res.data.product); 
      setEditMode(false);
    } catch (err) {
      console.error("Edit failed", err);
    }
  };

  return (
    <div className="product">
      {!editMode ? (
        <>
          <h2>Product ID: {_id}</h2>
          <h3>Name: {name}</h3>
          <h3>Price: ₹{price}</h3>
          <h3>Quantity: {quantity}</h3>
          <div className="product-buttons">
            <button className="edit-button" onClick={() => setEditMode(true)}>Edit</button>
            <button className="delete-button" onClick={() => onDelete(_id)}>Delete</button>
          </div>
        </>
      ) : (
        <>
          <div className="edit-inputs">
            <input name="name" value={formData.name} onChange={handleChange} />
            <input name="price" type="number" value={formData.price} onChange={handleChange} />
            <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} />
          </div>
          <div className="product-buttons">
            <button className="save-button" onClick={saveEdit}>Save</button>
            <button className="cancel-button" onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;