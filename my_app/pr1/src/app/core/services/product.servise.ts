import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private initialProducts: Product[] = [
    { id: 1, name: 'Смартфон X10', price: 15000, description: 'Потужний смартфон', imageUrl: 'https://static5.depositphotos.com/1005574/413/v/600/depositphotos_4139575-stock-illustration-mobile-phone.jpghttps://st.depositphotos.com/1456491/3656/v/600/depositphotos_36569557-stock-illustration-laptop-isolated-on-white.jpg', category: 'Електроніка', inStock: true, isNew: true },
    { id: 2, name: 'Ноутбук Pro 15', price: 45000, description: 'Для роботи', imageUrl: 'https://st.depositphotos.com/1456491/3656/v/600/depositphotos_36569557-stock-illustration-laptop-isolated-on-white.jpg', category: 'Комп’ютери', inStock: false, isNew: false },
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.initialProducts);
 
  public products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.initialProducts);
  }

  searchProducts(term: string): void {
    const filtered = this.initialProducts.filter(p => 
      p.name.toLowerCase().includes(term.toLowerCase())
    );

    this.productsSubject.next(filtered);
  }
}