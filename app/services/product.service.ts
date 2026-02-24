import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

products: Product[] = [

  //smartphones
  {
    id: 1,
    name: 'iPhone 15 128GB',
    description: 'Latest Apple smartphone with A16 chip',
    price: 450000,
    imageUrl: 'https://store.storeimages.cdn-apple.com/iphone15.jpg',
    rating: 4.8,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/4oAXHhDC7kHyLWw',
    categoryId: 1
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    description: 'Flagship Samsung smartphone',
    price: 339956,
    imageUrl: 'https://images.samsung.com/s24.jpg',
    rating: 4.7,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/AQvk6QLtRFxK66L',
    categoryId: 1
  },
  {
    id: 3,
    name: 'Xiaomi 13 Pro',
    description: 'High performance Xiaomi phone',
    price: 210000,
    imageUrl: 'https://i01.appmifile.com/xiaomi13pro.jpg',
    rating: 4.6,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/AiV8527efy84k6K',
    categoryId: 1
  },
  {
    id: 4,
    name: 'Google Pixel 9',
    description: 'Pure Android experience',
    price: 500000,
    imageUrl: 'https://store.google.com/pixel8.jpg',
    rating: 4.7,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/7yX54vLTuy9GGRe',
    categoryId: 1
  },
  {
    id: 5,
    name: 'Poco x7 Pro',
    description: 'Fast and smooth flagship phone',
    price: 250000,
    imageUrl: 'https://image01.oneplus.net/oneplus12.jpg',
    rating: 4.5,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/2FMyaDbXDSHMNGz',
    categoryId: 1
  },

  //laptops
  {
    id: 6,
    name: 'MacBook Pro 14"',
    description: 'Apple M3 Pro chip laptop',
    price: 1200000,
    imageUrl: 'https://store.storeimages.cdn-apple.com/macbookpro.jpg',
    rating: 4.9,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/EwVqv8jxon1w4pC',
    categoryId: 2
  },
  {
    id: 7,
    name: 'ASUS ROG Strix',
    description: 'Gaming laptop with RTX',
    price: 1200000,
    imageUrl: 'https://dlcdnwebimgs.asus.com/rogstrix.jpg',
    rating: 4.7,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/EpWYf8stFZqcALc',
    categoryId: 2
  },
  {
    id: 8,
    name: 'Lenovo Legion 5',
    description: 'Powerful gaming laptop',
    price: 700000,
    imageUrl: 'https://p1-ofp.static.pub/lenovo-legion.jpg',
    rating: 4.6,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/2pS5LeDuTxSGh5c',
    categoryId: 2
  },
  {
    id: 9,
    name: 'HP Spectre x360',
    description: 'Premium ultrabook',
    price: 780000,
    imageUrl: 'https://ssl-product-images.www8-hp.com/spectre.jpg',
    rating: 4.5,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/Am3D9KH8PzNCtin',
    categoryId: 2
  },
  {
    id: 10,
    name: 'Huawei Matebook D15',
    description: 'Compact powerful laptop',
    price: 1000000,
    imageUrl: 'https://i.dell.com/xps13.jpg',
    rating: 4.6,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/4ohRn84fegvsavT',
    categoryId: 2
  },

  //headphones 
  {
    id: 11,
    name: 'AirPods Pro 2',
    description: 'Apple wireless earbuds',
    price: 100000,
    imageUrl: 'https://store.storeimages.cdn-apple.com/airpods.jpg',
    rating: 4.8,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/VCjo3UXg97KmmqU',
    categoryId: 3
  },
  {
    id: 12,
    name: 'Sony WH-1000XM5',
    description: 'Noise cancelling headphones',
    price: 135000,
    imageUrl: 'https://sony.scene7.com/wh1000xm5.jpg',
    rating: 4.9,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/6XefgQ8Peprxg4r',
    categoryId: 3
  },
  {
    id: 13,
    name: 'JBL Tune 760NC',
    description: 'Wireless JBL headphones',
    price: 35000,
    imageUrl: 'https://images.jbl.com/tune760.jpg',
    rating: 4.5,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/6CvZch8J2j43ZAA',
    categoryId: 3
  },
  {
    id: 14,
    name: 'Samsung Buds 2',
    description: 'Premium Samsung earbuds',
    price: 85000,
    imageUrl: 'https://images.samsung.com/buds2pro.jpg',
    rating: 4.6,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/DaJeUQLD2EPki2x',
    categoryId: 3
  },
  {
    id: 15,
    name: 'Beats Studio 3',
    description: 'Stylish wireless headphones',
    price: 125000,
    imageUrl: 'https://store.storeimages.cdn-apple.com/beats.jpg',
    rating: 4.4,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/87y6B6vRtFGBfWG',
    categoryId: 3
  },

  //tablets
  {
    id: 16,
    name: 'iPad Pro 11"',
    description: 'Powerful Apple tablet',
    price: 750000,
    imageUrl: 'https://store.storeimages.cdn-apple.com/ipadpro.jpg',
    rating: 4.9,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/Fn6fxjSDNgGt9Vx',
    categoryId: 4
  },
  {
    id: 17,
    name: 'Samsung Galaxy Tab S11',
    description: 'Premium Android tablet',
    price: 515000,
    imageUrl: 'https://images.samsung.com/tabs9.jpg',
    rating: 4.7,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/4vBbMiWNdzL3HLU',
    categoryId: 4
  },
  {
    id: 18,
    name: 'Xiaomi Pad 6',
    description: 'Affordable powerful tablet',
    price: 170000,
    imageUrl: 'https://i01.appmifile.com/pad6.jpg',
    rating: 4.6,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/4kBS3KZ7ft2tXs7',
    categoryId: 4
  },
  {
    id: 19,
    name: 'Lenovo Ideal Tab Pro',
    description: 'Large display tablet',
    price: 250000,
    imageUrl: 'https://p1-ofp.static.pub/lenovo-tab.jpg',
    rating: 4.4,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/BqfoLFv3R8YENNg',
    categoryId: 4
  },
  {
    id: 20,
    name: 'Huawei MatePad 11.5',
    description: 'Huawei HarmonyOS tablet',
    price: 225000,
    imageUrl: 'https://consumer.huawei.com/matepad11.jpg',
    rating: 4.5,
    likes: 0,
    link: 'https://l.kaspi.kz/shop/95RwkLPCe5b7MHT',
    categoryId: 4
  }
];

  getCategories() {
    return this.categories;
  }

  getProducts() {
    return this.products;
  }
}