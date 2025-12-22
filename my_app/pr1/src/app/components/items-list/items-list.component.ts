import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Обов'язково для [(ngModel)]
import { Product } from '../../shared/models/product.interface';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent {
  public searchText: string = '';
  public products: Product[] = [
    { id: 1, name: 'Смартфон X10', price: 15000, description: '...', imageUrl: 'https://static5.depositphotos.com/1005574/413/v/600/depositphotos_4139575-stock-illustration-mobile-phone.jpghttps://st.depositphotos.com/1456491/3656/v/600/depositphotos_36569557-stock-illustration-laptop-isolated-on-white.jpg', category: '...', inStock: true, isNew: true },
    { id: 2, name: 'Ноутбук Pro 15', price: 45000, description: '...', imageUrl: 'https://st.depositphotos.com/1456491/3656/v/600/depositphotos_36569557-stock-illustration-laptop-isolated-on-white.jpg', category: '...', inStock: false, isNew: false },
  ];

  get filteredProducts(): Product[] {
    return this.products.filter(p => 
      p.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  handleItemSelected(product: Product): void {
    console.log('Інформація про обраний елемент:', product);
    alert(`Ви переглядаєте: ${product.name}`);
  }
}