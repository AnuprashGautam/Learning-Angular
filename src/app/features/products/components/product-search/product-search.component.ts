import { Component } from '@angular/core';
import { NgClass } from "@angular/common";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-search',
  imports: [FormsModule, NgClass, MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent {
  searchText:string="";
}
