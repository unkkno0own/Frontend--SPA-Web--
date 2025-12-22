import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/models/product.interface';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input({ required: true }) item!: Product;

  @Output() selectItem = new EventEmitter<Product>();

  onDetailsClick(): void {
    this.selectItem.emit(this.item);
  }
}