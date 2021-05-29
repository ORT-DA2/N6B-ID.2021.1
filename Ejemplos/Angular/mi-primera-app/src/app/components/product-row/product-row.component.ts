import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {

  constructor() { }

  @Input() productt: Product;
  @Output() delete = new EventEmitter<Product>();

  onDelete(product: Product) {
    this.delete.emit(product);
  }

}
