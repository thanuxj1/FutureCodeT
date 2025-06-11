import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-container">
        <li className="nav-item">
          <Link to="/mainhome">
            <h1>Home</h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/add-product">
            <h1>Add Product</h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/product-details">
            <h1>Product Details</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;