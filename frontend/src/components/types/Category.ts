export interface Category {
    category_id: number;
    name: string;
    description: string;
    bild: string;
    products?: number[]; // Optional array of product IDs associated with the category
};
