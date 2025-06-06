export interface Product {
    id: number;
    name: string;
    price: number;
    amount: number;
    bild_url: string;
    description?: string; // Optional field for product description
}
