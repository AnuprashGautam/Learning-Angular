import { Component } from '@angular/core';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductSearchComponent } from '../components/product-search/product-search.component';


@Component({
  selector: 'app-products-container',
  imports: [ProductSearchComponent, ProductListComponent],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.scss',
})
export class ProductsContainerComponent {

}
