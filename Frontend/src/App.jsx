import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../src/assets/navbar/nav';
import Home from './assets/home/home';
import Addproduct from './assets/add prodcut/addproduct';
import Productdetails from './assets/prodcut details/productdetails';
import  Login from '../login/login';
import Signup from '../login/signup';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/mainhome" element={<Login />} />
        <Route path="/add-product" element={<Addproduct />} />
        <Route path="/product-details" element={<Productdetails/>} />
        <Route path="/register" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;