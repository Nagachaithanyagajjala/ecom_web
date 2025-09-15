import { Product } from '../types';

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    price: 299.99,
    originalPrice: 399.99,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    colors: ['Black', 'White', 'Silver'],
    tags: ['wireless', 'noise-cancelling', 'premium']
  },
  {
    id: '2',
    name: 'Smart Fitness Tracker',
    description: 'Advanced fitness tracker with heart rate monitoring and GPS tracking.',
    price: 149.99,
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    rating: 4.7,
    reviews: 203,
    inStock: true,
    colors: ['Black', 'Blue', 'Pink'],
    tags: ['fitness', 'smart', 'gps']
  },
  {
    id: '3',
    name: 'Smartphone 128GB',
    description: 'Latest smartphone with advanced camera system and fast processor.',
    price: 699.99,
    originalPrice: 799.99,
    images: [
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    colors: ['Black', 'White', 'Blue'],
    tags: ['smartphone', 'camera', 'fast']
  },
  {
    id: '4',
    name: 'Wireless Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with rich bass and 12-hour battery life.',
    price: 79.99,
    images: [
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    rating: 4.5,
    reviews: 156,
    inStock: true,
    colors: ['Black', 'Red', 'Blue'],
    tags: ['bluetooth', 'portable', 'bass']
  },

  // Fashion & Clothing
  {
    id: '5',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable organic cotton t-shirt with modern fit and sustainable materials.',
    price: 29.99,
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    rating: 4.4,
    reviews: 156,
    inStock: true,
    colors: ['White', 'Black', 'Gray', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['organic', 'cotton', 'sustainable']
  },
  {
    id: '6',
    name: 'Denim Jeans',
    description: 'Classic fit denim jeans made from premium cotton blend.',
    price: 89.99,
    originalPrice: 119.99,
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    rating: 4.3,
    reviews: 92,
    inStock: true,
    colors: ['Blue', 'Black', 'Gray'],
    sizes: ['28', '30', '32', '34', '36'],
    tags: ['denim', 'classic', 'cotton']
  },
  {
    id: '7',
    name: 'Summer Dress',
    description: 'Elegant summer dress perfect for casual and formal occasions.',
    price: 79.99,
    images: [
      'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    rating: 4.7,
    reviews: 134,
    inStock: true,
    colors: ['Floral', 'Navy', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['summer', 'elegant', 'versatile']
  },
  {
    id: '8',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with advanced cushioning technology.',
    price: 129.99,
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    rating: 4.6,
    reviews: 278,
    inStock: true,
    colors: ['White', 'Black', 'Gray'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    tags: ['running', 'lightweight', 'cushioning']
  },

  // Home & Kitchen
  {
    id: '9',
    name: 'Stainless Steel Cookware Set',
    description: '10-piece stainless steel cookware set with non-stick coating.',
    price: 199.99,
    originalPrice: 299.99,
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Kitchen',
    rating: 4.8,
    reviews: 89,
    inStock: true,
    tags: ['cookware', 'stainless-steel', 'non-stick']
  },
  {
    id: '10',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe and auto-brew feature.',
    price: 89.99,
    images: [
      'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Kitchen',
    rating: 4.5,
    reviews: 156,
    inStock: true,
    colors: ['Black', 'Silver'],
    tags: ['coffee', 'programmable', 'thermal']
  },
  {
    id: '11',
    name: 'Decorative Throw Pillows',
    description: 'Set of 2 decorative throw pillows with premium fabric covers.',
    price: 39.99,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Kitchen',
    rating: 4.4,
    reviews: 67,
    inStock: true,
    colors: ['Beige', 'Gray', 'Navy'],
    tags: ['decorative', 'pillows', 'premium']
  },
  {
    id: '12',
    name: 'LED Desk Lamp',
    description: 'Adjustable LED desk lamp with touch control and USB charging port.',
    price: 49.99,
    images: [
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Kitchen',
    rating: 4.6,
    reviews: 123,
    inStock: true,
    colors: ['White', 'Black'],
    tags: ['led', 'adjustable', 'usb-charging']
  },

  // Groceries & Food
  {
    id: '13',
    name: 'Premium Coffee Beans',
    description: 'Artisanal coffee beans sourced from sustainable farms with rich flavor profile.',
    price: 24.99,
    images: [
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Groceries',
    rating: 4.9,
    reviews: 78,
    inStock: true,
    tags: ['organic', 'artisanal', 'sustainable']
  },
  {
    id: '14',
    name: 'Organic Honey',
    description: 'Pure organic honey harvested from wildflower meadows.',
    price: 18.99,
    images: [
      'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Groceries',
    rating: 4.7,
    reviews: 145,
    inStock: true,
    tags: ['organic', 'pure', 'wildflower']
  },
  {
    id: '15',
    name: 'Mixed Nuts Assortment',
    description: 'Premium mixed nuts including almonds, cashews, and walnuts.',
    price: 32.99,
    images: [
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Groceries',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    tags: ['nuts', 'premium', 'healthy']
  },
  {
    id: '16',
    name: 'Olive Oil Extra Virgin',
    description: 'Cold-pressed extra virgin olive oil from Mediterranean olives.',
    price: 28.99,
    images: [
      'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Groceries',
    rating: 4.8,
    reviews: 167,
    inStock: true,
    tags: ['olive-oil', 'extra-virgin', 'mediterranean']
  },

  // Books & Media
  {
    id: '17',
    name: 'Bestselling Novel',
    description: 'Award-winning fiction novel that topped bestseller lists worldwide.',
    price: 16.99,
    originalPrice: 24.99,
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Books',
    rating: 4.7,
    reviews: 234,
    inStock: true,
    tags: ['fiction', 'bestseller', 'award-winning']
  },
  {
    id: '18',
    name: 'Programming Guide',
    description: 'Comprehensive guide to modern programming languages and frameworks.',
    price: 45.99,
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Books',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    tags: ['programming', 'technical', 'comprehensive']
  },
  {
    id: '19',
    name: 'Cookbook Collection',
    description: 'Collection of international recipes from renowned chefs.',
    price: 34.99,
    images: [
      'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Books',
    rating: 4.6,
    reviews: 98,
    inStock: true,
    tags: ['cookbook', 'international', 'recipes']
  },

  // Health & Beauty
  {
    id: '20',
    name: 'Skincare Set',
    description: 'Complete skincare routine set with cleanser, toner, and moisturizer.',
    price: 89.99,
    originalPrice: 129.99,
    images: [
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Health & Beauty',
    rating: 4.7,
    reviews: 189,
    inStock: true,
    tags: ['skincare', 'routine', 'complete']
  },
  {
    id: '21',
    name: 'Vitamin Supplements',
    description: 'Daily multivitamin supplements with essential nutrients.',
    price: 29.99,
    images: [
      'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Health & Beauty',
    rating: 4.5,
    reviews: 267,
    inStock: true,
    tags: ['vitamins', 'supplements', 'daily']
  },
  {
    id: '22',
    name: 'Hair Care Kit',
    description: 'Professional hair care kit with shampoo, conditioner, and treatment.',
    price: 59.99,
    images: [
      'https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Health & Beauty',
    rating: 4.6,
    reviews: 134,
    inStock: true,
    tags: ['hair-care', 'professional', 'treatment']
  },

  // Sports & Outdoors
  {
    id: '23',
    name: 'Yoga Mat',
    description: 'Premium non-slip yoga mat with extra cushioning for comfort.',
    price: 39.99,
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    rating: 4.8,
    reviews: 178,
    inStock: true,
    colors: ['Purple', 'Blue', 'Pink'],
    tags: ['yoga', 'non-slip', 'cushioning']
  },
  {
    id: '24',
    name: 'Camping Tent',
    description: '4-person waterproof camping tent with easy setup system.',
    price: 159.99,
    originalPrice: 199.99,
    images: [
      'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    rating: 4.7,
    reviews: 89,
    inStock: true,
    colors: ['Green', 'Orange'],
    tags: ['camping', 'waterproof', 'easy-setup']
  },
  {
    id: '25',
    name: 'Dumbbell Set',
    description: 'Adjustable dumbbell set with multiple weight options.',
    price: 199.99,
    images: [
      'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    rating: 4.6,
    reviews: 145,
    inStock: true,
    tags: ['dumbbells', 'adjustable', 'fitness']
  },

  // Accessories
  {
    id: '26',
    name: 'Minimalist Watch',
    description: 'Elegant minimalist watch with leather strap and premium Swiss movement.',
    price: 199.99,
    images: [
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Accessories',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    colors: ['Brown', 'Black', 'Navy'],
    tags: ['minimalist', 'leather', 'swiss']
  },
  {
    id: '27',
    name: 'Leather Backpack',
    description: 'Handcrafted leather backpack with laptop compartment and premium materials.',
    price: 179.99,
    originalPrice: 229.99,
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Accessories',
    rating: 4.5,
    reviews: 67,
    inStock: true,
    colors: ['Brown', 'Black', 'Tan'],
    tags: ['leather', 'handcrafted', 'laptop']
  },
  {
    id: '28',
    name: 'Sunglasses',
    description: 'UV protection sunglasses with polarized lenses and stylish frame.',
    price: 89.99,
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Accessories',
    rating: 4.4,
    reviews: 123,
    inStock: true,
    colors: ['Black', 'Brown', 'Silver'],
    tags: ['sunglasses', 'uv-protection', 'polarized']
  },

  // Baby & Kids
  {
    id: '29',
    name: 'Baby Stroller',
    description: 'Lightweight baby stroller with safety harness and storage basket.',
    price: 249.99,
    originalPrice: 299.99,
    images: [
      'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Baby & Kids',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    colors: ['Gray', 'Navy', 'Pink'],
    tags: ['baby', 'stroller', 'lightweight']
  },
  {
    id: '30',
    name: 'Educational Toy Set',
    description: 'STEM educational toy set for kids aged 5-10 years.',
    price: 49.99,
    images: [
      'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Baby & Kids',
    rating: 4.7,
    reviews: 234,
    inStock: true,
    tags: ['educational', 'stem', 'kids']
  }
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Groceries',
  'Books',
  'Health & Beauty',
  'Sports & Outdoors',
  'Accessories',
  'Baby & Kids'
];