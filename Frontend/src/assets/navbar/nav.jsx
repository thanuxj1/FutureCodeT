import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const handleLogout = () => {
    // Clear auth logic here if needed
    navigate("/mainhome");
    closeSidebar();
  };

  return (
    <>
      {/* Hamburger icon */}
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <div />
        <div />
        <div />
      </div>

      {/* Sidebar Drawer */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidebar}>×</button>
        <Link to="/add-product" onClick={closeSidebar}>Add Product</Link>
        <Link to="/product-details" onClick={closeSidebar}>Product Details</Link>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
}

export default Nav;
