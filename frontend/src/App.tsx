import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import Products from './components/productSide/products';
import ProductDetails from './components/productDetails/productDetails';
import CategoryProducts from './components/category/CategoryProducts';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Footer from './components/footer/Footer';
import AdminForm from './components/admin/AdminForm';

function App() {
  return (
    <CartProvider>
      <Router>

        <Carousel />
        <Header />
        <Routes>
          <Route path="/" element={

            <>
              <h2>WELCOME TO <br />the <b><u>best</u></b> HAT store ever</h2>
              <Products />
              <h2>Min app</h2>
            </>
          } />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:categoryId" element={<CategoryProducts />} />
          <Route path="/admin" element={<AdminForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Carousel />} />
          <Route path="/products/:id" element={<ProductDetails />} />

        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
