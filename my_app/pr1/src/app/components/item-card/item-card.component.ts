import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShortenPipe } from '../../shared/pipes/shorten.pipe';
import { Product } from '../../shared/models/product.interface';

@Component({
  selector: 'app-item-card',
  standalone: true,
  // 2. Додайте ShortenPipe у масив imports
  imports: [CommonModule, RouterModule, ShortenPipe], 
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input({ required: true }) item!: Product;
}