import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Обов'язково для *ngFor
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
    { id: 1, name: 'Смартфон X10', price: 15000, description: '...', imageUrl: '...', category: '...', inStock: true, isNew: true },
    { id: 2, name: 'Ноутбук Pro 15', price: 45000, description: '...', imageUrl: '...', category: '...', inStock: false, isNew: false },
    { id: 3, name: 'Навушники Air', price: 3000, description: '...', imageUrl: '...', category: '...', inStock: true, isNew: true }
  ];
}