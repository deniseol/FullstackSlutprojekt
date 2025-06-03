// components/ProductList.tsx
import { useState, useEffect } from 'react';
import type { Product } from '../types/Product';
import './products.css';

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
      <h1>Hats Collection</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <img src={product.bild_url} alt="Produktbild" />
           {/*  <img src='../assets/product8.png' alt="Produktbild" /> */}
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>In stock: {product.amount}</p>
            <button
              disabled={product.amount <= 0}
              onClick={() => console.log('Add to cart:', product.id, product.bild_url)}
            >
              {product.amount > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
