import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product.interface';

@Injectable({
  providedIn: 'root' // Сервіс доступний у всьому додатку через Dependency Injection
})
export class ProductService {
  // Вихідний масив даних (імітація бази даних)
  private initialProducts: Product[] = [
    { 
      id: 1, 
      name: 'Смартфон X10', 
      price: 15000, 
      description: 'Потужний смартфон з чудовою камерою та швидким процесором.', 
      imageUrl: 'https://static5.depositphotos.com/1005574/413/v/600/depositphotos_4139575-stock-illustration-mobile-phone.jpghttps://st.depositphotos.com/1456491/3656/v/600/depositphotos_36569557-stock-illustration-laptop-isolated-on-white.jpg', 
      category: 'Електроніка', 
      inStock: true, 
      isNew: true 
    },
    { 
      id: 2, 
      name: 'Ноутбук Pro 15', 
      price: 45000, 
      description: 'Ідеальний інструмент для професійної роботи та розробки.', 
      imageUrl: 'https://st.depositphotos.com/1456491/3656/v/600/depositphotos_36569557-stock-illustration-laptop-isolated-on-white.jpg', 
      category: 'Комп’ютери', 
      inStock: false, 
      isNew: false 
    },
  ];

  // BehaviorSubject для зберігання та трансляції поточного стану списку елементів
  private productsSubject = new BehaviorSubject<Product[]>(this.initialProducts);

  // Публічний потік (Observable), на який підписуються компоненти
  public products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor() {}

  /**
   * Повертає Observable зі списком всіх товарів (використовується оператор of)
   *
   */
  getProducts(): Observable<Product[]> {
    return of(this.initialProducts);
  }

  /**
   * Знаходить один товар за його унікальним ідентифікатором
   * Цей метод виправляє помилку у компоненті item-details
   */
  getProductById(id: number): Product | undefined {
    return this.initialProducts.find(product => product.id === id);
  }

  /**
   * Фільтрує список товарів за назвою та оновлює стан BehaviorSubject
   *
   */
  searchProducts(term: string): void {
    const filtered = this.initialProducts.filter(p => 
      p.name.toLowerCase().includes(term.toLowerCase())
    );
    // Відправка оновленого списку всім підписникам
    this.productsSubject.next(filtered);
  }
}
