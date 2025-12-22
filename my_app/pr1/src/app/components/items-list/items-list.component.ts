import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
export class ItemsListComponent implements OnInit {
  public searchText: string = '';
  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  get filteredProducts(): Product[] {
    return this.products.filter(p => 
      p.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  handleItemSelected(product: Product): void {
    console.log('Обрано товар:', product);
    alert(`Ви переглядаєте: ${product.name}`);
  }
}