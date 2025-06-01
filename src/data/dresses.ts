import { Dress } from '../types';

export const dresses: Dress[] = [
  {
    id: '1',
    name: 'Elegant Red Saree',
    category: 'Saree',
    price: 1500,
    imageUrl: 'https://images.pexels.com/photos/2876591/pexels-photo-2876591.jpeg',
    description: 'Stunning red saree with gold embroidery, perfect for weddings and special occasions.',
    sizes: ['Free Size'],
    colors: ['Red', 'Gold'],
    isAvailable: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Royal Blue Lehenga',
    category: 'Lehenga',
    price: 3000,
    imageUrl: 'https://images.pexels.com/photos/10464835/pexels-photo-10464835.jpeg',
    description: 'Royal blue lehenga with intricate embroidery and sequin work. Ideal for wedding ceremonies.',
    sizes: ['S', 'M', 'L'],
    colors: ['Blue', 'Silver'],
    isAvailable: true,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Pink Designer Gown',
    category: 'Gown',
    price: 2500,
    imageUrl: 'https://images.pexels.com/photos/9428798/pexels-photo-9428798.jpeg',
    description: 'Beautiful pink designer gown with floral embellishments. Perfect for receptions and parties.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Pink'],
    isAvailable: true,
    isFeatured: false
  },
  {
    id: '4',
    name: 'Traditional Anarkali',
    category: 'Anarkali',
    price: 2000,
    imageUrl: 'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg',
    description: 'Traditional Anarkali suit with heavy embroidery work. Suitable for festive occasions.',
    sizes: ['S', 'M', 'L'],
    colors: ['Green', 'Gold'],
    isAvailable: true,
    isFeatured: true
  },
  {
    id: '5',
    name: 'Bridal Lehenga',
    category: 'Lehenga',
    price: 5000,
    imageUrl: 'https://images.pexels.com/photos/8003172/pexels-photo-8003172.jpeg',
    description: 'Exquisite bridal lehenga with heavy work and embellishments. Perfect for your special day.',
    sizes: ['S', 'M', 'L'],
    colors: ['Red', 'Gold'],
    isAvailable: true,
    isFeatured: true
  },
  {
    id: '6',
    name: 'Silk Saree',
    category: 'Saree',
    price: 1800,
    imageUrl: 'https://images.pexels.com/photos/3812538/pexels-photo-3812538.jpeg',
    description: 'Premium silk saree with traditional design. Elegant choice for cultural events.',
    sizes: ['Free Size'],
    colors: ['Yellow', 'Gold'],
    isAvailable: true,
    isFeatured: false
  },
  {
    id: '7',
    name: 'Evening Gown',
    category: 'Gown',
    price: 2200,
    imageUrl: 'https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg',
    description: 'Stunning evening gown with intricate beadwork. Perfect for cocktail parties and formal events.',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Silver'],
    isAvailable: true,
    isFeatured: false
  },
  {
    id: '8',
    name: 'Designer Kurta Set',
    category: 'Kurta',
    price: 1200,
    imageUrl: 'https://images.pexels.com/photos/11679856/pexels-photo-11679856.jpeg',
    description: 'Modern designer kurta set with palazzo pants. Perfect for casual and semi-formal occasions.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'White'],
    isAvailable: true,
    isFeatured: false
  }
];

export const categories: string[] = [
  'All',
  'Saree',
  'Lehenga',
  'Gown',
  'Anarkali',
  'Kurta'
];