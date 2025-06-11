import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from '../src/assets/navbar/nav';
import Addproduct from './assets/add prodcut/addproduct';
import Productdetails from './assets/prodcut details/productdetails';
import Login from '../login/login';
import Signup from '../login/signup';

// Inner component to access useLocation
function AppWrapper() {
  const location = useLocation();

  // Show Nav only on these two routes
  const showNavbarRoutes = ['/add-product', '/product-details'];
  const shouldShowNavbar = showNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Nav />}
      <Routes>
        
        <Route path="/mainhome" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/add-product" element={<Addproduct />} />
        <Route path="/product-details" element={<Productdetails />} />
      </Routes>
    </>
  );
}

// Outer component with Router
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
