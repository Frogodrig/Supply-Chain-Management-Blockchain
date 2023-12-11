import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ProductComponent from './components/ProductsComponent';
import AuthComponent from './components/AuthComponent';
import UserDetailsComponent from './components/UserCoponent';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/products" element={<ProductComponent />} />
          <Route path="/auth" element={<AuthComponent />} />
          <Route path="/user-details" element={<UserDetailsComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
