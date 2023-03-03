// import React, {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Login from "./pages/Login";
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';

import NavBar from './components/navbar';

export const Layout = () => (
  <div className=''>
    <NavBar />
    <Outlet />
  </div>
);

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
