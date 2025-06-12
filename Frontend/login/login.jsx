import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import "../login/login.css";

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // redireting

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (data.success) {
        alert('Login successful');
        navigate('/add-product'); // Redirect to Add Product page
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Email</label>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </form>
    </div>
  );
}

export default Login;
