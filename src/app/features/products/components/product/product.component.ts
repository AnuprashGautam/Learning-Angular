import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [MatButtonModule, MatIconModule, MatDividerModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input()
  product!: Product;

  discount:number=0.2; // 20% discount

  getDiscountedPrice(product: Product) {
    return product.price - (product.price * this.discount);
  }
}