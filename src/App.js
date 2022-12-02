import './App.css';
import Header from './Components/Header';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<ProductListing />} />
          <Route exact path='/product/:productid' element={<ProductDetails />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
