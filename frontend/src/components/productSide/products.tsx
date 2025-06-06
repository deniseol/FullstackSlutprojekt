// components/ProductList.tsx
import { useState, useEffect } from 'react';
import type { Product } from '../types/Product';
import { useNavigate } from 'react-router-dom';
import './products.css';
import { useCart } from '../../context/CartContext';


const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { addToCart } = useCart();


    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:5050/api/products');
          const data: Product[] = await response.json();
          setProducts(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
          setLoading(false);
        }
      };


      fetchProducts();
    }, []);


    if (loading) return <div>Loading products...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
      <div className="product-list">
        <h2>Hats Collection</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="product-card">
                <h3>{product.name}</h3>
                <img
                  src={product.bild_url}
                  alt="Produktbild"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/product/${product.id}`)}
                />
                <p>Price: ${product.price.toFixed(2)}</p>
                <p>In stock: {product.amount}</p>
                <button
                  disabled={product.amount <= 0}
                  onClick={() => addToCart(product)}
                >
                  {product.amount > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );}


export default Products;
