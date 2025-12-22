import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/models/product.interface';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent {
  public products: Product[] = [
    {
      id: 1,
      name: 'Смартфон X10',
      price: 15000,
      description: 'Потужний смартфон з чудовою камерою.',
      imageUrl: 'https://static5.depositphotos.com/1005574/413/v/600/depositphotos_4139575-stock-illustration-mobile-phone.jpg',
      category: 'Електроніка',
      inStock: true
    },
    {
      id: 2,
      name: 'Ноутбук Pro 15',
      price: 45000,
      description: 'Ідеальний інструмент для розробника.',
      imageUrl: 'https://st.depositphotos.com/1456491/3656/v/600/depositphotos_36569557-stock-illustration-laptop-isolated-on-white.jpg',
      category: 'Комп’ютери',
      inStock: false
    }
  ];
}