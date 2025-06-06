import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/header/Header.tsx'
import Products from './components/productSide/products.tsx'
import Footer from './components/footer/Footer.tsx'
import Checkout from './components/checkout/Checkout.tsx'
import Carousel from './components/carousel/Carousel.tsx'
import ProductDetails from './components/productDetails/productDetails.tsx'

function App() {
    useEffect(() => {
        fetch("/api")
        .then(res => res.json())
        .then(data => console.log(data));
    }, []);

    return (
      <Router>
        <Header />
         <Carousel/>
          <Routes>
              {/* Huvudsidan - localhost:5173/ */}
              <Route path="/" element={
                  <>
                      <h2>WELCOME TO <br></br>the <b><u>best</u></b> HAT store ever</h2>
                
                      <Products />
                      <h2>Min app</h2>
                  </>
              } />

              {/* Cart-sidan - localhost:5173/cart */}
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>

          <Footer />
      </Router>
  )
}

export default App
