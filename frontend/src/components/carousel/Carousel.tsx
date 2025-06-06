import './Carousel.css';
import { useEffect, useState } from 'react';
import type { Category } from '../types/Category';

export default function Carousel() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('http://localhost:5050/api/categories');
            const data = await response.json();
            setCategories(data);
        };
        fetchCategories();
    }, []);

    return (
        <div className="category-carousel-container">
            <div className="horizontal-scroll-container">
                {categories.map((category) => (
                    <div key={category.category_id} className="category-item">
                        <img 
                            src={category.bild} 
                            alt={category.name}
                            className="category-image"
                        />
                        <div className="category-caption">
                            <h5>{category.name}</h5>
                            <p>{category.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}