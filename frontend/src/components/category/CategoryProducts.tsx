import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Product } from '../types/Product';

const CategoryProducts = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5050/api/categories/${categoryId}/products`);
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Products in Category {categoryId}</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="product-card">
              <h3>{product.name}</h3>
              <img src={product.bild_url} alt={product.name} />
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>In stock: {product.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
