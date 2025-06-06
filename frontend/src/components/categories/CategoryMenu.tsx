/* import React, { useState, useEffect } from 'react';

interface Category {
  category_id: number;
  name: string;
  description: string;
  bild: string;
}

const CategoryMenu: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Category[] = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div className="loading">Loading categories...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="category-menu">
      <h2>Categories</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.category_id} className="category-card">
            <a
              href={`/category/${category.category_id}`}
              className="category-link"
              aria-label={`View ${category.name} category`}
            >
              <div className="image-container">
                <img
                  src={category.bild}
                  alt={category.name}
                  className="category-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/fallback-image.jpg';
                  }}
                />
              </div>
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;*/


import React, { useState, useEffect } from 'react';
import './CategoryMenu.css'; // Assuming you have a CSS file for styles
import type { Category } from '../types/Category'; // Adjust the import path as necessary



const CategoryMenu: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // CSS-in-JS styles
  const styles = {
    menuContainer: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '1rem',
    },
    card: {
      height: '100%',
      width: '100%',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      },
    },
    image: {
      width: '100%',
      height: '200px',

    },
    info: {
      padding: '1rem',
    },
    title: {
      margin: '0 0 0.5rem 0',
      fontSize: '1.2rem',
    },
    description: {
      color: '#666',
      fontSize: '0.9rem',
    },
    loading: {
      textAlign: 'center',
      padding: '2rem',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      padding: '2rem',
    },
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/categories');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data: Category[] = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div style={styles.loading as React.CSSProperties}>Loading categories...</div>;
  if (error) return <div style={styles.error as React.CSSProperties}>Error: {error}</div>;

  return (
    <div style={styles.menuContainer}>
      <h2>Product Categories</h2>
      <div style={styles.grid}>
        {categories.map((category) => (
          <div key={category.category_id} style={styles.card}>
            <a
              href={`/category/${category.category_id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img
                src={category.bild}
                alt={category.name}
                style={styles.image as React.CSSProperties}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/fallback-image.jpg';
                }}
              />
              <div style={styles.info}>
                <h3 style={styles.title}>{category.name}</h3>
                <p style={styles.description}>
                  {category.description.length > 100
                    ? `${category.description.substring(0, 100)}...`
                    : category.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
