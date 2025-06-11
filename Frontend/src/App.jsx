import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../src/assets/navbar/nav';
import Home from './assets/home/home';
import Addproduct from './assets/add prodcut/addproduct';
import Productdetails from './assets/prodcut details/productdetails';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/mainhome" element={<Home />} />
        <Route path="/add-product" element={<Addproduct />} />
        <Route path="/product-details" element={<Productdetails/>} />
      </Routes>
    </Router>
  );
}

export default App;