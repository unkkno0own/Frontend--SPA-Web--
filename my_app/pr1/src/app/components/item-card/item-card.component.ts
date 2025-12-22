import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/models/product.interface';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule], // Для *ngIf та [ngClass]
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input() item!: Product;
}