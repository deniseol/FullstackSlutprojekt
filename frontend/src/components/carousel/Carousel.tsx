import './Carousel.css';
import { useEffect, useState } from 'react';
import type { Category } from '../types/Category';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Carousel() {
    const [categories, setCategories] = useState<Category[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('http://localhost:5050/api/categories');
            const data = await response.json();
            setCategories(data);
        };
        fetchCategories();
    }, []);

    const handleCategoryClick = (categoryId: number) => {
        navigate(`/category/${categoryId}`);
    };

    return (
        <div className="category-carousel-container">
            <div className="horizontal-scroll-container">
                {categories.map((category) => (
                    <div
                        key={category.category_id}
                        className="category-item"
                        onClick={() => handleCategoryClick(category.category_id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src={category.bild}
                            alt={category.name}
                            className="category-image"
                        />
                        <div className="category-caption">
                            <h5>{category.name}</h5>
                            <p>{category.description}</p>
                        </div>
                        {/* Or add a button instead:
                        <button onClick={(e) => {
                            e.stopPropagation();
                            handleCategoryClick(category.category_id);
                        }}>
                            Show Category ID
                        </button>
                        */}
                    </div>
                ))}
            </div>
        </div>
    );
}
