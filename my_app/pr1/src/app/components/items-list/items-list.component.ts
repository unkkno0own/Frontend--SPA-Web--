import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from '../../shared/models/product.interface';
import { ProductService } from '../../core/services/product.servise';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent implements OnInit, OnDestroy {
  public searchText: string = '';
  public products: Product[] = [];
  
  private subscription: Subscription = new Subscription();

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productService.products$.subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => console.error('Помилка отримання даних:', err)
    });
  }

  onSearchChange(): void {
    this.productService.searchProducts(this.searchText);
  }

  handleItemSelected(product: Product): void {
    console.log('Деталі товару:', product);
    alert(`Ви переглядаєте: ${product.name}`);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}