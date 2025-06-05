// Carousel.tsx
import './Carousel.css';
import type { Product } from '../types/Product';

interface CarouselProps {
  products: Product[];
}

export default function Carousel({ products }: CarouselProps) {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {products.map((product, index) => (
                    <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img 
                            className="d-block w-100" 
                            src={product.bild_url} 
                            alt={product.name} 
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};