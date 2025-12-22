import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Смартфон X10', price: 15000, description: '...', imageUrl: 'https://static5.depositphotos.com/1005574/413/v/600/depositphotos_4139575-stock-illustration-mobile-phone.jpghttps://st.depositphotos.com/1456491/3656/v/600/depositphotos_36569557-stock-illustration-laptop-isolated-on-white.jpg', category: '...', inStock: true, isNew: true },
    { id: 2, name: 'Ноутбук Pro 15', price: 45000, description: '...', imageUrl: 'https://st.depositphotos.com/1456491/3656/v/600/depositphotos_36569557-stock-illustration-laptop-isolated-on-white.jpg', category: '...', inStock: false, isNew: false },
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}