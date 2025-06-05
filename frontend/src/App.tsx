import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header.tsx'
import Products from './components/productSide/products.tsx'
import Footer from './components/footer/Footer.tsx'
import Checkout from './components/checkout/Checkout.tsx'
import CategoryMenu from './components/categories/CategoryMenu.tsx'

function App() {
    useEffect(() => {
        fetch("/api")
        .then(res => res.json())
        .then(data => console.log(data));
    }, []);

    return (
      <Router>
          <Header />

          <Routes>
              {/* Huvudsidan - localhost:5173/ */}
              <Route path="/" element={
                  <>
                      <h2>WELCOME TO <br></br>the <b><u>best</u></b> HAT store ever</h2>
                      <CategoryMenu />
                      <Products />
                      <h2>Min app</h2>
                  </>
              } />

              {/* Cart-sidan - localhost:5173/cart */}
              <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <Footer />
      </Router>
  )
}

export default App
