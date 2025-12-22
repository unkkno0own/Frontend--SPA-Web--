import { Component, Input } from '@angular/core';
import { Product } from '../../shared/models/product.interface';

@Component({
  selector: 'app-item-card',
  standalone: true,
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input() item!: Product;
}