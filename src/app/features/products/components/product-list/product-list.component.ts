import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [MatButtonModule, MatIconModule, MatDividerModule, CommonModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "High-performance running shoes designed for comfort and durability.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      discountPrice: 120,
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      is_in_inventory: true,
      items_left: 5,
      imageURL: "https://static.nike.com/a/images/c_limit/w_592,f_auto/t_product_v1/sample1.png",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name: "Adidas Ultraboost 22",
      description: "Responsive cushioning with a snug fit for daily running.",
      brand: "ADIDAS",
      gender: "MEN",
      category: "RUNNING",
      size: [7, 8, 9, 10, 11],
      color: ["Black", "Grey"],
      price: 180,
      is_in_inventory: true,
      items_left: 8,
      imageURL: "https://assets.adidas.com/images/sample2.png",
      slug: "adidas-ultraboost-22"
    },
    {
      id: 3,
      name: "Puma RS-X Reinvention",
      description: "Bold retro design with modern comfort.",
      brand: "PUMA",
      gender: "MEN",
      category: "CASUAL",
      size: [6, 7, 8, 9],
      color: ["Red", "White"],
      price: 120,
      is_in_inventory: true,
      items_left: 10,
      imageURL: "https://images.puma.com/sample3.png",
      slug: "puma-rsx-reinvention"
    },
    {
      id: 4,
      name: "Nike Air Force 1",
      description: "Classic streetwear sneaker with timeless style.",
      brand: "NIKE",
      gender: "WOMEN",
      discountPrice: 100,
      category: "CASUAL",
      size: [5, 6, 7, 8],
      color: ["White", "Pink"],
      price: 110,
      is_in_inventory: true,
      items_left: 2,
      imageURL: "https://static.nike.com/sample4.png",
      slug: "nike-air-force-1"
    },
    {
      id: 5,
      name: "Reebok Nano X2",
      description: "Versatile training shoes for gym and workouts.",
      brand: "REEBOK",
      gender: "MEN",
      discountPrice: 60,
      category: "TRAINING",
      size: [7, 8, 9, 10],
      color: ["Black", "Green"],
      price: 140,
      is_in_inventory: false,
      items_left: 0,
      imageURL: "https://reebok.com/sample5.png",
      slug: "reebok-nano-x2"
    },
    {
      id: 6,
      name: "Adidas Stan Smith",
      description: "Minimalist design with premium leather finish.",
      brand: "ADIDAS",
      gender: "UNISEX",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Green"],
      price: 100,
      is_in_inventory: true,
      items_left: 6,
      imageURL: "https://assets.adidas.com/sample6.png",
      slug: "adidas-stan-smith"
    },
    {
      id: 7,
      name: "Nike ZoomX Vaporfly",
      description: "Elite racing shoes built for speed and performance.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [8, 9, 10],
      color: ["Orange", "Black"],
      price: 250,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/sample7.png",
      slug: "nike-zoomx-vaporfly"
    },
    {
      id: 8,
      name: "Puma Future Rider",
      description: "Retro-inspired sneakers with lightweight comfort.",
      brand: "PUMA",
      gender: "WOMEN",
      category: "CASUAL",
      size: [5, 6, 7, 8],
      color: ["Yellow", "Blue"],
      price: 90,
      is_in_inventory: true,
      items_left: 7,
      imageURL: "https://images.puma.com/sample8.png",
      slug: "puma-future-rider"
    }
  ];

  addToCart:number=0;

  decrementCartItems(){
    if(this.addToCart > 0)
    {
      this.addToCart--;
    }
  }

  incrementCartItems(){
    if(this.addToCart < 10)
    {
      this.addToCart++;
    }
  }
}
